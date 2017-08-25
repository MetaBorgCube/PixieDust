module mui

config
  backend: PixieDust
  target: webpack
  
  
imports
  
  material-ui as Mui {
    component MuiThemeProvider()
    component AppBar(title: String)
    component DatePicker(value: Datetime, hintText: String?, container: String?) 
    component Drawer(open: Boolean, openSecondary: Boolean?)
  }
  
  ../components/inputs as Input {
    component BooleanInput(ref value: Boolean)
  }
  
    
model
  entity AppState{
    drawerOpen: Boolean
  }
  
data
  appState: AppState{
    drawerOpen = false
  }
  
  
view

  component Drawer(open: Boolean) {
  
    @Mui.Drawer(open, no value) { children }
  }
  
  component RightDrawer(open: Boolean) {
    @Mui.Drawer(open, true) { children }
  }

  component DatePicker(d: Datetime){
    @Mui.DatePicker(d, "Some date field", "inline")
  }
  
  component MainBar(){
    @Mui.AppBar("Hello world") {}
  }

  component Main(appState: AppState){
    @MuiThemeProvider{
      div {
        @BooleanInput(appState.drawerOpen) {}
        @MainBar()
        @RightDrawer(appState.drawerOpen) {
          "Hello world!"
        }
        @DatePicker(2012-01-01 20:00:00)
      }
    }
  }
  
execute
  @Main(appState)
  @Main(appState)
  if(appState.drawerOpen) "Yes" else "No"
  
  
  
  