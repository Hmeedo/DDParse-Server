
var express = require('express');
// var ParseServer = require('parse-server').ParseServer;
// var path = require('path');
// var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
// var AzureStorageAdapter = require('parse-server-azure-storage').AzureStorageAdapter; 

// if (!databaseUri) {
//   console.log('DATABASE_URI not specified, falling back to localhost.');
// }

//  var account = process.env.STORAGE_ACCOUNT_NAME;		
//  var container = process.env.STORAGE_CONTAINER_NAME;		
//  var options = {		
//      accessKey: process.env.FILE_ACCESS_KEY || '',		
//      directAccess: true 
//  }
 
// var api = new ParseServer({
//   databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
//   cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
//   appId: process.env.APP_ID || 'myAppId',
//   masterKey: process.env.MASTER_KEY || '', 
//   serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  
//   maxUploadSize: process.env.MAX_UPLOAD_SIZE,
//   filesAdapter: new AzureStorageAdapter(account, container, options),
//   liveQuery: {
//     classNames: ["Posts", "Comments"] 
//   }
// });

var app = express();

// app.use('/public', express.static(path.join(__dirname, '/public')));

// var mountPath = process.env.PARSE_MOUNT || '/parse';
// app.use(mountPath, api);

// var mountPath = process.env.APP_MOUNT_PATH || '/parse';
// app.use(mountPath, api);

app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

app.get('/test', function(req, res) {
  //res.sendFile(path.join(__dirname, '/public/test.html'));
   res.redirect('http://ec2-52-43-213-79.us-west-2.compute.amazonaws.com/parse');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// ParseServer.createLiveQueryServer(httpServer);
