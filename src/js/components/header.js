var urls = require('../constants/urlConstants');
var repoListingStore = require('../stores/repoListingStore');

var controller = function() {
    this.userName = m.route.param('userName');
    this.repoName = m.route.param('repoName');
};

var view = function(ctrl) {
    var homeLink = m('a[href=/].header-logo-invertocat', {config: m.route}, [
        m('span.mega-octicon.octicon-mark-github'),
        m('span.title', ' Github')
    ]);

    return m('.row.header', [
        m('.col-md-8.header-left',
            homeLink
        ),
        m('.col-md-4.header-right', [
            m('span',
                ctrl.userName ?
                m('a[href=' + urls.userUrl(ctrl.userName) + ']', {config: m.route}, ctrl.userName) : ''
            ),
            m('span',
                ctrl.repoName ?
                ' / ' + ctrl.repoName : ''
            )
        ])
    ]);
};

module.exports = {controller: controller, view: view};
