var header = require('../components/header');
var search = require('../components/search');

var controller = function() {
    this.headerController = new header.controller();
    this.homeController = new search.controller();
};

var view = function(ctrl) {
    return [
        header.view(ctrl.headerController),
        m('.row', search.view(ctrl.homeController))
    ];
};

module.exports = {controller: controller, view: view};
