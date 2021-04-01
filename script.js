var idTimes = ["#9AM", "#10AM", "#11AM", "#12AM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"];
var times = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00"];
var timesSecond = ["10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00",  "18:00:00"];

var localStorage = JSON.parse(localStorage.getItem("workDay"));

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


for (var i = 0; i < idTimes.length; i++) {
    var inputEl = $(idTimes[i]);
    var buttonEl = document.getElementsByClassName('saveBtn');

    if ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + times[i])) {

        inputEl.attr("class", "future");

    } else if (((moment().format('MMMM Do YYYY, HH:mm:ss')) >= (moment().format('MMMM Do YYYY') +  ", " + times[i])) &&  
    ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + timesSecond[i]))) {
    
        inputEl.attr("class", "present"); 

    // } if (((moment().format('MMMM Do YYYY, HH:mm:ss')) > (moment().format('MMMM Do YYYY') +  ", " + times[i])) {

    //     inputEl.attr("class", "past"); 

    }};
    

 








