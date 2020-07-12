function init(){
    var map = new BMap.Map("allmap");

    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    map.addEventListener("click", function(e){
        map.clearOverlays();
        var clickpoint = new BMap.Point(e.point.lng, e.point.lat);
        var marker = new BMap.Marker(clickpoint);  // 创建标注
                   
        
        var opts = {
            position: clickpoint,    // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("经度：" + e.point.lng + ",纬度：" + e.point.lat,opts);
        // var label = new BMap.Label("欢迎使用百度地图，这是一个简单的文本标注哦~", opts);  // 创建文本标注对象
        marker.setLabel(label);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map.addOverlay(marker);    // 将标注添加到地图中
    });
    
    
    

}

// 百度地图API功能
function addPrimary(){
    map.clearOverlays();
    var point = new BMap.Point()
}