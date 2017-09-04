module todo

config
  backend: PixieDust
  target: html
  include stylesheets/main.css

imports
  pixiedust/components/native/inputs {
    component StringInput(ref value: String, onSubmit: Action[String]?, className: String, autoFocus: Boolean, placeholder: String)
    component AutoFocusStringInput(ref value: String, className: String, visible: Boolean, onSubmit: Action[])
  }
  
model
  
  entity TodoApp{
    filter: String = "All" (default)
    allFinished: Boolean = conj(todos.finished)
    todosLeft: Int = (todos \ finishedTodos).count()
    input: String = "" (default)
  }
  
  entity Todo {
    task: String
    finished: Boolean
  }
  
  relation TodoApp.editing ? <-> ? Todo.editing_inverse
  relation TodoApp.todos * <-> 1 Todo.app
  relation TodoApp.finishedTodos = todos.filter(todo => todo.finished) <-> Todo.inverseFinishedTodos
  relation TodoApp.visibleTodos = 
    switch {
      case filter == "All" => todos
      case filter == "Completed" => finishedTodos
      case filter == "Not Completed" => todos \ finishedTodos
      default => todos
    } <-> Todo.inverseVisibleTodos
view

  component TodoApp(app: TodoApp){
    action toggleAll(){
      app {
          todos {
            finished = !app.allFinished
          }
      }
    }
    
    action createTodo(task: String) {
      t: Todo {
        task = task
        finished = false
        app = app
      }
      app { input = "" }
    }
    
    section[className="todoapp"]{
      header[className="header"] {
      h1 { "todos" }
        @StringInput(app.input, if(app.input != "") createTodo, "new-todo", true, "What needs to be done?")  
      }
      
      if(app.todos.count() > 0)
        section[className="main"] {
          @BooleanInput(app.allFinished, "toggle-all", toggleAll)
          ul[className="todo-list"] {
            for(todo in app.visibleTodos) (@TodoItem(todo))
          }
        }
      @TodoFooter(app)
    }
  }
  
  component TodoFilters(app: TodoApp) {
    ul[className="filters"]{
      @FilterType("All", app)
      @FilterType("Completed", app)
      @FilterType("Not Completed", app)
    }
  }
  

  component FilterType(name: String, app: TodoApp) {
    action setFilter(){
      app { filter = name }
    }
    li {
      a[className=if(app.filter == name) "selected" else "", onClick=setFilter()] { 
        name 
      }
    }
  }
  
  component TodoFooter(app: TodoApp){
    action clearCompleted(){
      app {
        todos = todos \ finishedTodos
      }
    }
  
    footer[className="footer"] {
      span[className="todo-count"] {
        "${app.todosLeft} ${if(app.todosLeft == 1) "item" else "items"} left"
      }
      
      @TodoFilters(app)
      
      if(app.finishedTodos.count() > 0) 
        a[className="clear-completed", onClick=clearCompleted()]{ "Clear completed" }
    }
  }
  
  component BooleanInput(checked: Boolean, className: String, onChange: Action[]) {
    input[
      type="checkbox" 
    , className=className 
    , checked=checked
    , onChange=onChange()
    ]
  }



  component TodoItem(todo: Todo){
    action toggleFinished(){
      todo {
        finished = !finished
      }
    }
    
    action removeTodo(){
      todo {
        app {
          todos = todos \ todo
        }
      }
    }
    
    action editTodo(){
      todo.app { editing = todo }
    }
    
    action finishEditing(){
      todo.app { editing = no value }
    }
    
    todo.app.editing == todo
    li[className= if(todo.finished) "completed" else "" ++ if((todo.app.editing == todo <+ false)) " editing" else ""]{
      div[className="view"] {
        @BooleanInput(todo.finished, "toggle", toggleFinished)
        label[onDoubleClick=editTodo()] { todo.task }
        button[className="destroy", onClick=removeTodo()]
      }
      @AutoFocusStringInput(todo.task, "edit", todo.app.editing == todo, finishEditing)
    }
  }
  
  
data
  app : TodoApp{}
  
execute
  @TodoApp(app)