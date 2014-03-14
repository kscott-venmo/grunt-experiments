/** @jsx React.DOM */

define([
  'react',
], function(React) {
  var Experiment = React.createClass({
    render: function() {
      return (
      	React.DOM.div( {className:"experiment"} )
      );
    }
  });

  return Experiment;

});
