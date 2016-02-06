function uploadJS(file) {
    return new Promise(function (resolve, reject) {
        var includeFile = document.createElement('script');
        includeFile.src = file;
        var module = (file.split('\\').pop().split('/').pop().split('.'))[0];

        includeFile.addEventListener('load', function() {
            resolve(module);
        }, false);

        includeFile.addEventListener('error', function() {
            reject(module);
            console.log('error');
        }, false);

        document.body.appendChild(includeFile);
    });
}

function define() {

    var callback;
    var dependencies;

    var script = document.currentScript.src;
    var module = (script.split('\\').pop().split('/').pop().split('.'))[0];

    if( Object.prototype.toString.call( arguments[0] ) === '[object Array]') {

    	  dependencies = arguments[0];
        callback = arguments[1];

        var promises = [];

        dependencies.forEach(function (file) {
            promises.push(uploadJS(file));
        });

        Promise.all(promises).then(function (results) {
            var args = [];
            results.forEach(function (module) {
                args.push(window[module]);
            });
            if(callback) {
                window[module] = callback.apply(this, args);
            }
        });
    }
    else {
    	console.log('Invalid arguments of "define" function!');
    }
}
