function over(id){
	id.className = 'over';
}

function out(id){
	id.className = 'out';
}

function over2(id){
	id.className = 'over2';
	
}

function out2(id){
	id.className = 'out2';
}

function onerigthimgchang(id){
	id.className = 'onerigthimgchang';
}

function onerigthimgchangnone(id){
	id.className = 'onerigthimgchangnone';
}


	var nowShow = 1;
	
			function show(index){
				if (Number(index)) {
					clearTimeout(sid);
					nowShow = index;
				}
				document.getElementById("imgmun"+nowShow).style.backgroundPosition = "-855px -727px;";
				for (var i = 1;i<5;i++) {
					if(i ==nowShow)
						
						document.getElementById("img"+nowShow).style.display = "block";
						
					else
						document.getElementById("img"+i).style.display = "none";
					
				}
				if (nowShow == 4) 
					nowShow = 1;
				 else
					nowShow++;
				
				sid = setTimeout('show()',3000);
			}


$(function(){
	$("#four-bt-dongtai").click(function(){
		$("#four-rigth-nr2").css("display","none")
		$("#four-rigth-nr").css("display","block")
		$("#four-bt-dongtai").css("border-bottom","1px solid #1E90FF")
		$("#four-bt-tougao").css("border-bottom","0px solid #1E90FF")
		$("#four-bt-dongtai").css("color","#1E90FF")
		$("#four-bt-tougao").css("color","black")
	})
	
	$("#four-bt-tougao").click(function(){
		$("#four-rigth-nr").css("display","none")
		$("#four-rigth-nr2").css("display","block")
		$("#four-bt-tougao").css("border-bottom","1px solid #1E90FF")
		$("#four-bt-dongtai").css("border-bottom","0px solid #1E90FF")
		$("#four-bt-tougao").css("color","#1E90FF")
		$("#four-bt-dongtai").css("color","black")
	})
	
	$("#four-rigth-all").mouseover(function(){
		$("#four-rigth-paihang-ctrl").css("left","0px");
		$(this).css("border-bottom","1px solid #1E90FF")
		$("#four-rigth-yuanchuang").css("border-bottom","0px solid #1E90FF")
	})
	
	$("#four-rigth-yuanchuang").mouseover(function(){
		$("#four-rigth-paihang-ctrl").css("left","-260px");
		$(this).css("border-bottom","1px solid #1E90FF")
		$("#four-rigth-all").css("border-bottom","0px solid #1E90FF")
	})
	
	/*直播排行*/
	$("#three-rigth2-bt-1").mouseover(function(){
		$("#three-rigth-paihang-ctrl").css("left","0px");
		$(this).css("border-bottom","1px solid #1E90FF")
		$("#three-rigth2-bt-2").css("border-bottom","0px solid #1E90FF")
		$("#three-rigth2-bt-3").css("border-bottom","0px solid #1E90FF")
	})
	
	$("#three-rigth2-bt-2").mouseover(function(){
		$("#three-rigth-paihang-ctrl").css("left","-260px");
		$(this).css("border-bottom","1px solid #1E90FF")
		$("#three-rigth2-bt-1").css("border-bottom","0px solid #1E90FF")
		$("#three-rigth2-bt-3").css("border-bottom","0px solid #1E90FF")
	})
	
	$("#three-rigth2-bt-3").mouseover(function(){
		$("#three-rigth-paihang-ctrl").css("left","-520px");
		$(this).css("border-bottom","1px solid #1E90FF")
		$("#three-rigth2-bt-1").css("border-bottom","0px solid #1E90FF")
		$("#three-rigth2-bt-2").css("border-bottom","0px solid #1E90FF")
	})
	
	$("#five-sel").change(function(){
		var fivesel =$("#five-sel").val();
	if(fivesel == 3){
		$("#five-paihang-1").css("display","block");
		$("#five-paihang-2").css("display","none");
	}else{
		$("#five-paihang-2").css("display","block");
		$("#five-paihang-1").css("display","none");
	}
	})
	
	

	/*---*/
//	var weed = "周"
	$("#five-left-bt-0").click(function(){
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-new").css("display","block")
		
		
	})
	
	$("#five-left-bt-1").click(function(){
		$("#five-left-bt-1").text("一");
		$(".five-left-nr").css("display","none")
		$("#five-left-nr-1").css("display","block")
		$("#five-left-bt-1").css("color","#1E90FF")
		$("#five-left-bt-1").css("border-bottom","1px solid #1E90FF")
		
		var va = $("#five-left-bt-1").text();
		$("#five-left-bt-1").text("周"+va);
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-4").text("四");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-7").text("日");
		
	})
	
	$("#five-left-bt-2").click(function(){
		$("#five-left-bt-2").text("二");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-2").css("display","block")
		$("#five-left-bt-2").css("color","#1E90FF")
		$("#five-left-bt-2").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-2").text();
		$("#five-left-bt-2").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-4").text("四");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-7").text("日");
	})
	
	$("#five-left-bt-3").click(function(){
		$("#five-left-bt-3").text("三");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-3").css("display","block")
		$("#five-left-bt-3").css("color","#1E90FF")
		$("#five-left-bt-3").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-3").text();
		$("#five-left-bt-3").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-4").text("四");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-7").text("日");
	})
	
	$("#five-left-bt-4").click(function(){
		$("#five-left-bt-4").text("四");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-4").css("display","block")
		$("#five-left-bt-4").css("color","#1E90FF")
		$("#five-left-bt-4").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-4").text();
		$("#five-left-bt-4").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-7").text("日");
	})
	
	$("#five-left-bt-5").click(function(){
		$("#five-left-bt-5").text("五");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-5").css("display","block")
		$("#five-left-bt-5").css("color","#1E90FF")
		$("#five-left-bt-5").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-5").text();
		$("#five-left-bt-5").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-4").text("四");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-7").text("日");
	})
	
	$("#five-left-bt-6").click(function(){
		$("#five-left-bt-6").text("六");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-6").css("display","block")
		$("#five-left-bt-6").css("color","#1E90FF")
		$("#five-left-bt-6").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-6").text();
		$("#five-left-bt-6").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-4").text("四");
		$("#five-left-bt-7").text("日");
	})
	
	$("#five-left-bt-7").click(function(){
		$("#five-left-bt-7").text("日");
		
		$(".five-left-nr").css("display","none")
		
		$("#five-left-nr-7").css("display","block")
		$("#five-left-bt-7").css("color","#1E90FF")
		$("#five-left-bt-7").css("border-bottom","1px solid #1E90FF")
	
		var va = $("#five-left-bt-7").text();
		$("#five-left-bt-7").text("周"+va);
		$("#five-left-bt-1").text("一");
		$("#five-left-bt-3").text("三");
		$("#five-left-bt-2").text("二");
		$("#five-left-bt-5").text("五");
		$("#five-left-bt-6").text("六");
		$("#five-left-bt-4").text("四");
	})
	

	var f = $(".five-left-bt-color");
	$(f).each(function(i,e){
		$(e).click(function(){
			$(f).each(function(index,element){
				$(element).css("color","black");
				$(element).css("border-bottom","0px solid #1E90FF");
			});
			$(f).eq(i).css("color","#1E90FF");
			$(f).eq(i).css("border-bottom","1px solid #1E90FF");
		});
		$(e).hover(function(){
			$(this).css("color","#1E90FF");
		},function(){
			var count = 0;
			var s = document.getElementsByClassName("five-left-bt-color");
			for(var i = 0; i < s.length; i++){
				if(s[i].style.color == "black"){
					count++;
				}
			}
			if(7 != count){
				$(this).css("color","black");
				$(this).css("border-bottom","0px solid #1E90FF");
			}
		});
	});
})
