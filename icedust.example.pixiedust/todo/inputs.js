var React = require('react');
var PixieDustComponent = require('./src/runtime/components/PixieDustComponent')

class StringInput extends PixieDustComponent {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.subscribeDirtyDependsOn(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.value !== nextProps.value) {
      this.unsubscribeDirtyDependsOn(this.props)
      this.subscribeDirtyDependsOn(nextProps)
    }
  }

  componentWillUnmount(){
    super.componentWillUnmount();
    this.unsubscribeDirtyDependsOn(this.props);
  }

  onChange(e) {
    var value = this.props.value
    value.setter(e.target.value)
  }

  onKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.onSubmit();
    }
  }

  render(){
    return React.createElement('input', {
      type: 'text',
      className: this.props.className,
      placeholder: this.props.placeholder,
      value: this.props.value.getter(),
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    })
  }

  subscribeDirtyDependsOn(props) {
    this.props.value.subscribeDirty(this.scheduleRender);
  }

  unsubscribeDirtyDependsOn(props) {
    this.props.value.unsubcribeDirty(this.scheduleRender);
  }
}


class Wrapped extends PixieDustComponent{

  render(){
    return React.createElement('div', {},
      React.createElement('h1', {}, "Wrapped"),
      this.props.children
    )
  }
}

module.exports = {
  StringInput: function(value, className, placeholder, onSubmit) { return React.createElement(StringInput, {
    value: value,
    className: className,
    placeholder: placeholder,
    onSubmit: onSubmit
  })},

  Wrapped: function(children) {
    return React.createElement.apply(null, [Wrapped, {}].concat(children))
  }
};