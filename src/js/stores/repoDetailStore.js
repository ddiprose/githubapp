var svc = require('../constants/svcConstants');
var requestWithFeedback = require('../helpers/requestWithFeedback');

var languages = {
    error: m.prop(''),
    data: m.prop(),
    ready: m.prop(false)
};

var getLanguages = function(userName, repoName) {
    var options = {method: 'GET', url: svc.repoLanguagesUrl(userName, repoName)};
    return requestWithFeedback(options, languages);
};

module.exports = {
    getLanguages: getLanguages,
    repository: languages
};
