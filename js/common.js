//主页
$(function(){
	//资源分类弹框显隐
	$(".navbar li:first-child").mouseover(function(){
		$(".box").show();
	})
	$(".navbar li:first-child").mouseleave(function(){
		$(".box").hide();
	})
	$(".box").mouseover(function(){
		$(this).show();
	})
	$(".box").mouseleave(function(){
		$(this).hide();
	})
	//资源分类弹窗遮罩
	$(".box .anchor").hover(function(){
 		$(this).find(".img-shadow").css("top","0");
	},function(){
		$(this).find(".img-shadow").css("top","116px");
	})
	
	//城市选择框显隐
	$(".drop-menu").mouseover(function(){
		$(this).show();
	})
	
	$(".banner-bg,.business-description,.search-btn,.input-box,.recommend,.story,footer").click(function(){
		$(".drop-menu").fadeOut(200);
	})
	
	$(".drop-menu-default").click(function(){
		$(".drop-menu").fadeToggle(200);
	})
	$(".drop-menu li").click(function(){
		var value = $(this).find(".anchor").text();
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parent().prev().find("span").text(value);
		$(this).parent().fadeOut(200);
	})
	
	//登录弹窗
	$("#phone-login").click(function(){
		$(".shadow").fadeIn(300);
		$("body").attr("style","overflow: hidden;");
	})
	$(".login-close").click(function(){
		$("body").attr("style","overflow: auto;");
		$(".shadow").fadeOut(300)
	})
	
	//登录选项弹窗
	$(".nav-right>li:last-child").mouseover(function(){
		if($(this).find("div").hasClass("avatar")){
			$(".login-box-has").slideDown(100);
		}
		else{
			$(".login-box").slideDown(100);
		}
	})
	$(".nav-right>li:last-child").mouseleave(function(){
		if($(this).find("div").hasClass("avatar")){
			$(".login-box-has").slideUp(100);
		}
		else{
			$(".login-box").slideUp(100);
		}
	})
	$(".login-box").mouseleave(function(){
		$(this).hide();
	})
	$(".login-box a").click(function(){
		$(".login-box").slideUp();
	})
	$(".login-box").mouseleave(function(){
		$(this).hide();
	})
	$(".login-box a").click(function(){
		$(".login-box").slideUp();
	})
	
	//主页轮播	        
    $('.carousel').bxSlider({
		mode: 'horizontal',
		infiniteLoop: true,
		controls: true,
		speed: 500, 
		auto: true,
		autoHover: true,
        slideWidth: 1920, 
        slideMargin: 0
    });
    
    //详情页轮播
    $('.similar-recommend').bxSlider({
		mode: 'horizontal',
		infiniteLoop: true,
		controls: true,
		speed: 500, 
		auto: true,
		autoHover: true,
        slideWidth: 334, 
        slideMargin: 0
    });
    
    //强烈推荐获取文字高度
	$(".recommend-list .anchor").mouseover(function(){
		var height = $(this).find(".recommend-arts").height();
		console.log(height);
		if(height-20>=0){
			$(this).find(".recommend-detail").css("top",67-Math.floor((height-20)/364*100)+"%");
		}
	})
	$(".recommend-list .anchor").mouseleave(function(){
		$(this).find(".recommend-detail").css("top","67%");
	})
	
	
})
//信息发布页面
$(function(){
	//信息发布页面选项卡
	$(".step-list li").click(function(){
		var i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".issue-step").eq(i).show().siblings().hide();
	})
})
//详情页面
$(function(){
	//信息发布页面展开、收缩
	$(".switch-btn").click(function(){
		var h = $(this).siblings().find("activity-details").height();
		console.log(h);
		if(h<45){
			$(this).attr("disabled",true);
		}
		else{
			if($(this).parent().hasClass("active")){
				$(this).parent().removeClass("active");
				$(this).removeClass("fold").addClass("unfold");
			}
			else{
				$(this).parent().addClass("active");
				$(this).removeClass("unfold").addClass("fold");
			}
		}
	})
	
	//立即预约弹窗
	$(".order-btn").click(function(){
		$(".subscribe-shadow").show();
	})
	$(".subscribe-close,.cancel-btn").click(function(){
		$(".subscribe-shadow").hide();
	})
	$("#one").click(function(){
		if($("#subscribe-name").val() != ''){
			$(this).parent().parent().hide();
			$(".two").show();
		}
		else{
			return;
		}	
	})
	$("#two").click(function(){
		$(this).parent().parent().hide();
		$(".three").show();
	})
	$("#three").click(function(){
		if($(".subscribe-item").hasClass("active")){
			$(this).parent().parent().hide();
			$(".four").show();
		}
		else{
			return;
		}
	})
	$(".subscribe-item").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass("active");
		}
	})
	$("#four").click(function(){
		$(".subscribe-shadow").hide();
		$(this).parent().parent().hide();
		$(".one").show();
	})
	
	//加入心愿单
	$(".add-btn").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active").html('<i class="fa fa-heart" style="margin-right:5px;"></i>已在我的心愿单');
		}
		else{
			$(this).removeClass("active").html('<i class="fa fa-heart-o" style="margin-right:5px;"></i>加入心愿单');
		}
	})
})
//列表页面
$(function(){
	//列表页选项卡
	$(".filter li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	//列表页更多按钮
	$(".filtrate-con li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".filtrate-more").click(function(){
		
		var H = $(this).prev().find("ul").innerHeight();
		console.log(H)
		if($(this).hasClass("flag")){
			if(H>52){
			$(this).find("a").html("收起 &lt;&lt;");
			$(this).prev().css("height","auto");
			$(this).removeClass("flag");
			}
			else{
				$(this).attr("disabled",true);
			}
		}
		else{
			$(this).find("a").html("更多 &gt;&gt;");
			$(this).prev().css("height","51px");
			$(this).addClass("flag");
		}
	})
})
//个人中心
$(function(){
	//我的订单点击选取
	
	$("#order-list .select-one").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().attr("checked","checked");
			
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().removeAttr("checked");
			$("#order-fun .select-all").next().prop("checked",false);
			$("#order-fun .select-all").find(".round").hide();
			$("#order-fun .select-all").css("border-color","#969696");
		}
	})
	//我的订单全选
	$("#order-fun .select-all").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().prop("checked",true);
			$("#order-list .select-one").next().prop("checked",true);
			$("#order-list .select-one").find(".round").show();
			$("#order-list .select-one").css("border-color","#ff4d00");
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().prop("checked",false);
			$("#order-list .select-one").next().prop("checked",false);
			$("#order-list .select-one").find(".round").hide();
			$("#order-list .select-one").css("border-color","#969696");
		}
	})
	
	//我的心愿单选取
	$("#wish-list .select-one").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().attr("checked","checked");
			
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().removeAttr("checked");
			$("#wish-fun .select-all").next().prop("checked",false);
			$("#wish-fun .select-all").find(".round").hide();
			$("#wish-fun .select-all").css("border-color","#969696");
		}
	})
	//我的心愿单全选
	$("#wish-fun .select-all").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().prop("checked",true);
			$("#wish-list .select-one").next().prop("checked",true);
			$("#wish-list .select-one").find(".round").show();
			$("#wish-list .select-one").css("border-color","#ff4d00");
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().prop("checked",false);
			$("#wish-list .select-one").next().prop("checked",false);
			$("#wish-list .select-one").find(".round").hide();
			$("#wish-list .select-one").css("border-color","#969696");
		}
	})
	//我的消息
	$("#message-list .select-one").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().attr("checked","checked");
			
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().removeAttr("checked");
			$("#message-fun .select-all").next().prop("checked",false);
			$("#message-fun .select-all").find(".round").hide();
			$("#message-fun .select-all").css("border-color","#969696");
		}
	})
	//我的消息全选
	$("#message-fun .select-all").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().prop("checked",true);
			$("#message-list .select-one").next().prop("checked",true);
			$("#message-list .select-one").find(".round").show();
			$("#message-list .select-one").css("border-color","#ff4d00");
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().prop("checked",false);
			$("#message-list .select-one").next().prop("checked",false);
			$("#message-list .select-one").find(".round").hide();
			$("#message-list .select-one").css("border-color","#969696");
		}
	})
	//我的评论
	$("#comment-list .select-one").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().attr("checked","checked");
			
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().removeAttr("checked");
			$("#comment-fun .select-all").next().prop("checked",false);
			$("#comment-fun .select-all").find(".round").hide();
			$("#comment-fun .select-all").css("border-color","#969696");
		}
	})
	//我的评论全选
	$("#comment-fun .select-all").click(function(){
		if(!$(this).next().attr("checked")){
			$(this).find(".round").show();
			$(this).css("border-color","#ff4d00");
			$(this).next().prop("checked",true);
			$("#comment-list .select-one").next().prop("checked",true);
			$("#comment-list .select-one").find(".round").show();
			$("#comment-list .select-one").css("border-color","#ff4d00");
		}
		else{
			$(this).find(".round").hide();
			$(this).css("border-color","#969696");
			$(this).next().prop("checked",false);
			$("#comment-list .select-one").next().prop("checked",false);
			$("#comment-list .select-one").find(".round").hide();
			$("#comment-list .select-one").css("border-color","#969696");
		}
	})
	
	//修改个人资料 下拉框
	$(".modified-type-box").click(function(){
		if(!$(this).hasClass("open")){
			$(this).next().css("display","block");
			$(this).addClass("open");
		}
		else{
			$(this).next().css("display","none");
			$(this).removeClass("open");
		}
	})
	$(".income-list li").click(function(){
		var text = $(this).text();
		$(this).parent().prev().find("span").html(text);
		$(this).parent().hide();
	})
	//我的投诉下拉框
	$(".complaints-type-box").click(function(){
		if(!$(this).hasClass("open")){
			$(this).next().css("display","block");
			$(this).addClass("open");
		}
		else{
			$(this).next().css("display","none");
			$(this).removeClass("open");
		}
	})
	$(".select-list li").click(function(){
		var text = $(this).text();
		$(this).parent().prev().find("span").html(text);
		$(this).parent().hide();
	})
})

