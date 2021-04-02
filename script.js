var idTimes = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"];

var times = [10,11,12,13,14,15,16,17,18];

var timesSecond = ["10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00",  "18:00:00"];

var mainCont = [];
var buttonEl = $('.saveBtn');




var today = moment();
var hour = moment().hour()
console.log(hour)
$("#currentDay").text(today.format("dddd, MMMM Do"));



$('.saveBtn').click(function(event){
    console.log(event.target.name)
    var inputId ="#"+event.target.name;
    console.log(inputId)
    console.log($(inputId).val())
    localStorage.setItem($(inputId).val(), JSON.stringify(inputId));
})


for (var i = 0; i < idTimes.length; i++) {
    var inputEl = $(idTimes[i]);
    var buttonEl = $('.saveBtn');
     console.log(times[i], hour)
    if (times[i] < hour) {
        inputEl.attr("class", "past");
    } else if (times[i] === hour) {
        inputEl.attr("class", "present"); 
    }
  else{
     inputEl.attr("class", "future"); 
    }

   
};

$('#hour-9 .description').val(localStorage.getItem('hour-9'));

$('#hour-10 .description').val(localStorage.getItem('hour-10'));

$('#hour-11 .description').val(localStorage.getItem('hour-11'));

$('#hour-12 .description').val(localStorage.getItem('hour-12'));

$('#hour-1 .description').val(localStorage.getItem('hour-1'));

$('#hour-2 .description').val(localStorage.getItem('hour-2'));

$('#hour-3 .description').val(localStorage.getItem('hour-3'));

$('#hour-4 .description').val(localStorage.getItem('hour-4'));

$('#hour-5 .description').val(localStorage.getItem('hour-5'));









 








