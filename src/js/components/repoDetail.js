var urls = require('../constants/urlConstants');
var repoDetailStore = require('../stores/repoDetailStore');

var controller = function() {
    this.userName = m.route.param('userName');
    this.repoName = m.route.param('repoName');
    this.languages = repoDetailStore.getLanguages(this.userName, this.repoName);
};

var pieChartConfig = function(data) {
    data = _.pairs(data).map(function(item) {
        return {
            label: item[0],
            value: item[1]
        };
    });
    return function(element, isInitialized, context) {
        if(!isInitialized) {
            nv.addGraph(function() {
                var chart = nv.models.pieChart()
                  .x(function(d) { return d.label; })
                  .y(function(d) { return d.value; })
                  .showLabels(true);

                d3.select(element)
                    .datum(data)
                    .transition().duration(350)
                    .call(chart);

                return chart;
            });
        }
    };
};

var view = function(ctrl) {
    var languages = ctrl.languages;
    var repoUrl = 'https://github.com/' + ctrl.userName + '/' + ctrl.repoName;

    var wrapper = function(content) {
        return m('.col-md-12', [
            m('a[href=' + urls.userUrl(ctrl.userName) + ']', {config: m.route}, 'back'),
            content
        ]);
    };

    if(languages.error()) {
        return wrapper(m('div', languages.error()));
    }

    if(!languages.ready()) {
        return wrapper(m('div', m('img', {src: '/images/ajax-loader.gif'})));
    }

    return wrapper([
        m('h3', ctrl.userName + ' / ' + ctrl.repoName),
        m('div',
            m('a[href=' + repoUrl + '][target=_blank]', 'View on GitHub')
        ),
        m('div',
            m('svg.repos', {config: pieChartConfig(languages.data())})
        )
    ]);
};

module.exports = {controller: controller, view: view};
