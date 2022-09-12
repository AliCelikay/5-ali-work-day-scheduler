var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

var todoInput9 = $('#todo-text-9');
var saveBtn9 = $('#save-btn-9');
var div9 = $('#block-9');
var todoSpan9 = $('#todoSpan9');

var todoInput10 = $('#todo-text-10');
var saveBtn10 = $('#save-btn-10');

var todoInput11 = $('#todo-text-11');
var saveBtn11 = $('#save-btn-11');

var todoInput12 = $('#todo-text-12');
var saveBtn12 = $('#save-btn-12');

var todoInput13 = $('#todo-text-13');
var saveBtn13 = $('#save-btn-13');

var todoInput14 = $('#todo-text-14');
var saveBtn14 = $('#save-btn-14');

var todoInput15 = $('#todo-text-15');
var saveBtn15 = $('#save-btn-15');

var todoInput16 = $('#todo-text-16');
var saveBtn16 = $('#save-btn-16');

var todoInput17 = $('#todo-text-17');
var saveBtn17 = $('#save-btn-17');

//moment always gives back string, must parseInt to convert into integer
// HH in format give military time
var currentHour = parseInt(moment().format('HH'));


//looped starting from 9 - 17
for(var i = 9; i < 18; i++)
{
    // console.log(currentHour, i);
    //created a variable that grabs the id todo-text and we specify which id it grabs using the + sign to concatinate the number from html and grabing the value. We are using the i to compare if the current time is in the present past or future w/ respect to the i variable
    var time = $("#todo-text-"+ i);
    if(currentHour > i)
    {
        //dynamically creating a class inside the html text-area and stating if it is past present or future w/ a if conditional statement
        time.addClass("past");
    }
    else if(currentHour == i)
    {
        time.addClass("present");
    }
    else{
        time.addClass("future");
    }
    console.log(time);
}

var todosArr = [];

// grab user text from textbox 9 and place into local storage
//from localstorage grab the text and place into the text area 9
saveBtn9.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput9.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);

    localStorage.setItem(9, todoText);

})

$("#todo-text-9").val(localStorage.getItem(9));

saveBtn10.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput10.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(10, todoText);

})

$("#todo-text-10").val(localStorage.getItem(10));


saveBtn11.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput11.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(11, todoText);

})

$("#todo-text-11").val(localStorage.getItem(11));


saveBtn12.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput12.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(12, todoText);

})

$("#todo-text-12").val(localStorage.getItem(12));


saveBtn13.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput13.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(13, todoText);

})

$("#todo-text-13").val(localStorage.getItem(13));

saveBtn14.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput14.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(14, todoText);

})

$("#todo-text-14").val(localStorage.getItem(14));


saveBtn15.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput15.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(15, todoText);

})

$("#todo-text-15").val(localStorage.getItem(15));


saveBtn16.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput16.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(16, todoText);

})

$("#todo-text-16").val(localStorage.getItem(16));


saveBtn17.on('click', function(event){
    event.preventDefault();

    var todoText = todoInput17.val();

    if(todoText === "")
    {
        return;
    }
    
    todosArr.push(todoText);
    console.log(todoText);
    console.log(todosArr);
    
    localStorage.setItem(17, todoText);

})

$("#todo-text-17").val(localStorage.getItem(17));
