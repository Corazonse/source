// 分線程代碼 不能更新界面 看不到window
// 分线程中的全局对象不再是window
function fn(n) {
    if (n == 0) {
        return 0
    }
    return n <= 2 && n > 0 ? 1 : fn(n - 1) + fn(n - 2)
}

console.log(this)

var onmessage = function (event) {
    var number = event.data
    var x = number + 1
    console.log('分线程接收到主线程发送的数据：' + x)
    var result = fn(number)
    postMessage(result)
    console.log("分线程向主线程返回数据" + result)
}