var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,//循环模式，swiper会自己初始化
    onTransitionEnd:function(swiper){//滑块滑动结束时
        var curIndex =  swiper.activeIndex;//当前活动滑块的索引（当滑动结束时，当前显示的滑块称为当前活动滑块）
        var slides = swiper.slides;//获得所有的滑块
        [].forEach.call(slides,function(item,index){
            item.id = "";
            //对当前显示的滑块的索引做判断
            //如果是第一个滑块，增加的id名是slides.length-2 ,如果是最后一个，增加id名是page1,其他则是"page"+自己的索引
            if(index==curIndex){/*通过索引找到当前显示的滑块*/
                /* if(curIndex==0){
                 item.id="page"+(slides.length-2);
                 }else if(curIndex==slides.length-1){
                 item.id="page1";
                 }else{
                 item.id="page"+curIndex;
                 }*/
                switch (curIndex){
                    case 0:
                        item.id="page"+(slides.length-2);
                        break;
                    case slides.length-1:
                        item.id = "page1";
                        break;
                    default :
                        item.id= "page"+curIndex;
                }
            }


        });

    }
});
/*

var music = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function(){
    music.style.opacity = 1;
    beyond.play();//play()播放 pause() 停止
    music.className = "music musicCur";
},1000)

//绑定点击事件，如果是播放的则停止，如果是停止的则播放
music.addEventListener("click",function(){
    //beyond.paused判断音频文件是否播放，返回值是true表示停止 false表示播放
    if(beyond.paused){
        beyond.play();//播放
        music.className ="music musicCur"
    }else{
        beyond.pause();//停止
        music.className ="music"
    }
},false)

*/
