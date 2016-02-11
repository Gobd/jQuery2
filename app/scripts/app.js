$(document).ready(function() {

  $('#allButton').on('click', function(e) {
    e.preventDefault();
    $('#currentList, #currentListw').show();
    $('#archivedList, #archivedListw').show();
    $('#newList, #newListw').show();
  });

  $('#activeButton').on('click', function(e) {
    e.preventDefault();
    $('#currentList, #currentListw').show();
    $('#archivedList, #archivedListw').hide();
    $('#newList, #newListw').hide();
  });

  $('#doneButton').on('click', function(e) {
    e.preventDefault();
    $('#currentList, #currentListw').hide();
    $('#archivedList, #archivedListw').show();
    $('#newList, #newListw').hide();
  });

  $('#clearButton').on('click', function(e) {
    e.preventDefault();
    $('.list-group-item').remove();
  });


  var listo = [];

  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  };

  var advanceTask = function(task) {
    var modified = task.innerText.trim();
    for (var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

  var addTask = function(task) {
    if (task) {
      task = new Task(task);
      listo.push(task);
      $('#newItemInput').val('');
      $('#newListw').append('<a href="#" id="item"><li class="list-group-item">' + task.task + '</li></a>');
    }
    // $('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
  };

  $('#saveNewItem').on('click', function(e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });

  $('#cancel').on('click', function(e) {
    e.preventDefault();
    $('#newItemInput').val('');
  });

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentListw').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function(e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    advanceTask(task);
    $('#archivedListw').append(this.outerHTML);
  });

  $(document).on('click', '#archived', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
  });

});
