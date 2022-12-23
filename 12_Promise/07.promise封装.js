//把promise 封装成一个类
// class Promise{
//     constructor(executor) {
//     }
//     then()方法
//    
// }




/*手写promise*/
function Promise(executor) {
    // 添加默认属性
    this.PromiseSate = 'pending'
    this.PromiseResult = null
    this.callback = []
    //保存实例对象的 this 的值
    const self = this

    //声明resolve  和 reject 并且放进参数
    function resolve(data) {
        //    promise状态只能修改一次 改变状态是否被改过 改过就不改了
        if (self.PromiseSate !== 'pending') return
        // 1.修改状态 promiseState  
        // 2.设置对象结果值 promiseResult
        self.PromiseSate = 'fulfilled'
        self.PromiseResult = data

        //调用成功的回调函数 并且遍历
        setTimeout(()=>{
            self.callback.forEach(item => {
                item.onResolve(data)
            })
        })
    }

    function reject(data) {
        //    promise状态只能修改一次 改变状态是否被改过 改过就不改了
        if (self.PromiseSate !== 'pending') return
        // 1.修改状态 promiseState  
        // 2.设置对象结果值 promiseResult
        self.PromiseSate = 'reject'
        self.PromiseResult = data
        //调用失败的回调函数
        setTimeout(() => {
            self.callback.forEach(item => {
                item.onReject(data)
            })
        })


    }

    try {
        //    同步调用 执行器函数
        executor(resolve, reject)
    } catch (e) {
        //    修改promise状态为失败
        reject(e)
    }

}

//添加then方法 
Promise.prototype.then = function (onResolve, onReject) {
    const self = this
    if (typeof onReject !== 'function') {
        onReject = reason => {
            throw reason
        }
    }
    return new Promise((resolve, reject) => {
            //封装回调函数
            function callBack(type) {
                try {
                    let result = type(self.PromiseResult)
                    //    判断
                    if (result instanceof Promise) {
                        //    如果是一个 promise类型对象 递归
                        result.then(v => {
                            resolve()
                        }, r => {
                            reject()
                        })
                    } else {
                        //    结果对象为成功
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            //判断成功或者失败的回调函数条件
            if (this.PromiseSate === 'fulfilled') {
                //加个定时器 满足异步特性
                //调用回调函数
                setTimeout(() => {
                    callBack(onResolve)
                })

            }
            if (this.PromiseSate === 'reject') {
                //调用回调函数
                setTimeout(() => {
                    callBack(onReject)
                })

            }
            //    判断pending的状态
            if (this.PromiseSate === 'pending') {
                // 保存回调函数 因为当前状态不确定
                this.callback.push({
                    onResolve: function () {
                        try {
                            let result = onResolve(self.PromiseResult)
                            //    判断状态
                            if (result instanceof Promise) {
                                result.then(v => {
                                        resolve(v)
                                    },
                                    r => {
                                        reject(r)
                                    })
                            }
                        } catch (e) {
                            reject(e)
                        }

                    },
                    onReject: function () {
                        onReject(self.PromiseResult)
                    }
                })
            }
        }
    )
}

//封装catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}
//添加 resolve 方法
//返回promise
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v)
            }, r => {
                reject(r)
            })
        } else {
            resolve(value)
        }
    })
}
//添加 reject 方法 返回的结果永远的失败
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}
//all 方法 数组 有一个失败就位失败 结果是第一个失败那个 item
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        //声明变量
        let count = 0;
        let arr = []
        // 遍历数组
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                //    每个 promise成功
                //    得知对象的状态是成功的
                count++
                //把成功的值传入到数组当中
                arr[i] = v
                if (count === promises.length) {
                    //修改状态
                    resolve(arr)
                }
            }, r => {
                reject(r)
            })
        }
    })
}

//添加race
Promise.race = function (promise) {
    return new Promise((resolve, reject) => {

        // 遍历数组
        for (let i = 0; i < promise.length; i++) {
            promise[i].then(v => {
                resolve(v)
            }, r => {
                reject(r)
            })
        }
    })
}