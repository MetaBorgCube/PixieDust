var React = require('react');
var PropTypes = require('prop-types');

class PixieDustComponent extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.componentIsMounted = false;
    this.rerender = this.rerender.bind(this);
    this.scheduleRender = this.scheduleRender.bind(this);
  }

  componentDidMount() {
    this.componentIsMounted = true;
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  rerender() {
    if(this.componentIsMounted){
      this.forceUpdate();
    }
  };

  scheduleRender() {
    console.log('scheduling ' + this.constructor.name);
    this.context.scheduler.schedule(this.rerender);
  };
}
PixieDustComponent.contextTypes = {
  scheduler: PropTypes.object
};
module.exports = PixieDustComponent;