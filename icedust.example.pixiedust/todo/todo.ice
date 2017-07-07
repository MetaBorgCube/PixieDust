module todo

config
  backend: PixieDust
  target: html

model
  
  entity TodoList{
    view: View = div { todos.view }
  }
  
  entity Todo{
    task: String
    finished: Boolean
    
    view : View = @Todo(this)
  }
  
  relation TodoList.todos * <-> 1 Todo.list
  relation TodoList.finishedTodos = todos.filter(todo => todo.finished) <-> Todo

view
  native component BooleanInput(ref value: Boolean)
  
  component Todo(todo: Todo){
    div {
      label {
        @BooleanInput(todo.finished)
        span { todo.task }
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
  l1.view
  l1.finishedTodos.view