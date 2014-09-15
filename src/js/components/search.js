var urls = require('../constants/urlConstants');
var repoListingStore = require('../stores/repoListingStore');

var bindEnterKey = function(callback) {
    return function(e) {
        if (e.keyCode == 13) {
            return callback();
        }
        return true;
    };
};

var controller = function() {
    this.user = m.prop('');

    this.selectUser = function() {
        m.route(urls.userUrl(this.user()));
    }
};

var view = function(ctrl) {
    return m('.col-md-6', [
        m('h3', 'User name'),
        m('.input-group', [
            m('input.form-control', {
                placeholder: 'Enter a GitHub user name',
                oninput: m.withAttr('value', ctrl.user),
                onkeydown: bindEnterKey(ctrl.selectUser.bind(ctrl)),
                value: ctrl.user()
            }),
            m('span.input-group-btn',
                m('button.btn.btn-default', {onclick: ctrl.selectUser.bind(ctrl)}, 'Go')
            )
        ])
    ]);
};

module.exports = {controller: controller, view: view};
