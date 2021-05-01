

$ ("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

console.log(currentDay)


var scheduleTime= moment().format('h');
console.log(scheduleTime);
//const colors = document. getElementsByClassName("col-9");


$(document).ready(function () {
    $(".col-1").click(function () {
       $('.col-9').attr('disabled', true);

    });
    $(".col-1").dblclick(function () {
      $('.col-9').removeAttr('disabled');
      var idvalue = $(this).attr('id')
      var comment = $(this).siblings(".col-9").val()
      for (var i = 0, len = buttons.length; i < len; i++) {
        comment[i].onclick = function (){
            myFunction (this);
      localStorage.setItem(idvalue, comment)
    
      
 });
});

var saveButton = document.getElementsByTagName('button');

    }
}

