const WIDTH = 450;
const HEIGHT = 700;
const GAMER_WIDTH = 62;
const GAMER_HEIGHT = 43;
const BULLET_WIDTH = 16;
const BULLET_HEIGHT = 16;
const ENEMY_WIDTH = 60;
const ENEMY_HEIGHT = 40;

const canvas = document.querySelector('#canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext('2d');

const planeImg = new Image();
planeImg.src = "images/hero.png";
const bgImg = new Image();
bgImg.src = "images/bg.jpg";
const zdImg = new Image();
zdImg.src = "images/bullet.png";
const drImg = new Image();
drImg.src = "images/enemy.png";

// let bzImg = new Image();
// bzImg.src = "images/explosion1.png";

// let bzArr = [];
// let bzImg = [];
// for (let i = 0; i < 19; i++) {
//     bzArr[i] = "images/explosion" + (i + 1) + ".png";
// }
// for (let i = 0; i < bzArr.length; i++) {
//     bzImg[i] = new Image();
//     bzImg[i].src = bzArr[i];
//     // bzImg.src = bzArr[i];
//     // console.log(bzImg.src);
// }

// 背景对象
const bgObj = {
    x: 0,
    y: 0,
    speed: 1.2,
    img: bgImg
}
// 自己对象
let planeObj = {
    x: WIDTH / 2 - GAMER_WIDTH / 2,
    y: HEIGHT - GAMER_HEIGHT,
    speed: 1,
    img: planeImg
}
// 子弹对象
let bulletArr = [];
// 敌机对象
let enemyArr = [];

// canvas绑定鼠标移动事件
canvas.addEventListener('mousemove', function (e) {
    planeObj.x = e.offsetX - GAMER_WIDTH / 2;
    planeObj.y = e.offsetY - GAMER_HEIGHT / 2;

    // 边缘检测
    if (planeObj.x <= 0) {
        planeObj.x = 0;
    } else if (planeObj.x > WIDTH - GAMER_WIDTH) {
        planeObj.x = WIDTH - GAMER_WIDTH;
    }
    if (planeObj.y <= 0) {
        planeObj.y = 0;
    } else if (planeObj.y > HEIGHT - GAMER_HEIGHT) {
        planeObj.y = HEIGHT - GAMER_HEIGHT;
    }
})

let index = 0;
let timer = setInterval(function () {
    index++;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    // 画背景
    ctx.drawImage(bgObj.img, bgObj.x, bgObj.y, WIDTH, HEIGHT);
    ctx.drawImage(bgObj.img, bgObj.x, bgObj.y - HEIGHT, WIDTH, HEIGHT);
    // 地图循环
    if (bgObj.y >= HEIGHT) {
        bgObj.y = 0;
    } else {
        bgObj.y += bgObj.speed;
    }

    // 子弹
    if (index % 25 === 0) {
        bulletArr.push({
            speed: 8,
            x: planeObj.x + GAMER_WIDTH / 2,
            y: planeObj.y - GAMER_HEIGHT / 2 + 10,
            width: BULLET_WIDTH,
            height: BULLET_HEIGHT,
            img: zdImg
        })
    }
    // 敌机
    if (index % 40 === 0) {
        enemyArr.push({
            x: Math.floor(Math.random() * (WIDTH - ENEMY_WIDTH)),
            y: -ENEMY_HEIGHT,
            width: ENEMY_WIDTH,
            height: ENEMY_HEIGHT,
            img: drImg,
            speed: 4
        })
    }

    // 子弹
    for (let i = 0; i < bulletArr.length; i++) {
        let blt = bulletArr[i];
        blt.y -= blt.speed;
        if (blt.y < -BULLET_HEIGHT) {
            bulletArr.splice(bulletArr.indexOf(blt), 1);
        }
        ctx.drawImage(blt.img, blt.x - blt.width / 2, blt.y, blt.width, blt.height);
    }

    // 敌机
    for (let i = 0; i < enemyArr.length; i++) {
        let em = enemyArr[i];
        em.y += em.speed;
        if (em.y > HEIGHT) {
            enemyArr.splice(enemyArr.indexOf(em), 1);
        }
        ctx.drawImage(em.img, em.x, em.y, em.width, em.height);
    }


    let result = isCollideGroup(bulletArr, enemyArr);
    if (result) {
        arrRemove(bulletArr, result[0]);
        arrRemove(enemyArr, result[1]);
        // for (let i=0;i<bzImg.length;i++){
        //     ctx.drawImage(bzImg[i],20,20,40,40);
        // }
    }


    // 画自己
    ctx.drawImage(planeObj.img, planeObj.x, planeObj.y, GAMER_WIDTH, GAMER_HEIGHT);

}, 1000 / 60)
