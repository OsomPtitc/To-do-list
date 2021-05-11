$( document ).ready(function() {
  'use strict';
  
  $('#btn').click(function() {
      
    var newTaskElement = $('#caseName').val();
    if (newTaskElement.length > 0) {
        $('#toDoList').append("<li>" + newTaskElement + "</li>")
          .css ({
            'font-size': '16px;', 
            'position': 'relative;', 
            'padding': '18px 20px;', 
            'list-style-type': 'none'
        });
        $('#caseName').val(" ");
    var newDescriptionElement = $('#caseDescription').val();
    if (newDescriptionElement.length > 0) {
        $('toDoList').append("<div>" + "<p>" + newDescriptionElement + "</p>" + "</div>")
          .css ({
            'width': '470px;',
            'text-align': 'left;',
            'padding': '10px 20px;',
            'background-color': '#fff;',
            'color': '#8993ad;',
            'font-size': '14px;',
            'border-top': '1px #f5f5f5 solid;'
        });
        $('#caseDescription').val(" ");
    }
    }
  });
});

