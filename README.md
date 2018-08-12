# calendar
vue-calendar ，vue日历连选

日期这玩意一般需要自定义， 之所以写这个呢， 就是因为这是一个纯js的vue组件， 可以很方便的用在别的地方， 7*5的数组结构， 然后渲染即可， 其他的功能自定义啦~~

### Install
下载完整的代码， 放到VUE src的目录下， 比如/src/com/view里面

### USE
---main.js
引入插件， 比如
import Calendar from './com/view/calendar'

Vue.use(Calendar)

---xx.vue
-------template
```
<div v-on:click="isOpTimes = true" class="-icon-calendar">日期icon</div>
<calendar :nowD="new Date()" :open="isOpTimes" :cb="onFilter" />
```
-------script
isOpTimes: false
onFilter(start, end){
  console.log(start, end) // y-m-d, y-m-d
  this.isOpTimes = false
}

### API
nowD  这个是开始的时间， 一般都是new Date()
open  这个是控制开关
cb    相当于大家熟悉的 :change

### 效果图

![](https://upload-images.jianshu.io/upload_images/6759456-0384632a4193ba0e.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/6759456-381b9773db0b4daa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 源码解析
-- 没写
### 其他
样式有点丑， 因为不方便放公司的效果， 所以，style文件是书生随便写的。
y-m-d 格式其实不是很好， 但是因为大家都这么做， 所以我也这样返回， 再new Date的时候， 记得把他改 y/m/d  因为safari无法解析
...
