$(function (){


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
$(function(){
	$li1= $('#run1 .pro_01 li');
	$ul1=$('#run1 ul');
	$left1=('#run1 .prve');
	$right1=('#run1 .next');
	$ul1.css("width", $li1.length*170);
	var lc1 = 0;
	var rc1 = $li1.length-10;
	
	$left1.click(function(){
		if (lc1 < 1) {
			alert("已经是第一张图片");
			return;
		}
		lc1--;
		rc1++;
		$ul1.animate({left:'+=166px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			alert("已经是最后一张图片");
			return;
		}
		lc1++;
		rc1--;
		$ul1.animate({left:'-=166px'}, 1000);
	});
	
	
	
	
	
	})


})