define('experiments',{
  'some experiment' : {
    component: function( options ) {
      require(['js/components/experiment'],function(Experiment){
        options.component.setState({ 'experiment': Experiment(null ) });
      });
    },
    secondComponent: function() {
      require(['js/experiment2'],function(Experiment){

      });
    }

  }
});
