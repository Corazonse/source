// 创建一个可以简单的的动画的函数
// 参数:
// box 盒子
// target 执行动画的目标
// speed 速度 正数负数决定方向
// speed 速度2 判断速度的正负值 如果0-500 speed必须为正值（默认） 500-0移动speed为负值
// attr 要执行动画的样式
// callback 回调函数将会在函数执行完毕后执行
function move(box, target, speed, attr, callback) {

    // 获取当前元素的位置 并且判断即将移动哪个方向
    var current = parseInt(getStyle(box, attr));

    if (current > target) {
        // 此时的speed应该为负值
        speed = -speed;
    }


    // 防止帕金森 防止各个定时器互喘息
    clearInterval(box.timer);
    box.timer = setInterval(function () {

        // 获取原来的 left 值然后绑定定时器 绑定getStyle方法 并转换成int 方便加减
        var oldValue = parseInt(getStyle(box, attr));
        // 设置新值
        var newValue = oldValue + speed;

        // 判定是否越界 向右移动时 需要判断newValue值是否大于target
        // 判定是否越界 向左移动时 需要判断newValue值是否小于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }


        if (newValue == target) {
            clearInterval(box.timer);
            // 函数执行完毕 回调函数启动
            callback() && callback(); //
        }
        // 不能直接传attr 因为attr是一个常量
        box.style[attr] = newValue + "px";


    }, 30);


};


// 获取元素任意样式 当前显示的样式
function getStyle(obj, name) {
    // 正常浏览器
    // 判定对象是否存在 要是ie8会返回undefined
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];//优先使用这个方法 [name]指的是返回该方法的属性值
    } else {
        // IE8的方式
        return obj.currenStyle[name];
    }

};
// 定义一个函数,用来向一个元素中添加指定class属性值
/*  问题多点几次就会疯狂添加 addClass
    参数：
        obj 要添加class属性的元素
        cn 要添加的class值
*/
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
   判断元素中是否有指定的class属性值
   hasClass
   若果有返回true
   否则     false
*/
function hasClass(obj, cn) {
    // 创建正则表达式
    //判断obj中有没有cn class 
    // var reg = /\bb2\b/ //判断有仅有b2
    var reg = new RegExp("\\b" + cn + "\\b") //动态生成正则表达式
    return reg.test(obj.className);

}

function removeClass(obj, cn) {
    // 创建正则表达式
    var reg = new RegExp("\\b" + cn + "\\b")
    // 删除class 空串替换术
    obj.className = obj.className.replace(reg, "")
}

// 如果有就删除 没有就添加
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }

}
