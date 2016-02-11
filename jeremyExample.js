todo.js
/* global $ */
$(document).ready(function(){
    var todoApp = $('#todoApp');
    var todoTitle = $('<h1>jQuery Todo App</h1>');
    var todoInput = $('<input placeholder=\'add an item...\'></input>');
    var todoAddItemButton = $('<button>Add</button>');
    var todoClearButton = $('<button>Remove All Done</button>');
    var todoList = $('<ul></ul>');
    var todoItem = $('<li></li>');

    todoApp.append(todoTitle);
    todoApp.append(todoInput);
    todoApp.append(todoAddItemButton);
    todoApp.append(todoList);
    todoApp.append(todoClearButton);

    //User clicks on the Add button
    function handleAddItem(){
        var inputText = todoInput.val();
        if(inputText) {
            var todoItem = $('<li></li>')
            todoInput.val('');
            todoItem.text(inputText);
            todoList.append(todoItem)
        }
    }

    todoAddItemButton.on('click', function(event){
        handleAddItem();
    })

    //User clicks on a list item to mark it as done
    todoList.on('click', 'li', function(){
        var todoItem = $(this);
        todoItem.toggleClass('done');
    })

    //Remove all done items form the list
    todoClearButton.on('click', function(){
        $('li.done').remove();
    })
})
