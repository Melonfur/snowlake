<template>
    <div id="miser">
        <h3>Miser<small>--Molière</small></h3>
        <div>
            <li v-for="(item,index) in acts" :key=index>
                {{item.act}}
                    <div>
                        <li v-for="(a,i) in item.content" :key=i>
                            {{a}}
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
                acts:[
                    {act:'actI',content:['第一场','第二场','第三场','第四场','第五场','第六场','第七场','第八场','第九场','第十场']},
                    {act:'actII',content:['第一场','第二场','第三场','第四场','第五场','第六场']},
                    {act:'actIII',content:['第一场','第二场','第三场','第四场','第五场','第六场','第七场','第八场','第九场','第十场',
                                          '第十一场','第十二场','第十三场','第十四场','第十五场']},
                    {act:'actIV',content:['第一场','第二场','第三场','第四场','第五场','第六场','第七场']},
                    {act:'actV',content:['第一场','第二场','第三场','第四场','第五场','第六场']}
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    #miser{
        li{
            list-style:none;
        }
        div{
            margin-left:50px;
        }
    }
</style>