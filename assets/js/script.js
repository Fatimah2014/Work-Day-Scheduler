

$ ("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

console.log(currentDay)


var scheduleTime= moment().format('h');
console.log(scheduleTime);
const colors = document. getElementsByClassName("col-9");





$(".save").on("click", function(e)  {
    var idvalue = $(this).attr('id')
    var comment = $(this).siblings(".col-9").val()
    localStorage.setItem(idvalue, comment)
});



const LS = JSON.parse(localStorage.scheduler || '{}'); 



 var currentTime= moment().format('h');

 var pastTime= moment().subtract(1, 'hour').calender();
 var futureTime= futureTime>currentTime;

console.log (currentTime)
console.log(pastTime)
console.log