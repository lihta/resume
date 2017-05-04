
var mySwiper=new Swiper('.swiper-container',{
    direction:'vertical',//滑块滑动的方向
    loop:true,
    onTransitionEnd: function (swiper) {
        var curIndex=swiper.activeIndex;
        var slides=swiper.slides;
        [].forEach.call(slides, function (item,index) {
            item.id="";
            if(index==curIndex){
                switch(curIndex){
                    case 0:
                        item.id='page'+(slides.length-2);
                        break;
                    case slides.length-1:
                        item.id='page1';
                        break;
                    default:
                        item.id='page'+curIndex;
                }
            }
        })
    }
});

