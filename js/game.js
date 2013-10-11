 /*********************************************
 version 1.0
 by: hanchang cai
 **********************************************/
 

 
 
$(document).ready(function(e) {
	
	
 // 初始化 图片设置
 
 
var ini_pic =  "url(mydog5.jpg)" ;
// var temp_url = "";
var temp_url = ini_pic; 

 $(".tu_public").css("background-image",temp_url);	
$("#gbigbox_pic").css("background-image",temp_url);
$("#gbigbox_pic_inner").css("background-image",temp_url);

 $("#gbigbox_pic_inner_tmp").css("background-image",temp_url);//右边层飞入
  $("#gbigbox_pic_inner_tmp2").css("background-image",temp_url);  //内层
 
// 调入 主游戏函数	
game (); 


// 小块圆角程度的 调整
$("#block_radius").change(function(e) {
	var tmp = $(this).val() ;
	
  $(".shadow_layer").css({
	 "border-radius": tmp +"px" ,
	"-webkit-border-radius": tmp +"px" ,
	 "-moz-border-radius" : tmp +"px" ,
	 "-o-border-radius": tmp +"px" ,
	 "-ms-border-radius": tmp +"px" 
 	 });

  $(".tu_public").css({
	 "border-radius": tmp +"px" ,
	"-webkit-border-radius": tmp +"px" ,
	 "-moz-border-radius" : tmp +"px" ,
	 "-o-border-radius": tmp +"px" ,
	 "-ms-border-radius": tmp +"px" 
 	 });	 
  
	
});


 
// 小块阴影浓度 调整

$("#block_top_density").change(function(e) {
	var shadow = $("#block_top_shadow").val();
	var density = $(this).val();
	
  $(".shadow_layer").css({
	 "box-shadow": shadow +"px" + " " + shadow +"px"+ " " + density +"px" + " " + " #000000 inset"   
  
 	 });
	 
 }); 
 

 
// 小块阴影风格调整

$("#block_top_shadow").change(function(e) {
	var tmp = $(this).val();
	var density = $("#block_top_density").val();
	
  $(".shadow_layer").css({
	 "box-shadow": tmp +"px" + " " + tmp +"px"+ " " + density +"px" + " " + " #000000 inset"   
  
 	 });
	 
 }); 
  
	 
//  box-shadow: -3px -3px 6px #000000 inset;
//  -moz-box-shadow: -3px -3px 6px #000000 inset;
//  -webkit-box-shadow: -3px -3px 6px #000000 inset;	 

/*  $("#turl").bind({  
  "click" : function () {
	input_text = $(this).val();  $(this).val("")   },
 	"change" : function () { $(this).val(input_text); } 
 	}); */	 
	 
 



 
 
  }); 
 
