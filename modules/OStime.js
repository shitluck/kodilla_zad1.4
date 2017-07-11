var os = require('os');

function convertionOStime() {
    var uptime = os.uptime();
    var hours = Math.floor(uptime/3600);
    var minutes = Math.floor((uptime%3600)/60);
    var seconds = Math.floor((uptime%3600)%60);
    console.log(hours + 'h', minutes + 'min', seconds + 's');
}

exports.print = convertionOStime;