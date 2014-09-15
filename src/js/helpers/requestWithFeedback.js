var requestWithFeedback = function(args, prop) {
    var nonJsonErrors = function(xhr) {
        return xhr.status > 200 ? JSON.stringify(xhr.responseText) : xhr.responseText;
    };
    var error = prop ? prop.error : m.prop();
    var data = prop ? prop.data : m.prop();
    var completed = prop ? prop.ready : m.prop();

    error('');
    completed(false);

    var complete = function(d) {
        data(d);
        completed(true);
    };
    var fail = function(d) {
        error(d);
        m.redraw();
    };
    args.background = true;
    args.extract = nonJsonErrors;
    args.config = function(xhr) {
        xhr.timeout = 4000;
        xhr.ontimeout = function() {
            complete();
            error('timeout');
            m.redraw();
        };
        if(args.xhrConfig) {
            args.xhrConfig(xhr);
        }
    };
    var done = complete;
    m.request(args).then(done, fail).then(m.redraw);
    return prop || {
        error: error,
        data: data,
        ready: completed
    };
};

module.exports = requestWithFeedback;
