var mach = require('../lib');
var app = mach.router();

app.use(mach.commonLogger);

app.get('/', function (request) {
  return '<a href="/b">go to b</a>';
});

app.get('/b', function (request) {
  return '<a href="/c/' + Date.now() + '">go to c</a>';
});

app.get('/c/:id', function (request) {
  var id = request.route.id;
  return JSON.stringify({
    method: request.method,
    path: request.path,
    url: request.url,
    headers: request.headers,
    id: id
  }, null, 2);
});

mach.serve(app);
