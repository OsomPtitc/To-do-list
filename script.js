$( document ).ready(function() {
  'use strict';
  
  $('#btn').click(function(){
    $('.taskEmpty').hide();
    
    var value1 = $('#caseName').val();
    
    var value2 = $('#caseDescription').val();
    
    var cont1 = $('<div class="taskContainer"></div>');
    
    var cont2 = $('<div class="descriptionContainer"></div>');
    
    var list = $('<div class="list"></div>');
    
    $(cont1).append(value1 + '<span class="close"></span>' + '<div class="arrow"></div>');
    
    $(cont1).appendTo(list);
    
    $(cont2).append(value2);
    
    $(cont2).appendTo(list);
    
    $(list).appendTo('article');
    
    $('#caseName').val(" ");
    
    $('#caseDescription').val(" ");
    
    $('.close').click(function(){
      $(this).parent('.taskContainer').parent('.list').remove();
      
      if ($('.toDoContainer').children('div').length){
        
      }
      else {
        $('.taskEmpty').show();
      }
    });
    
    $('.arrow').click(function(xxx){
      $(this).toggleClass('active').parent('.taskContainer').parent('.list').children('.descriptionContainer').slideToggle(800);
      
    xxx.stopImmediatePropagation();
    });
  });
});

