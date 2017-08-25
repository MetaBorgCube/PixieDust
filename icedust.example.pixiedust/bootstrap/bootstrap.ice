module bootstrap

config
  backend: PixieDust
  target: webpack

imports  
  react-bootstrap as Native {
    component Button(bsSize: String?, bsStyle: String?)
    component ButtonGroup()
    component Alert(bsStyle: String?)
    component Glyphicon(glyph: String)
    
    component ControlLabel()
    component FormGroup(controlId: String)
    component FormControl(value: String)
    component Checkbox(checked: Boolean)
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
    
    @Glyphicon("ok")
    
    @FormGroup("checkboxChecked"){
      @ControlLabel{ "Checkbox" }
      @Checkbox(true)
    }
    @FormGroup("checkboxUnchecked"){
      @ControlLabel{ "Checkbox(unchecked)" }
      @Checkbox(false)
    }
    
    @FormGroup("inputText"){
      @ControlLabel { "Input" }
      @FormControl("Input Text")
    }

    @Error("Something bad happened")
  }

execute
  @Main()