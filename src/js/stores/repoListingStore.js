var svc = require('../constants/svcConstants');
var requestWithFeedback = require('../helpers/requestWithFeedback');

var repositories = {
    error: m.prop(''),
    data: m.prop(),
    ready: m.prop(false)
};

var getRepositories = function(userName) {
    var options = {method: 'GET', url: svc.reposUrl(userName)};
    return requestWithFeedback(options, repositories);
};

module.exports = {
    getRepositories: getRepositories,
    repositories: repositories
};
