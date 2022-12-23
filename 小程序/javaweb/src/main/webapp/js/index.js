/*
    绑定中左列表的按钮事件使其切换 iframe
*/
let ifa = document.getElementById("ifa")
let btnUser = document.getElementById('btn-user')
let btnPost = document.getElementById('btn-post')
let btnCheck = document.getElementById('btn-check')
let urlValue = encodeURI(encodeURI("user.jsp"))
let urlValue2 = encodeURI(encodeURI("post.jsp"))
let urlValue3 = encodeURI(encodeURI("check.jsp"))
btnUser.onclick = function(){
//    console.log("你好")
    $(ifa).attr('src',urlValue)
}
btnPost.onclick = function(){
//    console.log("你好2")
    $(ifa).attr('src',urlValue2)
}
btnCheck.onclick = function(){
//    console.log("你好3")
    $(ifa).attr('src',urlValue3)
}

