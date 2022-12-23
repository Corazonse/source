// 获取 位置标签 并设置hover之后一直改变背景音颜色
let local_extend = document.querySelector(".local-extend")
let local = document.querySelector(".local")
// 绑定dom事件
local_extend.onmouseover = function () {
    local.style.backgroundColor = " rgb(255, 255, 255) "
}
local.onmouseover = function () {
    local.style.backgroundColor = " rgb(255, 255, 255) "
}
local.onmouseleave = function () {
    local.style.backgroundColor = " rgb(227, 228, 229)  "
}
local_extend.onmouseleave = function () {
    local.style.backgroundColor = " rgb(227, 228, 229) "
}

// 设置手机京东的小三角和拓展栏动画展出
let tri = document.querySelector(".tri")
let iJD_extend = document.querySelector(".iJD-extend")
let iJD = document.querySelector(".iJD")

iJD_extend.onmouseover = function () {
    console.log("你好");
    tri.style.display = "block"
    iJD_extend.style.height = "300px"
    // 直接添加过渡效果可以解决问题不用添加动画
    // iJD_extend.style.animation = "run 1s  normal"

}
iJD.onmouseover = function () {
    console.log("你好");
    tri.style.display = "block"
    iJD_extend.style.height = "300px"
    // iJD_extend.style.animation = "run 1s  normal"
}
iJD_extend.onmouseleave = function () {
    console.log("你好");
    tri.style.display = "none"
    iJD_extend.style.height = "0px"

}
iJD.onmouseleave = function () {
    console.log("你好");
    tri.style.display = "none"
    iJD_extend.style.height = "0px"
}

// 实现搜索框的模糊查询====
// 拿到输入框内容 以及获取搜索框（下拉列表）
let keyword = document.querySelector(".input")
let mser = document.querySelector(".mser")

// 定义数组存储假数据 现在没有服务器呜呜呜
let searchArr = ['小米手机', '华为手机', '苹果手机', 'oppo手机', '海贼王', 'vivo手机'
    , '海贼王', '间谍过家家', '鬼灭之刃', '镇魂街', '一人之下', '刺客五六七', '苹果手表', '原神', 'APEX', 'csol']
// 给输入框绑定内容改变时间
keyword.oninput = function () {
    // 在遍历之前先把旧的内容清除不然会越来越多(也就是每次修改内容的时候)
    mser.innerHTML = " "
    // 遍历数组哪些项包括用户输入的东西
    for (let i = 0; i < searchArr.length; i++) {

        // 用户输入的值有没有与数组匹配的值的字符串 ！=1等于 有某个字符串 
        if (searchArr[i].indexOf(keyword.value) != -1) {
            // 所以当前匹配元素应该显示到div中的模糊搜索栏
            mser.innerHTML += " <p>" + "&nbsp;" + "&nbsp;" + searchArr[i] + "</p>"
            mser.style.display = "block"
        }
    }
}
// 绑定鼠标失去焦点的时间
keyword.onblur = function () {
    // mser.innerHTML = " "
    mser.style.display = "none"

}


// 设计轮播图按钮事件
// 创建一个简单的动画函数
// 参数
// box 盒子
// target 执行动画的目标
// speed 速度 正负数决定动画的方向 0 -500 speed一定为正值 500-0 速度一定为负值
// attr要执行动画的样式
// callback 回调函数在函数执行完毕后执行
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

// 获取轮播图 img-list
let img = document.querySelector(".img-list")
// 默认显示图片的索引
let index = 0
// 获取所有的 轮播图按钮
let allI = document.querySelectorAll(".ii")
// 设置默认的选中效果
allI[index].style.backgroundColor = "rgb(255, 255, 255)"
allI[index].style.border = "3px rgba(255, 255, 255, .4) solid"

let timer

for (let i = 0; i < allI.length; i++) {
    //为每个 i标签的都添加一个属性 索引
    allI[i].num = i
    // 为每一个索引绑定上事件
    allI[i].onclick = function () {
        // console.log(i);
        // console.log(this.num);
        // 关闭上一个定时器
        clearInterval(timer)
        // 获取点击按钮的索引 并设置成index
        index = this.num;
        // 适用move函数执行
        // box 盒子
        // target 执行动画的目标
        // speed 速度 正数负数决定方向
        // speed 速度2 判断速度的正负值 如果0-500 speed必须为正值（默认） 500-0移动speed为负值
        // attr 要执行动画的样式
        // callback 回调函数将会在函数执行完毕后执行
        move(img, 477 * index, 9999, "bottom", function () {
            // 点击完了自动开启动画
            setI()
            autoChange();
        })

    }

}

