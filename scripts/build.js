const exec = require("child_process").exec;

process.chdir('client');
return exec('npm install & npm run build');