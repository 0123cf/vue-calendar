import InitData from './initData'
import InitFunc from './initFunc'
import StarView from '../coms/star/index.vue'

export default () => ({
    name: 'calendar',
    props: ['nowD', 'cb', 'open'],
    data: InitData,
    components: {
        StarView,
    },
    watch: {
        nowD(val){
            this.nowD = val
        },
        open(val){
            this.clear()
            this.open = val
            this.init()
        }
    },
    created() {
        this.init()
    },
    mounted() {
        
    },
    beforeDestroy() {
    },
    methods: {
        //初始化
        init: InitFunc,
        siteTouch(e){
            let target = e.target
            // console.log(target) 
            let timev = target.getAttribute('data-clickTg')
            let timeVal = timev.replace(/\//g, '-')
            if(!timev){
                return
            }
            if(+new Date(timev) > +new Date(this.nowTimeStr)){
                return
            }
            let data = new Date(timev)
            // console.log(timev)
            // console.log(data)

            if(!this.startTime && !this.endTime){
                this.startTime = timeVal
                this.startTime2 = timev
                return
            }
            if(this.startTime && new Date(this.startTime) > +data){
                this.startTime = timeVal
                this.startTime2 = timev
                return
            }
            if(this.startTime && !this.endTime){
                this.endTime = timeVal
                this.endTime2 = timev
                return
            }
            // 如果满了重置
            if(this.startTime && this.endTime){
                this.startTime = timeVal
                this.endTime = ''

                this.startTime2 = timev
                this.endTime2 = ''
                return
            }
            
        },
        isTimeCenter(a, b, v){
            return a && b && new Date(v) > new Date(a) && new Date(v) < new Date(b)
        },
        clearOp(){
            if(!this.startTime || !this.endTime){
                return
            }
            this.clear()
        },
        clear(){
            this.startTime = ''
            this.startTime2 = ''
            this.endTime = ''
            this.endTime2 = ''
        },
        success(){
            if(!this.startTime || !this.endTime){
                return
            }
            // this.open = false
            this.cb && this.cb(this.startTime, this.endTime)
        }
    }
})