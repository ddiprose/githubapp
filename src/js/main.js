var pages = {
    home: require('./pages/home'),
    user: require('./pages/user'),
    repo: require('./pages/repo')
};

m.route(document.getElementById('main'), '/', {
    '/': pages.home,
    '/:userName': pages.user,
    '/:userName/:repoName': pages.repo
});
