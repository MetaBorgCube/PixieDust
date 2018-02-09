var React = require('react');
var PropTypes = require('prop-types');

class SchedulerProdiver extends React.Component{

  render(){
    return React.Children.only(this.props.children);
  }

  getChildContext(){
    return {
      scheduler: this.props.scheduler
    }
  }
}
SchedulerProdiver.childContextTypes = {
  scheduler: PropTypes.object
};

module.exports = SchedulerProdiver;