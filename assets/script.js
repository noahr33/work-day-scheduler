$(function () {
  var now = dayjs().format('dddd, MMMM D')
  var time = dayjs().format('h:m')
  var timeBlock = $('.time-block')
  
  
  // Saves message upon clicking save button and stores it locally
  $('.saveBtn').on('click', function () {
    var saveTime = parseInt($(this).parent().attr("id").split("-")[1])
    var message = $(this).siblings(".description").val()
    console.log(saveTime);
    localStorage.setItem(saveTime, message)
  })

  // Adds corresponding class to each time block to represent past, present, and future
  timeBlock.each(function () {
    var timeBlock = $(this)
    var blockHour = parseInt(timeBlock.attr('id').split("-")[1])
    var currentTime = parseInt(dayjs().hour())

    console.log(blockHour, currentTime);
    
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // Shows current date in header
  $('#currentDay').append(now)
});
