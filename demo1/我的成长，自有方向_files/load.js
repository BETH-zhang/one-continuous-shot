var index=0;
var fileList = [
    'images/bg2.jpg?v1',

    'images/btn.png?v1',
    'images/code.png?v1',
    'images/left.png?v1',
    'images/p1_1.png?v1',

    'images/p2_1.png?v1',
    'images/p2_1_01.png?v1',
    'images/p2_1_02.png?v1',
    'images/p2_2.png?v1',

    'images/p2_3.png?v1',
    'images/p3_5.png?v1',
    'images/p3_4.png?v1',
    'images/p3_3.png?v1',
    'images/p3_2.png?v1',
    'images/p3_1.png?v1',
    'images/p3bg.jpg?v1',

    'images/sc.png?v1',
    'images/skip.png?v1',
    'images/x.png?v1',
    'images/hb/5.jpg?v1',
    'images/hb/1.jpg?v1',
    'images/hb/2.jpg?v1',
    'images/hb/3.jpg?v1',
    'images/hb/4.jpg?v1',

    'images/nc/0.png?v1',
    'images/nc/1.png?v1',
    'images/nc/2.png?v1',
    'images/nc/3.png?v1',
    'images/nc/4.png?v1',
    'images/nc/5.png?v1',
    'images/nc/6.png?v1',
    'images/nc/7.png?v1',
    'images/nc/8.png?v1',
    'images/nc/9.png?v1',
    'images/nc/10.png?v1',
    'images/nc/11.png?v1',
    'images/nc/12.png?v1',

    'images/nc90/0.png?v1',
    'images/nc90/1.png?v1',
    'images/nc90/2.png?v1',
    'images/nc90/3.png?v1',
    'images/nc90/4.png?v1',
    'images/nc90/5.png?v1',
    'images/nc90/6.png?v1',
    'images/nc90/7.png?v1',
    'images/nc90/8.png?v1',
    'images/nc90/9.png?v1',
    'images/nc90/10.png?v1',
    'images/nc90/11.png?v1',
    'images/nc90/12.png?v1',

    'images/right.png?v1'

];

function loadImage(imgIndex){
    var img = new Image();
    img.src = fileList[imgIndex];
    var percent = Math.round((imgIndex / fileList.length) * 100); //1.百分比是通过这个计算的
    // $(".loading_percent").html(percent+"%");//2.在页面中显示 百分比
    img.onload = function () {
        imgIndex++;
        if(imgIndex < fileList.length){
            loadImage(imgIndex);
        }else{

        }
    }
}

window.onload = function () {
    loadImage(index);
}

