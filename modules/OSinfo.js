var os = require('os');
var OStime = require('./OStime');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    var uptime = os.uptime();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('Uptime: ', OStime.print(uptime));
    console.log('Uptime: ', OStime.print(125));
    console.log('Uptime: ', OStime.print(3700));
}

exports.print = getOSinfo;