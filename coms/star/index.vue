<template>
    <div class="flex box">
        <div v-for="item in ['一','二','三','四','五','六', '日']" :key="item">
            {{item}}
        </div>
    </div>
</template>

<style lang="less" scoped>
    .box{
        background-color: #fff;
        box-shadow: inset 0px -1px 1px -1px #dbdbdb;
        padding-bottom: 10px;
        >div{
            width: 100%;
            text-align: center;
        }
    }
</style>

