module mui

config
  backend: PixieDust
  target: html

imports
  target/main.generated.js as Native {
    component MuiThemeProvider()
    component AppBar(title: String)
  }
  
view
  component Main(){
    @MuiThemeProvider(){
      @AppBar("Hello world")
    }
  }
  
execute
  @Main()