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

#### 4.增加布局方式

1.使用absolute布局时，每次遇到absolute时，页面都会重新进行渲染，导致对浏览器的性能负担增大，
所以一般情况下不使用absolute布局，只有在布局比较复杂，且横向布局较多时使用absolute
<br>
2.能使用css解决的布局的问题，尽量不使用js解决，因为js函数会增大浏览器负担
<br>
3.增加了实现三列液态布局：不定高；左右两列定宽（eg: 200px， 150px），中间列可自适应宽度。
的方法，在example中写了几种实现方法
<br>
4.增加了实现栅格布局的方法,在Try_Grids中
<br>


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
