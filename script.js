var idTimes = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"];

var times = [10,11,12,13,14,15,16,17,18];

var timesSecond = ["10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00",  "18:00:00"];

var mainCont = [];
var theLocalStorage = JSON.parse(localStorage.getItem("workDay"));
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
    localStorage.setItem("workDay", JSON.stringify(inputId));
    
    
    

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






 








