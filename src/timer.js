// Timer counter
var startDateTime = new Date(2018,2,26,2,1,0,0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var year = Math.floor(diff/(24*60*60*365));
    diff = diff-(year*24*60*60*365);
    var month = Math.floor(diff/(24*60*60*31));
    diff = diff-(month*24*60*60*31);  
    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    
    // document.getElementById("time-elapsed").innerHTML = year+ "year(s)" + d +" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) working";
    document.getElementById("time-elapsed").innerHTML = year+ "yrs " + month+"mos " + d+"ds " + s+"s of";
    // document.getElementById("time-elapsed").innerHTML = year+ "yrs " + month+"mos " + s+"s of";

}

setInterval(updateClock, 1000);