// 定义一个方法用于设置选中的 i
function setI() {
    if (index >= allI.length) {
        index = 0;
        // 此时显示图片的最后一张 马上瞬间切换为第一张
    }
    // 改变按钮
    for (let i = 0; i < allI.length; i++) {
        allI[i].style.backgroundColor = "rgba(255, 255, 255, .4)"
        allI[i].style.border = "3px transparent solid"
        allI[i].style.backgroundClip = "content-box"
    }
    allI[index].style.backgroundColor = "rgb(255, 255, 255)"
    allI[index].style.border = "3px rgba(255, 255, 255, .4) solid"
}

// 设置自动定时器
function autoChange() {
    // 开启定时器 每隔一段时间调用下一个定时器
    timer = setInterval(function () {
        index++
        move(img, 477 * index, 9999, "bottom", function () {
            // 修改导航点
            setI()
        })
    }, 3000)
}

// 开启自动定时器
autoChange();

// 设置轮播图按钮的点击事件 点击就下一张或者上一张图片
let bn = document.querySelector(".bn")
let bp = document.querySelector(".bp")

bn.onclick = function () {
    // 关闭上一个定时器
    clearInterval(timer)

    index = index + 1
    move(img, 477 * index, 9999, "bottom", function () {
        // 点击完了自动开启动画
        setI()
        autoChange();
    })
}
bp.onclick = function () {
    // 关闭上一个定时器
    clearInterval(timer)
    index = index - 1
    if (index < 0) {
        index = allI.length - 1
    }
    move(img, 477 * index, 9999, "bottom", function () {
        // 点击完了自动开启动画
        setI()
        autoChange();
    })
}

// 电梯效果实现

// 楼层定位切换
// 给整个文档绑定一个滚动事件
// 获取电梯
let ele = document.querySelector(".ele");
// 拿到灵活height 顶部导航 中间区域 中间区域二的高
let w = document.querySelector(".w")
let w2 = document.querySelector(".w2")
// 获取所有高度 包括margin padding height
let wh = w.offsetHeight;
let wh2 = w2.offsetHeight;
document.onscroll = function () {
    // 获取到滚动条垂直方向滚动了多少 一定距离变成固定定位
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚了" + top);

    // 吸顶灯效果 吧search 变成固定定位
    // 获取search框框
    let search = document.querySelector(".search")

    console.log(wh);
    console.log(wh2);
    if (top >= wh + wh2 && top <= wh + wh2 + 260) {
        // 定位变成固定对位 添加固定定位
        ele.className = 'ele ele-fix';
        ele.className = 'ele ele-fix ele1';
        search.className = "search search-li"
    }
    if (top >= wh + wh2) {
        //    添加吸顶样式
        search.className = "search search-li"
        search.style.position = "fixed"
        search.style.height = "50px"
    }
    if (top >= wh + wh2 + 260 && top <= wh + wh2 + 260 + 980) {
        // 定位变成固定对位 添加固定定位
        ele.className = 'ele ele-fix';
        ele.className = 'ele ele-fix ele2';
    }
    if (top >= wh + wh2 + 260 + 980 && top <= wh + wh2 + 260 + 980 + 1005) {
        // 定位变成固定对位 添加固定定位
        ele.className = 'ele ele-fix';
        ele.className = 'ele ele-fix ele3';
    }
    if (top >= wh + wh2 + 260 + 980 + 1005 && top <= wh + wh2 + 260 + 980 + 1005 + 1870) {
        // 定位变成固定对位 添加固定定位
        ele.className = 'ele ele-fix';
        ele.className = 'ele ele-fix ele4';
    }
    if (top <= wh + wh2) {
        // 定位变成固定对位 添加固定定位
        ele.className = 'ele';
        search.className = "search"
        search.style.position = "relative"
        search.style.height = "60.5px"
    }


}



