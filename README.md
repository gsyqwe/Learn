# learn
> A Vue.js project

##### 1.学习使用了form-create在Try_Form_Creator中

form-create可以接受一个JSONArray的方法自动生成前端组件

#### 2.学习使用validate

邮箱验证方式:/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
<br>
汉字的验证方式：/^[\u2E80-\u9FFF]+$/
<br>
验证英文字符串:/^[a-z-A-Z]+$/
<br>
验证中文与英文与数字字符串:/^[a-z-A-Z\u4e00-\u9fa5]+$/
<br>
在form-create中的写法
validate:[{<br>
  pattern:/^[\u2E80-\u9FFF]+$/,<br>
  message:"输入",<br>
  trigger:"blur"
}]

#### 3.对单独Input框进行验证的方法在Try_Validator

1.对单独的input框使用<span>的提示框进行验证与提示
<br>
2.使用Form与FormItem进行验证，在FormItem使用props=""来表明使用的唯一的标识
<br>
3.在Form中使用:rules="" 来表明使用的规则
<br>
4.在return外面写const validator=(rule,value,callback)=>{
<br> 填写具体的验证方法,使用callback来显示验证信息,并可以与后端交互}


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
