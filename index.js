/*制作流程
 1.获取元素
 2.让小球移动
 移动方向  移动范围
 3.移动挡板
 跟随鼠标移动
 * */
var main = document.getElementById("main");
var ball = document.getElementById("ball");
var board = document.getElementById("board");


ball.speedX = 1;
ball.speedY = 1;

ball.run = function () {
    var left = parseInt(this.style.left) + this.speedX;
    var top = parseInt(this.style.top) + this.speedY;

    this.style.left = left + "px";
    this.style.top = top + "px";

    this.check(left,top);
};

ball.check = function (left,top) {
    if (left <= 0 || left >= 370){//碰壁了
        //反向
        this.turnX();
    }
    if (top <= 0 || top >= 370){//碰壁了
        //反向
        this.turnY();
    }

    if(top>=370){
        clearInterval(clock);
        alert("哈哈哈  小垃圾  输了吧！");
        return;
    }


    //检测木板
    var bleft = parseInt(board.style.left);
    var btop = parseInt(board.style.top);
    if (left+15>= bleft && left+15 <=bleft+60 && top + 30 >= btop){
        this.turnY();
    }
};

ball.turnX = function () {
    this.speedX = -this.speedX;
};
ball.turnY = function () {
    this.speedY = -this.speedY;
};


//定时器
var clock = setInterval(function X() {
    ball.run();
},20);


main.onmousemove = function (e) {
    if (e.srcElement !== main){
        return;
    }

    board.style.left = e.offsetX - 30 + "px";
    board.style.top = e.offsetY - 20 + "px";
};

ball.init = function () {
    this.speedX = 3;
    this.speedY = 4;
};
ball.init();