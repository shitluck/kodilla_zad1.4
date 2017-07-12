function convertOStime(time) {
    if (time < 0 ) {
      throw new RangeError("Time should have positive value but got " + time)
    }
    var hours = Math.floor(time/3600);
    var minutes = Math.floor((time%3600)/60);
    var seconds = Math.floor((time%3600)%60);
    return(hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.');
}

exports.print = convertOStime;