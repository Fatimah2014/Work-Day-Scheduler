//set the current date

$ ("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

console.log(currentDay)


var scheduleTime= moment().format('h');
console.log(scheduleTime);
//when I click on the button the text will be locked.
 // when refresh input will not delete//
//all input sent to local storage 
var button= document.getElementsByClassName("col-1")

$(document).ready(function() {
  
  $(button).click(function () {
    var theinput = $(this).parent().children('input')
    localStorage.setItem(theinput[0].id, theinput[0].value)
    console.log('this!!!', theinput[0].value)
   $(theinput).attr('disabled', true);
   //when I double click the text will unlock
    $(button).dblclick(function() {
      var theinput = $(this).parent().children('input')
      $(theinput).removeAttr('disabled');



  //  var data = JSON.parse(localStorage.getItem("todoData"));

    })

 });
})//create a loop that set a color and time based off past present future
// added local stroge
var scheduleTimeM= moment().format('H');

  for (var i = 0; i < 9; i++) {   
    if (i + 9 < moment().format('H')) {
     $('.col-9').eq(i).addClass('past')
    var historyText = localStorage.getItem(i+9)
      $('#'+(i+9)).val(historyText)
      console.log(historyText)
    }
    
    if (i + 9 == moment().format('H')) {
     $('.col-9').eq(i).addClass('present')
     var historyText = localStorage.getItem(i+9)
     $('#'+(i+9)).val(historyText)
     console.log(historyText)
    
    } 
    if (i + 9 > moment().format('H')) {
      $('.col-9').eq(i).addClass('future')
      var historyText = localStorage.getItem(i+9)
      $('#'+(i+9)).val(historyText)
      console.log(historyText) 
    }
  };
  





// document.getElementsByClassName('col-9')[0].style.backgroundColor('red') //this works will leave commented
          
          
// document.getElementsByClassName("col-9").style.backgroundColor = "#90ee90";









