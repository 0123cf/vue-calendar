// 是否润年
var getMaxY = y =>  Boolean(
	y % 4 ==0 && y % 100 != 0 || y % 400==0
)
var getAugNum = n => getMaxY(n) ? 29 : 28
// --获取年对应的月份
var getMothNum = y => ([ 31, getAugNum(y), 31, 30,  31, 30, 31,31, 30, 31, 30, 31 ])
var mothZh = ['一','二','三','四','五','六','七','八','九','十','十一','十二'].map(e => e + '月')

// ----计算星期---
// 计算月份代码
let getMothCode = isR => isR ? '622503514624'.split('') : '521503514624'.split('')
// 计算年的代码
let getYearCode = a => {
    a += ''
    let y = + a.substr(a.length - 2, a.length - 1)
    return ((y / 4 + y) | 0) % 7
}
// --获取今天的星期
let getStarNV = (y, m, d) => {
    let mc = +getMothCode(getMaxY(y))[m - 1]
    let yc = getYearCode(y)
    return (d + mc + yc) % 7 
}

// 获取这个月的7*5列表
let getMothList = (year, month, star) => {
    let mn = getMothNum(year)[month - 1]
    let arr = new Array(35)
        .fill('')
        .map((_, i) => i - star + 2)
        .map(e => 
            (e > 0 && e <= mn)
            ? ({
                timev: `${year}/${month}/${e}`,
                v: e 
            })
            : ({
                timev: false, v: false
            })
        )
    return arr
}

let getMothName = (m, y) => {
    return !y ? mothZh[m - 1] : `${y}年${m}月`
}

export default  {
    getMothList,
    getMothName,
    getStarNV,
}

// console.log(getMothNum(year))
// console.log(getStarNV(2018, 8, 16))
// console.log(getStarNV(year, month, 1))