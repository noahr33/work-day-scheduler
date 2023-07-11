$(function () {
  var now = dayjs().format('dddd, MMMM D')
  var timeBlock = $('.time-block')
  
   // Shows current date in header
   $('#currentDay').append(now)
  
   // Saves message upon clicking save button and stores it locally
   $('.saveBtn').on('click', function () {
    var saveTime = parseInt($(this).parent().attr("id").split("-")[1])
    var message = $(this).siblings(".description").val()
    localStorage.setItem(saveTime, message)
  })

  // Adds corresponding class to each time block to represent past, present, and future
  timeBlock.each(function () {
    var timeBlock = $(this)
    var blockHour = parseInt(timeBlock.attr('id').split("-")[1])
    var currentTime = parseInt(dayjs().hour())
    var timeClass
    if (blockHour === currentTime) {
      timeClass = 'present'
    } else if (blockHour < currentTime) {
      timeClass = 'past'
    } else {
      timeClass = 'future'
    }
    timeBlock.addClass(timeClass)
    
  })
  
  // Gets input values from local storage and adds them into the corresponding textarea element
  for (var i = 9; i < 19; i++) {
    var inputVal = localStorage.getItem(i) 

    var descriptHour = $('body')
    
    $("#hour-"+i).children(".description").val(inputVal)
  }
  
  
});
