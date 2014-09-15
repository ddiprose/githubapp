var base = '';

module.exports = {
    homeUrl: function(userName) {
        return base + '/';
    },
    userUrl: function(userName) {
        return base + '/' + userName;
    },
    repoUrl: function(userName, repoName) {
        return base + '/' + userName + '/' + repoName;
    }
};
