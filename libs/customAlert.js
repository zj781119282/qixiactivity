//弹出提示效果
window.customAlert = function(messages,callback){
    if($(".alert_tip").length<1){
        $("body").append("<div class=\"alert_tip\">"+messages+"</div>");
    }
    //定位居中显示
    leftW = (document.body.clientWidth-$(".alert_tip").width())/2;
    topH = (document.body.clientHeight-$(".alert_tip").height())/2;
    $(".alert_tip").css("top", topH+"px").css("left", leftW+"px").fadeIn(500);
    //谈出效果并执行回调
    $(".alert_tip").animate({top:"0px",opacity:0},1000,function(){
        $(".alert_tip").remove();
        if(callback!=undefined)
            callback();
    });
}