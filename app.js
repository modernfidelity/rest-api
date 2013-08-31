/**
 *
 * REST API v.0.1
 *
 * Provides a simple API that will include content, user and media apis
 *
 * @author Mark Rushton
 *
 */


// Module dependencies.

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cluster = require('cluster');
var fs = require('fs');

var access_logfile = fs.createWriteStream('./access.log', {flags: 'a'});

var app = express();



// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

// Code to run if we're in a worker process
} else {


    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    //app.use(express.favicon());
    app.use(express.logger({stream: access_logfile }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);

    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    app.get('/', routes.index);
    app.get('/users', user.list);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });


}

// Listen for dying workers
cluster.on('exit', function (worker) {

    // Replace the dead worker,
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();

});


