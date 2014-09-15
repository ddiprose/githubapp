var base = 'https://api.github.com';

module.exports = {
    reposUrl: function(userName) {
        return base + '/users/' + userName + '/repos';
    },
    repoLanguagesUrl: function(userName, repoName) {
        return base + '/repos/' + userName + '/' + repoName + '/languages';
    }
}
