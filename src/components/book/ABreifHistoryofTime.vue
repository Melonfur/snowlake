<template>
    <div>
        <h3>A Breif History of Time<small>--Stephen Hawking</small></h3>
        <div>
            <p v-for='(item,index) in chapters' :key=index>{{item.chapter}}--{{item.content}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                chapters:[
                {chapter:'前言',content:'前言'},
                {chapter:'第一章',content:'我们的宇宙图像'},
                {chapter:'第二章',content:'空间和时间'},
                {chapter:'第三章',content:'膨胀的宇宙'},
                {chapter:'第四章',content:'不确定性原理'},
                {chapter:'第五章',content:'基本粒子和自然的力'},
                {chapter:'第六章',content:'黑洞'},
                {chapter:'第七章',content:'黑洞不是这么黑的'},
                {chapter:'第八章',content:'宇宙的起源和命运'},
                {chapter:'第九章',content:'时间箭头'},
                {chapter:'第十章',content:'虫洞和时间旅行'},
                {chapter:'第十一章',content:'物理学的统一'},
                {chapter:'第十二章',content:'结论'}
                ]
            }
        }
    }
</script>
<style lang="less" scoped>

</style>