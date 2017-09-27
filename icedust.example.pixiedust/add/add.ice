module ice

config
  backend: PixieDust
  target: webpack
//  target: html



model
  entity Counter {
    value: Int = 0 (default)
  }
  
  entity Add {
    value: Int = lhs.value + rhs.value
  }
  
  relation Add.lhs 1 <-> Counter.inverseLhs
  relation Add.rhs 1 <-> Counter.inverseRhs
  

imports
  pixiedust/components/native/inputs {
    component IntInput(ref value: Int)
  }
  
view
  component Counter(c: Counter) {
    action increment(by: Int) {
      c {
        value = value + by
      }
    }
  }
  
  component Add(add: Add) {
    action reset(){
      add {
        lhs { value = 0 }
        rhs { value = 0 }
      }
    }
    button[onClick=reset()]{ "Reset" }
    @IntInput(add.lhs.value) "+" @IntInput(add.rhs.value) "=" add.value
  }

data
  add: Add {
    lhs = c1 {}
    rhs = c2 {}
  }  
  
execute
  @Add(add)