let View= require('ampersand-view');

module.exports=View.extend({
    template: document.querySelector('#carrepair-template').innerHTML,
    bindings:{
      'model.funcTires': '.funcTires',
      'model.paintcolor': '.pcolor',
      'model.exhaust': '.exhaust',
      'model.horsepower': '.hpower',
      'model.mpgallon': '.mpgallon',

      'model.total': '.a_total',
      

    },

render: function(){
    this.renderWithTemplate();
},
});