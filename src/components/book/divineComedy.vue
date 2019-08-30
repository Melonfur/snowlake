<template>
    <div id="dc">
        <h3>DivineComedy<small>--Dante</small></h3>
        <div>
            <li v-for="(item,index) in chapters" :key=index>
                {{item.chapter}}
                    <div class="section">
                        <li v-for='(s,i) in item.content' :key=i>
                            {{s.section}}
                        </li>
                    </div>
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                chapters:[
                    {chapter:'序章',content:null},
                    {chapter:'地狱篇',content:[
                        {section:'第一首'},{section:'第二首'},{section:'第三首'},
                        {section:'第四首'},{section:'第五首'},{section:'第六首'},
                        {section:'第七首'},{section:'第八首'},{section:'第九首'},
                        {section:'第十首'},{section:'第十一首'},{section:'第十二首'},
                        {section:'第十三首'},{section:'第十四首'},{section:'第十五首'},
                        {section:'第十六首'},{section:'第十七首'},{section:'第十八首'},
                        {section:'第十九首'},{section:'第二十首'},{section:'第二十一首'},
                        {section:'第二十二首'},{section:'第二十三首'},{section:'第二十四首'},
                        {section:'第二十五首'},{section:'第二十六首'},{section:'第二十七首'},
                        {section:'第二十八首'},{section:'第二十九首'},{section:'第三十首'},
                        {section:'第三十一首'},{section:'第三十二首'},{section:'第三十三首'}
                    ]},
                    {chapter:'炼狱篇',content:[
                        {section:'第一首'},{section:'第二首'},{section:'第三首'},
                        {section:'第四首'},{section:'第五首'},{section:'第六首'},
                        {section:'第七首'},{section:'第八首'},{section:'第九首'},
                        {section:'第十首'},{section:'第十一首'},{section:'第十二首'},
                        {section:'第十三首'},{section:'第十四首'},{section:'第十五首'},
                        {section:'第十六首'},{section:'第十七首'},{section:'第十八首'},
                        {section:'第十九首'},{section:'第二十首'},{section:'第二十一首'},
                        {section:'第二十二首'},{section:'第二十三首'},{section:'第二十四首'},
                        {section:'第二十五首'},{section:'第二十六首'},{section:'第二十七首'},
                        {section:'第二十八首'},{section:'第二十九首'},{section:'第三十首'},
                        {section:'第三十一首'},{section:'第三十二首'},{section:'第三十三首'}
                    ]},
                    {chapter:'天堂篇',content:[
                        {section:'第一首'},{section:'第二首'},{section:'第三首'},
                        {section:'第四首'},{section:'第五首'},{section:'第六首'},
                        {section:'第七首'},{section:'第八首'},{section:'第九首'},
                        {section:'第十首'},{section:'第十一首'},{section:'第十二首'},
                        {section:'第十三首'},{section:'第十四首'},{section:'第十五首'},
                        {section:'第十六首'},{section:'第十七首'},{section:'第十八首'},
                        {section:'第十九首'},{section:'第二十首'},{section:'第二十一首'},
                        {section:'第二十二首'},{section:'第二十三首'},{section:'第二十四首'},
                        {section:'第二十五首'},{section:'第二十六首'},{section:'第二十七首'},
                        {section:'第二十八首'},{section:'第二十九首'},{section:'第三十首'},
                        {section:'第三十一首'},{section:'第三十二首'},{section:'第三十三首'} 
                    ]}
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
        .section{
            margin-left:50px;
        }
    }
</style>