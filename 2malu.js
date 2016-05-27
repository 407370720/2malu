$(function (){
//测试......
//.....
//.....

//经营产品切换
	$('#bus_pro .pro_show span').click(function (){
			$('#bus_pro .pro_show span').removeClass('pro_r').eq($(this).index()).addClass('pro_r');
})
  $('#bus_pro .pro_l').click(function (){
	  $('#bus_pro .pro_b').css('right','648px')
	  })
  $('#bus_pro .pro_r').click(function (){
	  $('#bus_pro .pro_b').css('right','260px')
	  })
	  


//品牌商品切换图
$('#bus_pro .pro_l').click(function (){
	  $('#bus_pro .pro_01').css('display','block')
	  $('#bus_pro .pro_02').css('display','none')
	  })
	  
	  $('#bus_pro .pro_r').click(function (){
	  $('#bus_pro .pro_02').css('display','block')
	  $('#bus_pro .pro_01').css('display','none')
	  })
//点击移动
    
	var a=0;
	var b=0;
	$oul=$('#bus_pro .pro_img ul');
	$ali=$('#bus_pro .pro_01 li');
	var i=Math.floor($ali.length/2);
	$oul.css("width", $ali.length*170);
	$('#bus_pro .prve').click(function(){
		
if(a>i){
a=i+1;
b=-(i+1);
return;}
	
		$oul.animate({left:'-=160px'}, 300);
		a++;
		b--;
	});
	
	
	

	$('#bus_pro .next').click(function(){
		if(b>i){
b=i+1;
a=-(i+1);
return;
}
		$oul.animate({left:'+=160px'}, 300);
	a--;
	b++;
		
		
	});
	
	
//点击切换重置图片位置	  
 $('#bus_pro .pro_l').click(function (){
	 $('#bus_pro .pro_img ul').css('left','-400px')
	 a=0;
	 b=0;
	 })
 $('#bus_pro .pro_r').click(function (){
	 $('#bus_pro .pro_img ul').css('left','-400px')
	 a=0;
	 b=0;
	 })	
	
	
	})

