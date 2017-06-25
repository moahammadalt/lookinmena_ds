$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});


$(window).scroll(function () {
    parallax();
});

function parallax() {
    var ev = {
        scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    };
    ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    render(ev);
}

function render(ev) {
    var t = ev.scrollTop;
    var y = Math.round(t * 1);
    $('#im').css('background-position', '0 ' + y + 'px');
}


$(function () {
    $('.tlt').textillate();
})


$(document).ready(function (){
                        $("#bt").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#im").offset().top
                            }, 750);
                        });
                    });

$(document).ready(function (){
                        $("#bm1").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#hm1").offset().top
                            }, 500);
                        });
                    });

$(document).ready(function (){
                        $("#bm2").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#hm2").offset().top
                            }, 500);
                        });
                    });
$(document).ready(function (){
                        $("#bm3").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#hm3").offset().top
                            }, 500);
                        });
                    });
$(document).ready(function (){
                        $("#bm4").click(function (){
                            $('html, body').animate({
                                scrollTop: $("#hm4").offset().top
                            }, 500);
                        });
                    });


