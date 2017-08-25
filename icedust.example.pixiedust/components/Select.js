var Class = require('jsface').Class;
var _ = require('lodash');
var React = require('react');

var PixieDustComponent = require('pixiedust/components/PixieDustComponent');

var NO_VALUE = '__NO_VALUE';

var Select = Class(PixieDustComponent, {
  constructor: function Select(props){
    this.onChange = this.onChange.bind(this);
  },

  onChange: function(e){
    var value = e.target.value;
    if(value == NO_VALUE){
      value = null;
    }

    this.dispatch(this.props.selection$setter(
      this.props.selection$identity,
      value
    ));

  },

  render: function(){
    var labels = this.props.labels;
  	var choice = this.props.choice;
  	var selection = this.props.selection;
  	    
    if(selection == null) {
      selection = NO_VALUE;
    }


    var options = _.zip(choice, labels).map(function(tpl){
    	var id = tpl[0];
    	var label = tpl[1];
    	
    	return React.createElement('option', {
    		key: id,
    		value: id
    	}, label);
    });

    return React.createElement('select',
    		{
    			value: selection,
    			onChange: this.onChange
    		},
    		React.createElement('option', {
    			value: NO_VALUE
    		}, "Select an entry"),
    		options
    )
  }
});

module.exports = {
		Select: Select
};