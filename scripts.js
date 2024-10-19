const img1=document.getElementById('img1');

var w_width=window.innerWidth;
var w_height=window.innerHeight;

let width=Math.random()*w_width;
let height=Math.random()*w_height;

img1.style.left=width+'px';
img1.style.top=height+'px';

let vx=1;
let vy=1;

function movePos()
{
    if(width+200>=w_width || width<=0)
        vx=-vx;
    if(height+200>=w_height || height<=0)
        vy=-vy;

    width+=vx;
    height+=vy;

    img1.style.left=width+'px';
    img1.style.top=height+'px';
    animationId = requestAnimationFrame(movePos);
}

img1.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationId);
});

// 鼠标离开事件，恢复动画
img1.addEventListener('mouseleave', () => {
    movePos();
});

// 启动动画
movePos();