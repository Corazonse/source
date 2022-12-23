let toDoList = [{
    title: "时间一",
    done: true
},
    {
        title: "时间一",
        done: true
    }


];
// 本地存储里面只能存储字符串的数据格式 把我们数据对象转换为字符串格式JSON.stringify()

// 读取本地存储的数据
function getData() {
    let data = localStorage.getItem("toDoList")
    if (data !== null) {
        //本地存储里面的数据是字符串格式的 但是我们需要的是对象格式
        return JSON.parse(data)
    } else {
        return []
    }
}

$(function () {
    // 点击事件 创建一个小li 并添加文本框内容到里面
    $(".add").click(function () {
        let local = getData()
        alert(local)
        let li = ("<li></li>")
        $(".not").append(li).text(local)

    })


})