/** @jsx React.DOM */

define([
  'react',
], function(React) {
  var Experiment = React.createClass({displayName: 'Experiment',
    render: function() {
      return (
      	React.DOM.div( {className:"experiment2"} )
      );
    }
  });

  return Experiment;

});
