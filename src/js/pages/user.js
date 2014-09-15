var header = require('../components/header');
var repoListing = require('../components/repoListing');

var controller = function() {
    this.headerController = new header.controller();
    this.repoListingController = new repoListing.controller();
};

var view = function(ctrl) {
    return [
        header.view(ctrl.headerController),
        m('.row', repoListing.view(ctrl.repoListingController))
    ];
};

module.exports = {controller: controller, view: view};
