module todo

config
  backend: PixieDust
  target: webpack
//  target: html
//  include stylesheets/main.css

imports
  pixiedust/components/native/inputs {
    component StringInput(ref value: String, onSubmit: Action[String]?, id: String, autoFocus: Boolean, placeholder: String)
    component AutoFocusStringInput(ref value: String, className: String, visible: Boolean, onSubmit: Action[])
  }
  
model
  
  entity TodoList{
    filter: String = "All" (default)
    allFinished: Boolean = conj(todos.finished)
    todosLeft: Int = (todos \ finishedTodos).count()
    input: String = "" (default)
  }
  
  entity Todo {
    task: String
    finished: Boolean
  }
  
  relation TodoList.editing ? <-> ? Todo.editing_inverse
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
    action toggleAll(){
      list {
        todos {
          finished = !list.allFinished
        }
      }
    }
    
    action createTodo(task: String) {
      t: Todo {
        task = task
        finished = false
        list = list
      }
      list { input = "" }
    }
    
    section[className="todolist"]{
      header[className="header"] {
      h1 { "todos" }
        @StringInput(list.input, if(list.input != "") createTodo, "new-todo", false, "What needs to be done?")  
      }
      
      if(list.todos.count() > 0)
        section[className="main"] {
          @BooleanInput(list.allFinished, "toggle-all", toggleAll)
          ul[className="todo-list"] {
            for(todo in list.visibleTodos) (@TodoItem(todo))
          }
        }
      @TodoFooter(list)
    }
  }
  
  component TodoFilters(list: TodoList) {
    ul[className="filters"]{
      @FilterType("All", list)
      @FilterType("Completed", list)
      @FilterType("Not Completed", list)
    }
  }
  

  component FilterType(name: String, list: TodoList) {
    action setFilter(){
      list { filter = name }
    }
    li {
      a[className=if(list.filter == name) "selected" else "", onClick=setFilter()] { 
        name 
      }
    }
  }
  
  component TodoFooter(list: TodoList){
    action clearCompleted(){
      list {
        todos = todos \ finishedTodos
      }
    }
  
    footer[className="footer"] {
      span[className="todo-count"] {
        "${list.todosLeft} ${if(list.todosLeft == 1) "item" else "items"} left"
      }
      
      @TodoFilters(list)
      
      if(list.finishedTodos.count() > 0) 
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
        list {
          todos = todos \ todo
        }
      }
    }
    
    action editTodo(){
      todo.list { editing = todo }
    }
    
    action finishEditing(){
      todo.list { editing = no value }
    }
    
    todo.list.editing == todo
    li[className= if(todo.finished) "completed" else "" ++ if((todo.list.editing == todo <+ false)) " editing" else ""]{
      div[className="view"] {
        @BooleanInput(todo.finished, "toggle", toggleFinished)
        label[onDoubleClick=editTodo()] { todo.task }
        button[className="destroy", onClick=removeTodo()]
      }
      @AutoFocusStringInput(todo.task, "edit", todo.list.editing == todo, finishEditing)
    }
  }
  
  
data
  l1 : TodoList {
//    todos =
//      t1 { task="t1" finished = true }
//    , t2 { task="t2" }
//    , t3 { task="t3" finished = true }
  }
  
execute
  @TodoList(l1)