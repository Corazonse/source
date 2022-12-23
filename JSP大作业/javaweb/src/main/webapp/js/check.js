function delA() {

        // 获取他的爷爷节点
        var tr = this.parentNode.parentNode;
        // 获取员工姓名
        var name = tr.getElementsByTagName("td")[1].innerHTML;
        // 获取他爸的儿子节点 自杀式删除
        var flag = confirm("确定要驳回" + name + "吗？");
        // 确认和取消按钮提示框 返回是布尔类型
       if (flag) {
            
            // 获取他爸的儿子节点 自杀式删除
            tr.parentNode.removeChild(tr);
        }
        /*
         点击超链接会跳转页面(默认行为)
         当不希望出现默认行为可以在响应函数后 return false; 消除行为
         this作为点击
         */
        return false;
    }
function delA2() {

    // 获取他的爷爷节点
    var tr = this.parentNode.parentNode;
    // 获取员工姓名
    var name = tr.getElementsByTagName("td")[1].innerHTML;
    // 获取他爸的儿子节点 自杀式删除
    var flag = confirm("确定要通过" + name + "吗？");
    // 确认和取消按钮提示框 返回是布尔类型
    if (flag) {

        // 获取他爸的儿子节点 自杀式删除
        tr.parentNode.removeChild(tr);
    }
    /*
     点击超链接会跳转页面(默认行为)
     当不希望出现默认行为可以在响应函数后 return false; 消除行为
     this作为点击
     */
    return false;
}

    // 点击一个连接后删除一个员工信息
    // 获取所有的按钮
    var del = document.getElementsByClassName("del");
    // 获取所有的按钮
        var del2 = document.getElementsByClassName("del2");
    // 为每一个超链接都绑定一个单击相应函数
    for (var i = 0; i < del.length; i++) {
        /*
            for循环会在页面加载完成之后立即执行
            而响应函数会在超链接被点击时才执行
            当响应函数执行时，for循环早已执行完毕。
        */
        del[i].onclick = delA;
    }
    for (var i = 0; i < del2.length; i++) {
            /*
                for循环会在页面加载完成之后立即执行
                而响应函数会在超链接被点击时才执行
                当响应函数执行时，for循环早已执行完毕。
            */
            del2[i].onclick = delA2;
        }