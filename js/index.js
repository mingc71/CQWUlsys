// JavaScript Document
$(document).ready(function(){
    resultsFun();

    //成果展示动画
    function resultsFun(){
        var num = $(".right_re ul li").length;//判断个数
        var conwidth = $(".right_re ul li").width();//判断出一个版块的宽度
        $(".right_re ul").css({"width":num*conwidth+"px"});
        var n = 0;//定义选项卡的索引
        $(".left_re li a").eq(0).addClass("action");
		$(".right_re ul").css({"marginLeft" : "0"});
        /*定义计时器*/
        var myset = setInterval(function(){
            n++;
            /*不能超出索引*/
            if(n >= num){
                n=0;
            }
            goNew();
        },3000);
        /*鼠标点击到选项卡时触发事件*/
        $(".left_re li").hover(function(){
            n = $(this).index();
            goNew();
        },function(){
        })
        /*鼠标放到内容区域时，事件停止*/
        $(".right_re,.left_re").hover(function(){
            clearInterval(myset);
        },function(){
            myset = setInterval(function(){
                n++;
                /*不能超出索引*/
                if(n >= num){
                    n=0;
                }
                goNew();
            },3000);
        })

        /*执行内容滚动函数*/
        function goNew(){
            var slt = $(".left_re li");
            slt.eq(n).children("a").addClass("action");
            slt.eq(n).prevAll("li").children("a").removeClass("action");
            slt.eq(n).nextAll("li").children("a").removeClass("action");

           /* var slt_a = $(".left_re li a");
            slt_a.eq(n).stop().animated({"backgroundPosition":"0px"},400);*/

            var nr = $(".right_re ul");
            nr.stop().animate({"marginLeft" : -n*conwidth+"px"},500);
        }
    }
    //成果展示动画 结束
})
