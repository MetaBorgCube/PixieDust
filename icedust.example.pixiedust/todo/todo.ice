module todo



imports
  ./inputs {
    StringInput(ref value: String, className: String, placeHolder: String, onSubmit: Action[]?) : View
  }
 
functions
  li(v: View): View = li { v } 

model
  entity TodoList{
    todosLeft: Int = count(todos \ finishedTodos) + sum(children.todosLeft)
    allFinished: Boolean = todosLeft == 0
   
    //view state
    
    input: String = "" (default)
    canCreate: Boolean = input != ""
    show: String = "All" (default)
    
    actions {
      addTodo() {
        todos += Todo { task = input finished = false }
        input := ""
      }
      toggleAll(){ 
        allTodos.finished := !allFinished 
      }
      clearFinished(){ todos -= finishedTodos }
      setVisibility(to: String){ 
        show := to
      }
    }
    
    //views
    view: View = section[className="todolist"]{
      header
      if(todos.count() > 0)  section[className="main"]{
        input[type="checkbox", className="toggle-all", checked=allFinished, onChange=toggleAll()]
        ul[className="todo-list"]{ 
          visibleTodos.view 
        }
      }
      children.view
      footer
    }
    
    header : View = header[className="header"] {
      h1 { "Todos" }
      (StringInput(input, "new-todo", "What needs to be done?", addTodo))
    }
    
    footer : View = footer[className="footer"] {
      span[className="todo-count"] {
         "${todosLeft} ${if(todosLeft == 1) "item" else "items"} left"
      } 
      
      ul[className="filters"]{
        li { a[className=if(show == "All") "selected", onClick=setVisibility("All")] { "All" } }
        li { a[className=if(show == "Completed") "selected", onClick=setVisibility("Completed")] { "Completed" } }
        li { a[className=if(show == "Not Completed") "selected", onClick=setVisibility("Not Completed")] { "Not Completed" } }
      }
      if(count(finishedTodos) > 0)
        a[className="clear-completed", onClick=clearFinished()]{ "Clear completed" }
    }
  }
  entity Todo {
    task: String
    finished: Boolean = false (default)
    view : View = 
      li[className=if(finished) "completed"] {
        div[className="view"] { 
          input[type="checkbox", className="toggle", checked=finished, onChange=toggleTodo()]
          label { task }
          button[className="destroy", onClick=deleteTodo()]
          
        }
      }
      
      actions {
        toggleTodo() { finished := !finished }
        deleteTodo() { list.todos -= this } 
      }
  }

relation TodoList.todos * <-> 1 Todo.list
relation TodoList.parent ? <-> * TodoList.children

relation TodoList.allChildren = this ++ children.allChildren <-> TodoList.inverseAllChildren
relation TodoList.allTodos = this.todos ++ children.allTodos <-> Todo.inverseAllTodos
relation TodoList.finishedTodos = todos.filter(todo => todo.finished) <-> Todo.inverseFinishedTodos

//view relations
relation TodoList.visibleTodos * = 
    switch {
      case show == "All" => todos
      case show == "Completed" => finishedTodos
      case show == "Not Completed" =>  todos \ finishedTodos
      default => todos
    } <-> Todo.inverseVisibleTodos
  
data
  list: TodoList {
    todos = 
      t1 { task = "T1 task" finished = true },
      t2 { task = "T2 task" },
      t3 { task = "T3 task" }
//    children = 
//      list2 {
//        todos = 
//          t4 { task = "T4 task" finished = true },
//          t5 { task = "T5 task" },
//          t6 { task = "T6 task" }  
//      }
  }
  
execute
  list.view