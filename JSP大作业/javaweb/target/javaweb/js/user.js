 function delA() {

        // 获取他的爷爷节点
        var tr = this.parentNode.parentNode;
        // 获取姓名
        var name = tr.getElementsByTagName("td")[1].innerHTML;
        // 获取他爸的儿子节点 自杀式删除
        var flag = confirm("确定要删除" + name + "吗？");
        // 确认和取消按钮提示框 返回是布尔类型

        if (flag) {
            tr.parentNode.removeChild(tr);
        }

        return false;
    }
    var del = document.getElementsByClassName("del");

    for (var i = 0; i < del.length; i++) {


        del[i].onclick = delA;
    }

