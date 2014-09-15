var header = require('../components/header');
var repo = require('../components/repoDetail');

var controller = function() {
    this.headerController = new header.controller();
    this.repoController = new repo.controller();
};

var view = function(ctrl) {
    return [
        header.view(ctrl.headerController),
        m('.row', repo.view(ctrl.repoController))
    ];
};

module.exports = {controller: controller, view: view};
