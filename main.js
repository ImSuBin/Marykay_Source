//var bin = false;

$(document).ready(function(){
    
        var $banner=$('#main_slide');
        var $btn=$('.banner_btn');
        var interval =setInterval("mainslide()",4000);
    $banner.hover(function(){
        $btn.css({'display':'block'});
                clearInterval(interval);
    },function(){
        $btn.css({'display':'none'});
        interval=setInterval("mainslide()",4000);
    });
    $(".prevBtn").on("click",function(){
        mainprev();
    })    
    $(".nextBtn").on("click",function(){
        mainnext();
    })

    $(window).on("scroll",function(){
        var animT = $(window).scrollTop();
        //console.log(animT);
        if(animT>=980 && animT<=1500){
            setTimeout(function(){
                 $(".img7").stop().animate({"right":"0"},500,function(){
                    $(".img6").stop().animate({"right":"5%"},500,function(){
                        $(".img3").stop().animate({"left":"5%"},500);
                     });
                });
     },100);   
        }else{
            setTimeout(function(){
                $(".img3").stop().animate({"left":"-30%"},300,function(){
                 $(".img6").stop().animate({"right":"-30%"},300,function(){
                     $(".img7").stop().animate({"right":"-30%"},300);
                    });
                });       
        },100);   
    };   
});

    //best product slide 
    var timer =setInterval("bestslide()",5000);

	$(".best_list").hover(function(){
		clearInterval(timer);     
	},function(){
		timer =setInterval("bestslide()",5000);
 
	});
		   
     $(".next").on("click",function(){
       // clearInterval(timer); //클릭할때는 슬라이드 실행하지마
        bestnext(); 
        return false;
    });
    
    $(".prev").on("click",function(){
    //clearInterval(timer);클릭할때는 슬라이드 실행하지마
       bestprev();
       return false;
    });
    //new product slide 끝  
    
    
    
    
});

/*best product slide 함수*/
 function bestnext(){
    $(".best_ul").stop().animate({left:"-200%"},600,function(){                          
        $(".best_ul").append($(".best_list").eq(0)).css({"left":"-100%"});
        //#main ul 의 #main 0번째인li 추가 , ul의 css를바꾼다
    });           
 };  

function bestprev(){                                             
    $(".best_ul").stop().animate({"left":"0px"},600,function(){   
        $(".best_ul").prepend($(".best_list").eq(2)).css({left:"-100%"});
    });
};

function bestslide (){
    $(".best_ul").stop().animate({left:"-200%"},600,function(){                          
        $(".best_ul").append($(".best_list").eq(0)).css({"left":"-100%"});
        //#main ul 의 #main 0번째인li 추가 , ul의 css를바꾼다
    });  
}; 

/*best product slide 함수끝*/


function mainslide (){
    $("#main_slide .banner_img").stop().animate({"left":"-100%"},1000,function(){
        $("#main_slide .banner_img").append($("#main_slide .silde_list").eq(0)).css({"left":"0px"}); 
    });
};  


function mainprev (){
    $("#main_slide .banner_img").stop().animate({"left":"0px"},700,function(){
        $("#main_slide .banner_img").prepend($("#main_slide .silde_list").eq(3)).css({"left":"-100%"}); 
    });
};  

function mainnext (){
    $("#main_slide .banner_img").stop().animate({"left":"-200%"},700,function(){
        $("#main_slide .banner_img").append($("#main_slide .silde_list").eq(0)).css({"left":"-100%"}); 
    });
};  
