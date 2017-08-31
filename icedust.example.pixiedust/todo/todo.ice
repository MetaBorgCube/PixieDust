module todo

config
  backend: PixieDust
  target: html

imports
model
  
  entity TodoList{
    view: View = div { for(todo in visibleTodos) (todo.view) }
    filter: String = "All" (default)
    allFinished: Boolean = conj(todos.finished)
  }
  
  entity Todo {
    task: String
    finished: Boolean
    view : View = @Todo(this)
  }
  
  relation TodoList.todos * <-> 1 Todo.list
  relation TodoList.finishedTodos = todos.filter(todo => todo.finished) <-> Todo.inverseFinishedTodos
  relation TodoList.visibleTodos = 
    switch {
      case filter == "All" => todos
      case filter == "Completed" => finishedTodos
      case filter == "Not Completed" => todos \ finishedTodos
      default => todos
    } <-> Todo.inverseVisibleTodos
view

  component TodoList(list: TodoList){
    action clearCompleted(){
      list {
        todos = todos \ finishedTodos
      }
    }
    
    action toggleAll(){
      list {
          todos {
            finished = !list.allFinished
          }
      }
    }
    
    @Filter(list)
    @BooleanInput(list.allFinished, toggleAll)
    input[type="text", placeholder="Todo..."]
    
    
    a[onClick=clearCompleted()]{ "Clear finished todos" }
    list.view
  }
  
  component Filter(list: TodoList) {
    @FilterType("All", list)
    @FilterType("Completed", list)
    @FilterType("Not Completed", list)
  }
  

  component FilterType(name: String, list: TodoList) {
    action setFilter(){
      list { filter = name }
    }
    span[onClick=setFilter(), style={backgroundColor=if(list.filter == name) "red" else "white"}] { name }
  }
  
  component BooleanInput(checked: Boolean, onChange: Action[]) {
    input[type="checkbox", checked=checked, onChange=onChange()]
  }

  component Todo(todo: Todo){
    action toggleFinished(){
      todo {
        finished = !finished
      }
    }
    
    action removeTodo(){
      todo {
        list {
          todos = todos \ todo
        }
      }
    }
  
    div {
      label {
        @BooleanInput(todo.finished, toggleFinished)
        span { todo.task }
        
      }
      button[onClick=removeTodo()]{ "X" }
    }
  }
  
data
  l1 : TodoList{
    todos =
      t1: Todo{
        task = "Write js backend"
        finished = true
      },
      t2: Todo{
        task = "Setup nashorn"
        finished = true
      },
      t3: Todo {
        task = "Finish thesis"
        finished = false
      }
  }
  
execute
  @TodoList(l1)