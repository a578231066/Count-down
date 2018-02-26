    $(function() {
        updateEndTime();
    });

    function updateEndTime(){
        var date = new Date();
        var time = date.getTime();
        
        $(".time").each(function(i) {
            var endDate = this.getAttribute("endTime");
            var endDate1 = eval('new Date(' + endDate.replace(/\d+(?=-[^-]+$)/, function(a){
                return parseInt(a, 10) - 1;
            }).match(/\d+/g) + ')');
            
            var endTime = endDate1.getTime();
            var lag = (endTime - time) / 1000;
            
            if (lag > 0) {
                var second = Math.floor(lag % 60);
                var minite = Math.floor((lag / 60) % 60);
                var hour = Math.floor((lag / 3600) % 24);
                var day = Math.floor((lag / 3600) / 24);
                $(this).html("直播倒计时：" + "<b>"+day + "</b>" + "天" + "<b>" + hour + "</b>" + "时" + "<b>" + minite + "</b>" + "分" + "<b>" + second + "</b>" + "秒");
            }else{
                $(this).html("直播结束啦！");
            }       });
        setTimeout("updateEndTime()", 1000);
    };