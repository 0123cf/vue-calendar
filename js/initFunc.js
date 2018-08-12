import ComDate from './comDate'

export default function(){
    if(!this.open){
        return
    }
    let time = this.nowD
    
    // 当前时间的基本数据组成部分
    var year = time.getFullYear(time)
    var month = time.getMonth(time) + 1
    var date = time.getDate(time)
    
    let list = []

    // 添加月份
    let addList = (y, m, isNowYear) => {
        list.push({
            name: ComDate.getMothName(m, isNowYear ? y : false),
            m: ComDate.getMothList(y, m, ComDate.getStarNV(y, m, 1))
        })
    }

    new Array(13).fill('').forEach((_, i) => {
        let m = month - i 
        let y
        let isNowYear
        // 今年
        if(m > 0){
            y = year
            isNowYear = false
        }else{
            // 去年
            m = 12 + m
            y = year - 1
            isNowYear = true
        }

        addList(y, m, isNowYear)              
    })

    this.list = list.reverse()
    this.nowTimeStr = `${year}/${month}/${date}`

    setTimeout(() => {
        document.querySelector('.noew-time-box').scrollIntoView()
    }, 14)
}