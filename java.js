//https://www.youtube.com/watch?v=JTlI7yqnk4c


function Scroll(){
$(document).on('scroll', function(){
    if($(this).scrollTop() > 1){
        $('header').addClass('sticky');
    }else{
        $('header').removeClass('sticky');
    }
});
    
$(document).on('click', function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
});

// to control the button 

$(document).scroll(function(e){
   var scrollpos = $(this).scrollTop(); //scrollpos means scroll position 
    if(scrollpos < 100){
        $('#top').addClass('hide');
    }else{
        $('#top').removeClass('hide');
    }  
});

}



















