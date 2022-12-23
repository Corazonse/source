// buffer 缓冲区 --服务器和用户之间数据传输之前的缓冲区(内存)
//         buffer的结构和数组很像 操作的方法也和数组类似 专门存储二进制数据
//         使用buffer不许需要引入模块
//         弥补js数组的不足
//         js的数组不够强大图片音频之类的数据类型不行

let str = "hello 你好"
//创建buffer 将字符串转换为buffer
let buf = Buffer.from(str)

console.log(buf.toString())//把缓冲区的数据转换为字符串

//在buffer中存储的是二进制数据 计算机的所有的二进制都会以十六进制的形式显示 因为二进制太长
// buffer中每一个元素是范围是 00-ff 计算机 一个0 或者 一个1 我们称为 1位bit  8bit=1byte
// buffer中的元素占用内存的一个字节 三个字节一个汉字
console.log(buf)
console.log(buf.length)//占用内存的大小
console.log(str.length)//字符串的长度

//创建一个指定大小的buffer  buffer所有的构造函数都不推荐使用
let buf2 = new Buffer(1024)//创建一个1k的buffer
console.log(buf2.length)

//建议方法
let buf3 = Buffer.alloc(10)
//通过索引为操作buf的元素
buf3[1] = 88
buf3[0] = 0xaa //添加16进制
buf3[10] = 12//添加超过buf大小的不变  buffer大小一旦确定无法改变 实际是对底层连续内存的直接操作
buf3[2] = 555//如果数超多11111111 少过00000000 则仅截取后八位
console.log(buf3)
console.log(buf3.length)
//只要数字在控制台输出都是十进制
console.log(buf3[0])
console.log(buf3[0].toString(16))//转换为16进制的字符串

for (let i = 0; i < buf3.length; i++) {
    console.log(buf3[i])
}
// Buffer.allocUnsafe(size) 创建指定代销的buffer 但是buffer中可能包含敏感信息
//分配空间的时候不清除 原有内存的数据 所有有概率泄露原有这个内存的数据 但是效率高
let buf4 = Buffer.allocUnsafe(10)

console.log(buf4)