//注册、登录页多选框样式改变实现
$(function(){
	$(".checkbox").click(function(){
		if($(this).next().prop("checked")){
			
			$(this).addClass("inactive");
			$(this).next().prop("checked",false);
		}
		else{
			$(this).removeClass("inactive");
			$(this).next().prop("checked",true);
		}
	})
	$(".service-terms,.remember-pwd").click(function(){
		if($(this).prev().prop("checked")){
			$(this).prev().prev().addClass("inactive");
			$(this).prev().prop("checked",false);
		}
		else{
			$(this).prev().prev().removeClass("inactive");
			$(this).prev().prop("checked",true);
		}
	})
	
})
//排行页面
$(function(){
	//排行页面选项卡
	$(".ranklist-nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".ranklist-sort").eq(index).show().siblings(".ranklist-sort").hide();
	})
	
	//排行页更多按钮
	$(".ranklist-con li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".ranklist-more").click(function(){
		
		var H = $(this).prev().find("ul").innerHeight();
		console.log(H)
		if($(this).hasClass("flag")){
			if(H>52){
			$(this).find("a").html("收起 &lt;&lt;");
			$(this).prev().css("height","auto");
			$(this).removeClass("flag");
			}
			else{
				$(this).attr("disabled",true);
			}
		}
		else{
			$(this).find("a").html("更多 &gt;&gt;");
			$(this).prev().css("height","51px");
			$(this).addClass("flag");
		}
	})
})
//评价页面
$(function(){
	//评分
	$(".score-box li").click(function(){
		$(this).addClass("active");
		$(this).prevAll().each(function(){
			$(this).addClass("active");
		});
		$(this).nextAll().each(function(){
			$(this).removeClass("active");
		})
	})
	//匿名显示是否
	$(".anonymous").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}
		else{
			$(this).addClass("active");
		}
	})
	//点击评价按钮
	$(".state-btn").click(function(){
		var txt = $(this).text();
		if(txt == "评价"){
			$(this).parents().find(".order-content").next().show();
		}
		else{
			return;
		}
	})
	$("#submit-evaluation").click(function(){
		$(this).parents().find(".blind").hide();
	})
})
//支付方式页面
$(function(){
	//预约详情提示弹窗
	$(".book-details").click(function(){
		if($(".book-pop").hasClass("flag")){
			$(".book-pop").removeClass("flag");
		}
		else{
			$(".book-pop").addClass("flag");
		}
	})
	//支付方式切换
	$(".pay-item .anchor").click(function(){
		var i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".pay-item-content").eq(i).show().siblings().hide();
	})
	//选中银行或第三方
	$(".card-bag li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})
//header上搜索框
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
	if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        container.find('.search-input').val('');
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}
