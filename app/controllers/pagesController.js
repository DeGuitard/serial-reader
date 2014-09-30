var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Skip Beat!';
  this.render();
}

module.exports = pagesController;
