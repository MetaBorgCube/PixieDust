module bootstrap

config
  backend: PixieDust
  target: html

imports  
  target/main.generated.js as Native {
    component Button(bsSize: String?, bsStyle: String?)
    component ButtonGroup()
    component Alert(bsStyle: String?)
  }

view
  component Button(){
    @Native.Button(no value, no value) { children }
  }
  
  component LargePrimaryButton(){
    @Native.Button("large", "primary") { children}
  }
  component LargeButton(){
    @Native.Button("large", no value) { children }
  }
  
  component MaybePrimaryButton(isPrimary: Boolean) {
    @Native.Button(no value, if(isPrimary) "primary") { children }
  }
  
  component Alert() { @Native.Alert(no value) { children } }
  
  component Warning(message: String) { @Native.Alert("warning") { message } }
  component Error(message: String) { @Native.Alert("danger") { message } }
  
  component Main(){
    div {
      @ButtonGroup{
        @Button() { "b1" }
        @MaybePrimaryButton(false) { "b2" }
        @MaybePrimaryButton(true) { "b3" }
      }
    }
    div {
      @ButtonGroup{
        @LargeButton(){ "B1" }
        @LargeButton(){ "B2" }
        @LargePrimaryButton(){ "B3" }
      }
    }
    @Warning("Watch out!")
    @Error("Something bad happened")
  }

execute
  @Main()