module todo (on-demand incremental)

config
  backend: PixieDust
  phase: generate
  target: webpack

imports
  ../components/inputs {
    component BooleanInput(ref value: Boolean)
  }
  
  ../components/Select {
    component Select(choice: String*, labels: String*, ref selection: String?)
  }

model
  
  entity TodoList{
    view: View = div { for(todo in visibleTodos) (todo.view) }
    filter: String = "ALL" (default)
  }
  
  entity Todo {
    task: String
    finished: Boolean
    view : View = @Todo(this)
  }
  
  relation TodoList.todos * <-> 1 Todo.list
  relation TodoList.visibleTodos = 
    switch {
      case filter == "ALL" => todos
      case filter == "NOT_FINISHED" => todos.filter(todo => !todo.finished)
      case filter == "FINISHED" => todos.filter(todo => todo.finished)
      default => todos
    } <-> Todo
view

  component TodoList(list: TodoList){
    
    input[type="text", placeholder="Todo..."]
    @Select(
      "ALL" ++ "FINISHED" ++ "NOT_FINISHED",
      "All" ++ "Finished todos" ++ "Unfinished todos",
      list.filter
    )
    a{ "Clear finished todos" }
    list.view
  }

  component Todo(todo: Todo){
    div {
      label {
        @BooleanInput(todo.finished)
        span { todo.task }
        button{ "X" }
      }
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