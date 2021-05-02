//set the current date

$ ("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

console.log(currentDay)


var scheduleTime= moment().format('h');
console.log(scheduleTime);
//when I click on the button the text will be locked.
//when I double click the text will unlock 



$(document).ready(function() {
  $(".col-1").click(function () {
    var theinput = $(this).parent().children('input')
    console.log('this!!! ', theinput)
   $(theinput).attr('disabled', true);


    $('.col-1').dblclick(function() {
      $('.col-9').removeAttr('disabled');
      var theinput = $(this).parent().children('input')
      console.log('this!!!', theinput)
      idvalue = $(this).attr('id')
   

    })

 });
})//create a loop that set colord and time based off past present future

var scheduleTimeM= moment().format('H');

  for (var i = 0; i < 9; i++) {   
    if (i + 9 < moment().format('H')) {
      $('.col-9').eq(i).addClass('past')
    }
    // console.log(i + 9)
    // console.log(Boolean(i + 9 == moment().format('H')))
    if (i + 9 == moment().format('H')) {
      console.log('check')
      $('.col-9').eq(i).addClass('present')
    } 
    if (i + 9 > moment().format('H')) {
      $('.col-9').eq(i).addClass('future')
    }

  };
  





// document.getElementsByClassName('col-9')[0].style.backgroundColor('red') //this works will leave commented
          
          
// document.getElementsByClassName("col-9").style.backgroundColor = "#90ee90";









