var mach = require('../lib');
var app = mach.router();

app.use(mach.gzip);
app.use(mach.commonLogger);
app.use(mach.file, __dirname + '/..');

mach.serve(app, '/tmp/mach.sock');
