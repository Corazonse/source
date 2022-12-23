//主模块

(function (){
    requirejs.config({
        // baseURL: ''   设 基本路径
        paths:{//配置路径
            dataService: './modules/DataService',
            alerter:'./modules/alerter'
            // jquery: '路径'  必须小写

        },// 引入 angular 要zai单独配置
        shim : {
            angular:{
                exports: 'angular'
            }
        }
    })

    requirejs(['alerter'],function (alerter){
        alerter.MSG();
    })
})