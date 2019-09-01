<template>
    <div id="dc">
        <h3>DivineComedy<small>--Dante Alighieri</small></h3>
        <div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:[
                            {label:'地狱篇',
                                children:[
                                    {label:'第一首'},{label:'第二首'},{label:'第三首'},
                                    {label:'第四首'},{label:'第五首'},{label:'第六首'},
                                    {label:'第七首'},{label:'第八首'},{label:'第九首'},
                                    {label:'第十首'},{label:'第十一首'},{label:'第十二首'},
                                    {label:'第十三首'},{label:'第十四首'},{label:'第十五首'},
                                    {label:'第十六首'},{label:'第十七首'},{label:'第十八首'},
                                    {label:'第十九首'},{label:'第二十首'},{label:'第二十一首'},
                                    {label:'第二十二首'},{label:'第二十三首'},{label:'第二十四首'},
                                    {label:'第二十五首'},{label:'第二十六首'},{label:'第二十七首'},
                                    {label:'第二十八首'},{label:'第二十九首'},{label:'第三十首'},
                                    {label:'第三十一首'},{label:'第三十二首'},{label:'第三十三首'}
                                ]
                            },
                            {label:'炼狱篇',
                                children:[
                                    {label:'第一首'},{label:'第二首'},{label:'第三首'},
                                    {label:'第四首'},{label:'第五首'},{label:'第六首'},
                                    {label:'第七首'},{label:'第八首'},{label:'第九首'},
                                    {label:'第十首'},{label:'第十一首'},{label:'第十二首'},
                                    {label:'第十三首'},{label:'第十四首'},{label:'第十五首'},
                                    {label:'第十六首'},{label:'第十七首'},{label:'第十八首'},
                                    {label:'第十九首'},{label:'第二十首'},{label:'第二十一首'},
                                    {label:'第二十二首'},{label:'第二十三首'},{label:'第二十四首'},
                                    {label:'第二十五首'},{label:'第二十六首'},{label:'第二十七首'},
                                    {label:'第二十八首'},{label:'第二十九首'},{label:'第三十首'},
                                    {label:'第三十一首'},{label:'第三十二首'},{label:'第三十三首'}
                                ]
                            },
                            {label:'天堂篇',
                                children:[
                                    {label:'第一首'},{label:'第二首'},{label:'第三首'},
                                    {label:'第四首'},{label:'第五首'},{label:'第六首'},
                                    {label:'第七首'},{label:'第八首'},{label:'第九首'},
                                    {label:'第十首'},{label:'第十一首'},{label:'第十二首'},
                                    {label:'第十三首'},{label:'第十四首'},{label:'第十五首'},
                                    {label:'第十六首'},{label:'第十七首'},{label:'第十八首'},
                                    {label:'第十九首'},{label:'第二十首'},{label:'第二十一首'},
                                    {label:'第二十二首'},{label:'第二十三首'},{label:'第二十四首'},
                                    {label:'第二十五首'},{label:'第二十六首'},{label:'第二十七首'},
                                    {label:'第二十八首'},{label:'第二十九首'},{label:'第三十首'},
                                    {label:'第三十一首'},{label:'第三十二首'},{label:'第三十三首'}
                                ]
                            }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    #dc{
        li{
            list-style:none;
        }
        
    }
</style>