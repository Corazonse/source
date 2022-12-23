 function delA() {

        // 获取他的爷爷节点
        var tr = this.parentNode.parentNode;
        // 获取员工姓名
        var name = tr.getElementsByTagName("td")[1].innerHTML;
        // 获取他爸的儿子节点 自杀式删除
        var flag = confirm("确定要删除" + name + "吗？");
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
    // 获取所有的超链接
    var del = document.getElementsByClassName("del");
    // 为每一个超链接都绑定一个单击相应函数
    for (var i = 0; i < del.length; i++) {
        /*
            for循环会在页面加载完成之后立即执行
            而响应函数会在超链接被点击时才执行
            当响应函数执行时，for循环早已执行完毕。
        */
        del[i].onclick = delA;
    }

//    // 为了点击按钮绑定能提交的单机响应函数
//    var addEmpButton = document.getElementById("addEmpButton");
//    addEmpButton.onclick = function () {
//        // 获取输入框的值
//        var emp = document.getElementById("emp").value;
//        var em = document.getElementById("em").value;
//        var sal = document.getElementById("sal").value;
//        // 获取表格 为表格添加新的元素
//        var table = document.getElementById("table");
//        var body2 = document.createElement("tbody");
//        var name2 = document.createElement("tr");
//        var name3 = document.createElement("th");
//        // var email2 = document.createElement("tr");
//        var email3 = document.createElement("th");
//        // var salary2 = document.createElement("tr");
//        var salary3 = document.createElement("th");
//        var a2 = document.createElement("th");
//        var a3 = document.createElement("a");
//        a3.href = "javascript:;";
//        a3.onclick = delA;
//        // 创建文本节点
//        var nameText = document.createTextNode(emp);
//        var emailText = document.createTextNode(em);
//        var salText = document.createTextNode(sal);
//        var aText = document.createTextNode("Delete");
//        table.appendChild(body2).appendChild(name2).appendChild(name3).appendChild(nameText);
//        table.appendChild(body2).appendChild(name2).appendChild(email3).appendChild(emailText);
//        table.appendChild(body2).appendChild(name2).appendChild(salary3).appendChild(salText);
//        table.appendChild(body2).appendChild(name2).appendChild(a2).appendChild(a3).appendChild(aText);
//
//    }
