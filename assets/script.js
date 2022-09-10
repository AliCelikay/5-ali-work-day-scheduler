var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

var todoInput = $('#todo-text-9');
var saveBtn = $('#save-btn-9');
var div9 = $('#block-9');
var todoSpan9 = $('#todoSpan9');


var allTimeBlocks = $('.time-block');
for(var i = 0; i < allTimeBlocks.length; i++)
{
    
    var time = allTimeBlocks[i];
    console.log(time);
}








var todosArr = [];

saveBtn.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput.val();

    if(todoText === "")
    {
        return;
    }

    todosArr.push(todoText);
    console.log(todoText);
    
    localStorage.setItem("todos", todoText);

    todoSpan9.textContent = localStorage.getItem("todos")

    // if(storedTodos !== null)
    // {
    //     todosArr = storedTodos;
    // }
    
    // todoInput.innerHTML = "";

    // for(var i = 0; i < todosArr.length; i++)
    // {
    //     var todo = todosArr[i];

    //     todoInput.text(todo);

    //     todoInput.append(todo);
    // }

})




