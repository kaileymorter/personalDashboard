
$('.save-btn').on('click', function(){
    var taskNumber = $(this).attr('id');
    var task = $(this).siblings('div.task-div').children("input").val();
  
    localStorage.setItem(taskNumber, task);
  })

  $("#task1").children("input").val(localStorage.getItem("task-1"));

  $("#task2").children("input").val(localStorage.getItem("task-2"));
  
  $("#task3").children("input").val(localStorage.getItem("task-3"));
  
  $("#task4").children("input").val(localStorage.getItem("task-4"));
  
  $("#task5").children("input").val(localStorage.getItem("task-5"));