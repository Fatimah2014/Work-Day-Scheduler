

$ ("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

console.log(currentDay)


var scheduleTime= moment().format('h');
console.log(scheduleTime);
//const colors = document. getElementsByClassName("col-9");



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
    var comment = $(this).siblings(".col-9").val()

    })

 });
})



    


