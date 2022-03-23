// 碰撞检测
function isCollide(objA, objB) {
    return Math.abs(objA.x - objB.x) < Math.max(objA.width, objB.width) &&
        Math.abs(objA.y - objB.y) < Math.max(objB.height, objA.height)
}

// 返回碰撞对象
function isCollideGroup(arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if (isCollide(arrA[i], arrB[j])) {
                return [arrA[i], arrB[j]];
            }
        }
    }
}

// 删除碰撞对象
function arrRemove(arr, obj) {
    let idx = arr.indexOf(obj);
    if (idx !== -1) {
        arr.splice(idx, 1);
    }
}

// 爆炸
function bz() {
    let bzArr = [];
    let bzImg = new Image();
    for (let i = 0; i < 19; i++) {
        bzArr[i] = "images/explosion" + (i + 1) + ".png";
    }
    for (let i = 0; i < bzArr.length; i++) {
        bzImg.src = bzArr[i];
        console.log(bzImg.src);
    }
}