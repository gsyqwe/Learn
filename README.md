# learn
> A Vue.js project
<br>
##### 1.学习使用了form-create在Try_Form_Creator中

form-create可以接受一个JSONArray的方法自动生成前端组件
<br>

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
}]<br>

#### 3.正常使用validate函数方法

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
