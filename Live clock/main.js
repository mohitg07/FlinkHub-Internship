// ----------------setting day and date------------------
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var d = new Date();
var curr_day = d.getDay();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();

var date = months[curr_month] + " " + curr_date + ", " + curr_year;

document.getElementById("day-date").innerHTML = '<p class="day">' + days[curr_day] + '</p>' +
                                                '<p class="date">' + date + '</p>';

// -------------------setting current time-----------------------
function currentTime() {
  var date = new Date();

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var midday = "AM";

  if(hour>=12){
    midday = "PM";
  }
  else{
    midday = "AM";
  }

  /* assigning hour in 12-hour format */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
  setTimeout(currentTime, 1000); /* setting timer */
}

/* appending 0 before time elements if less than 10 so that we always obtain a 2-digit number*/
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();

// ---------------changing color of time after every second----------------
var color_array = new Array('F90','60F','6C0','03C','C30','0F0','90F','06F','300','990'); // array of 10 colors

function col() {
  var d = new Date();
  var index = d.getSeconds() % 10;

  document.getElementById("clock").style.color = '#' + color_array[index];

  setTimeout('col()', 1000);
}

col();
