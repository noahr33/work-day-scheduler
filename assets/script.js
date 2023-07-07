// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var now = dayjs().format('dddd, MMMM D')
console.log(now);
var time = dayjs().format('h:m')
console.log(time);

$(function () {

  $('.saveBtn').on('click', function () {
    var saveTime = $(this).parent().attr("id").split("-")[1]
    var message = $(this).siblings(".description").val()
    localStorage.setItem(saveTime, message)
    
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').append(now)
});
