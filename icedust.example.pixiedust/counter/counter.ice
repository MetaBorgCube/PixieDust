module counter

config
  backend: PixieDust
  target: html

model
  entity Counter {
    value: Int
  }
  
data
  counter: Counter {
    value = 0
  }
  
view
  component Counter(c: Counter) {
    action increment(by: Int) {
      c {
        value = value + by
      }
    }
    
    button[onClick=increment(-1)] { "-" }
    span { c.value }
    button[onClick=increment(1)] { "+" }
  }
  
execute
  @Counter(counter)