///主函数结束///////////////////////////////////////// 
 
 
 
 
 
 
//拼图游戏开始 
function game () {
//	 
 var ini_pic =  "url(mydog5.jpg)" ;
  var temp_url = ini_pic;
  
// $("#gbigbox_pic").css("background-image",temp_url);
// 
//  $("#gbigbox_pic_inner").css("background-image",temp_url);
// 
// $(".tu_public").css("background-image",temp_url);
 
var input_text ="";
  $("#turl").bind({  
  "click" : function () {
	input_text = $(this).val();  $(this).val("")   },
 //	"change" : function () { $(this).val(input_text); } 
 	}); 
  

//点击偷瞄的时候	
   $("#toumiao").click(function(e) {
	  $(this).fadeOut(50);
 $("#gbigbox_pic").show().animate({ left:298 },500,"easeInOutExpo").delay(600).animate({ left:0 },800,"easeInOutExpo", function () {
	 $(this).hide();
	  $("#toumiao").fadeIn();
	 });
   
 });		
	

  
// 整个旋转飞出 框框

$("#water").click(function(e) {
 //Re_start();
    
	 
});


	

//点击 重新开始的时候	
$("#restart").click(function(e) {
	
 	 Fly_out_box(temp_url,0,-400 );  
 	
 });
   

 
 
 // EARTH QUAKE 图片晃动GAME START
 $("#hitme").click(function(e) {
	
 $(".tu_public").css("background-image",temp_url);
 for (i=0; i< 5; i++) {	

//alert (temp_url);
 $("#gbigbox").css("opacity",0.7 ); 
 $("#gbigbox").animate({left:-6},10).delay(10).animate({left:6 },10).delay(10).animate({left:0 },10, function() {
 Radom_me (temp_url);	//回调排序后 
 	});  
          
};

// 闪一下 重新开始 
 
 $("#gbigbox").fadeOut(10, function() {
	 $("#gbigbox").css("opacity",1);
	 });
 
  $("#gbigbox").fadeIn(600, function () {
     
	});
 
  	
}); 
 
   

 
 
  
  
  
  
 //方块飞出  fly away
  $(".tempbtn2").click(function(e) {
      		
  // 目的地坐标
	var new_ll = -200 ;
    var new_tt = -200 ;	 
 	    
  var i =0;  
	  
var flyman = window.setInterval( function () {
 
 	if (i<8) {  

  		// 各块 换成 固定定位，并 获取位置
	var offset_left =$("#tu_" + i).offset().left ;
	var offset_top =$("#tu_" + i).offset().top ;
	$("#tu_" + i).css({"position":"fixed", 
	"left":offset_left, "top":offset_top, "z-index":800	});
	$("#tu_" + i).addClass("click_effect2");

 

var rotation = function (){
   $("#tu_" + i).rotate({
      angle: 5, 
      animateTo:200, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();



 
 	//start flying
$("#tu_" + i).animate({left:new_ll, top:new_tt },1000,"easeInBack",
      function () { 
 // $(this).hide(); 
  	
	$("#gamehouse").delay(700).hide(700,function() {
		  window.clearInterval(flyman);
		});		
		
		 
	 }); 
 		   i=i+1; 
 	 }  // end for  
 		 }, 200);
		 
 
 });
 
 
 
 
 
 
 //从右边插入 图片
 
 $("#insertpic").click(function(e) {
 	 
   Fly_inner();
   
 // 初始化 背景图片  
 temp_url ="url(http://i2.asntown.net/5/korean_girls.jpg)" ;
 
  $("#gbigbox_pic_inner_tmp").css("background-image",temp_url);
  $("#gbigbox_pic").css("background-image",temp_url);
$("#gbigbox_pic_inner").css("background-image",temp_url);
  
  
  
   
 $("#gbigbox_pic_inner_tmp").fadeIn(1200);
	 
  window.setTimeout( function () {
 // RE-START 
Re_start(temp_url);  
 
 
  $("#temp_hole_cover").show();
  $("#gbigbox_2").css("left", 300 );


//外面右边插入图片	  
 $("#gbigbox_pic_inner_tmp").animate({left: 150 },900,"easeInOutBack"  ).delay(200).animate({left: 0 },700,"easeOutCirc", function () {
	 
 	 $("#gbigbox_pic_inner_tmp").hide();
	 $("#gbigbox_pic_inner_tmp").css("left",300);
	 
	   });   
 
  
  $("#gbigbox_2").show().animate({left: 150 },900,"easeInOutBack").delay(200).animate({left: 0 },700,"easeOutCirc", function()  { 
  
	$("#temp_hole_cover").animate({"top": 400 }, 400,"easeInCirc", function() {
	 $("#temp_hole_cover").hide(); 
 	$("#temp_hole_cover").removeAttr("style").addClass("pp8","tu_public");
 		}); 
 	}); 
	
 
		  
		  } , 1300);
  });	 


 
 
 
 
 
//换图片  提交 新的 图片 URL 
$("#surl").click(function(e) {
  //检查是否为有效 URL
 var str =  $("#turl").val();
 str = str.match(/http:\/\/.+/);
if (str == null){
alert("can not get image from this URL, try it again...");
return false;
}else{  //如果是有效URL
 
 temp_url ="url(" + $("#turl").val() + ")" ;
 
 
 //$(".tu_public").css("background-image",temp_url);
 $("#gbigbox_pic").css("background-image",temp_url);

//图片框重新煽一下	
 	  //   Re_start(temp_url);
   Insert_from_right (temp_url) ;
  
 }
 
  
}); 
 	
	 
  
 	
//点击图片的时候	
$(".tu_public").bind("click", function () {
	
 var which_tu = "";  //记录 被点击 图的 位置 
 which_tu =$(this).attr("mark");
// 点击后图片换皮肤	
//	$(".tu_public").removeClass("click_effect");
//	$(this).addClass("click_effect");
  
// alert ( $(this).css("left") );  
  
  var hole_top = $("#iamhole").css("top");
  var hole_left = $("#iamhole").css("left");
 var  hole_top_v = $("#iamhole").position().top;
  var  hole_left_v = $("#iamhole").position().left;

 var this_top_v =$(this).position().top;
  var this_left_v =$(this).position().left;
  //alert ("TOP -" +this_top_v + "LEFT -" + this_left_v );  
  var hole_mark =$("#iamhole").attr("mark");
 var diff = Math.abs(hole_top_v - this_top_v + hole_left_v - this_left_v);
 
   
// 判断是否 有效移动  
 if ( hole_top_v != this_top_v  && hole_left_v != this_left_v  ) 
  { 
  $("#info").append(" <p > can not move this one  :( </p> ").fadeIn( ).delay(500).fadeOut();
 
   return false;
    } 
	
 else if (diff > 100 )
  { 
   $("#info").append(" <p >can not move it :< </p> ").fadeIn( ).delay(500).fadeOut();
  return false; }
  else
 { 
  
  $(this).animate({ top:  hole_top, left:hole_left},250,"easeOutBounce", 
  function () {  
// alert ("more over");  
//图片 换坐标
$(this).attr("mark","").removeClass().attr("mark",hole_mark);
$(this).addClass("tu_public");  $(this).addClass(hole_mark);

//空缺的HOLE 换坐标 
  $("#iamhole").attr("mark",which_tu);
    $("#iamhole").removeClass().addClass(which_tu);
 
	
	
// 判断 成功与否，陈功的条件 还需要完善   
    if ($("#iamhole").attr("mark") == "pp8"  )
 { // alert ("亲，你赢了，请客哦!!") ; 
   // alert (" 哈哈，程序还没 写完呢, 哪有那么简单!") ;
  };  
  
    });

   }; // end animation
  
 		}); 
		
		
		
 	 };
	 
//拼图游戏结束 	 