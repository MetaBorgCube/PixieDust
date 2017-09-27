module todo

config
  backend: PixieDust
  target: webpack

model

entity TaskApp{
    filter: String = "All" (default)
    input: String = "" (default)
    remainder : Int = rootList.allTasks.filter(task => !task.finished).count()
  }
  
  entity TaskList {
    allFinished : Boolean = conj(allTasks.finished)
    finished : Boolean = conj(tasks.finished) && conj(children.finished)
    
    rootDistance : Int = if(app.rootList == this) 0 else 1 + parent.rootDistance <+ 0
  }
  
  entity Task {
    description: String
    finished : Boolean = false (default)
    
    beingEdited: Boolean = list.app.editing == this <+ false
  }
  
  relation TaskApp.lists * <-> 1 TaskList.app
  relation TaskApp.rootList 1 <-> ? TaskList.app2
  
  relation TaskList.rootList 1 = parent.rootList <+ this <-> * TaskList
  relation TaskList.tasks * <-> 1 Task.list
  relation TaskList.children * <-> ? TaskList.parent
  
  relation TaskList.allTasks = tasks ++ children.allTasks <-> * Task.inverseAllTasks
  relation TaskApp.editing ? <-> ? Task
  
  relation TaskList.finishedTasks = tasks.filter(task => task.finished) <-> * Task.inverseFinishedTasks
  relation TaskList.visibleTasks = 
    switch {
      case app.filter == "All" => tasks
      case app.filter == "Completed" => finishedTasks
      case app.filter == "Not Completed" => tasks \ finishedTasks
      default => tasks
    } <-> Task.inverseVisibleTasks

imports
  pixiedust/components/native/inputs {
    component StringInput(ref value: String, onSubmit: Action[String])
  }

view
  component TaskApp(app: TaskApp){
    action setRoot(list: TaskList){
      app { rootList = list }
    }
    
    
    action addTask(description: String){
      task : Task {
        list = app.rootList
        description = description
      }
      app { input = "" }
    }
    
    button[onClick=setRoot(app.rootList.rootList)] { "Root" }
    for(parent in app.rootList.parent) div {
      button[onClick=setRoot(parent)] { "Parent" }
    }
    @StringInput(app.input, if(app.input != "") addTask)
    span { "${app.remainder} ${if(app.remainder == 1) "task" else "tasks"}  left" }
    @TaskList(app.rootList)
    @TaskFilters(app)
  }
  
  component TaskList(list: TaskList) {
    action toggleChildren(){
      list.allTasks { 
        finished = !list.allFinished
      }
    }
    
    action deleteList(){
      list { parent = no value }
    }
    
    action addList(){
      l : TaskList {
        app = list.app
        parent = list
      }
      
    }
    
    action addTaskHere(){
      task: Task {
        description = list.app.input
        list = list
      }
    }
    
    action setAsRoot(){
      list.app { rootList = list }
    }
    
    div {
      @Checkbox(list.allFinished, toggleChildren)
      button[onClick=setAsRoot()] { "Zoom" }
      if(list.app.rootList != list) button[onClick=deleteList()] {"Delete List"}
      if(list.app.input != "") button[onClick=addTaskHere()] { "Add task" }
      @Nested {
        for(task in list.visibleTasks) @TaskItem(task)
      }
      if(list.rootDistance <= 3) @Nested {
        button[onClick=addList()] { "Add child" }
        for(child in list.children) (@TaskList(child))
      }
    }
  }
  
  component Checkbox(checked: Boolean, onChange: Action[]) {
    input[type="checkbox", checked=checked, onChange=onChange()]
  }

  component TaskItem(task: Task) {
    action toggleFinished() { task { finished = !finished }}
    action setEditing(task: Task?){ task.list.app { editing = task }}
    action finishEditing(description: String) { task.list.app { editing = no value } }
    
    div {
      @Checkbox(task.finished, toggleFinished)
      if(task.beingEdited)
        @StringInput(task.description, finishEditing)
      else
        span[onDoubleClick=setEditing(task), onBlur=setEditing(no value)] {
          task.description
        }
    }
  }
  
  component TaskFilters(app: TaskApp) {
    ul{
      @FilterType("All", app)
      @FilterType("Completed", app)
      @FilterType("Not Completed", app)
    }
  }

  component FilterType(name: String, app: TaskApp) {
    action setFilter(){
      app { filter = name }
    }
    li {
      a[style={backgroundColor=if(app.filter == name) "#ddd" else ""} , onClick=setFilter()] { 
        name
      }
    }
  }
  
  component Nested(){
    div[style={marginLeft="10px"}] {
      children
    }
  }
  
data
  app : TaskApp {
    rootList = { app = app }
  }
  
execute
  @TaskApp(app)