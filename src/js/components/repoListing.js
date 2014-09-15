var urls = require('../constants/urlConstants');
var repoListingStore = require('../stores/repoListingStore');

var controller = function() {
    this.userName = m.route.param('userName');
    this.repositories = repoListingStore.getRepositories(this.userName);
};

var view = function(ctrl) {
    var repositories = ctrl.repositories;

    var wrapper = function(content) {
        return m('.col-md-12', [
            m('a[href=' + urls.homeUrl() + ']', {config: m.route}, 'back'),
            content
        ]);
    };

    if(repositories.error()) {
        return wrapper(m('div', repositories.error()));
    }

    if(!repositories.ready()) {
        return wrapper(m('div', m('img', {src: '/images/ajax-loader.gif'})));
    }

    return wrapper([
        m('h3', ctrl.userName + '\'s repositories'),
        m('ul.repos',
            repositories.data().map(function(repo) {
                return m('li', [
                    m('a[href=/' + ctrl.userName + '/' + repo.name + ']', {config: m.route}, repo.name),
                    ' ',
                    m('a[href=' + repo.html_url + '][target=_blank].pull-right', 'View on GitHub'),
                    m('div',
                        _.filter([
                            repo.language, repo.description
                        ],
                        function(prop) { return prop; }).join(', ')
                    )
                ]);
            })
        )
    ]);
};

module.exports = {controller: controller, view: view};
