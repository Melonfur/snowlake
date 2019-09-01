<template>
    <div id="miser">
        <h3>Miser<small>--Molière</small></h3>
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
                    {label:'actI',
                        children:[
                            {label:'第一场'},{label:'第二场'},{label:'第三场'},{label:'第四场'},
                            {label:'第五场'},{label:'第六场'},{label:'第七场'},{label:'第八场'},
                            {label:'第九场'},{label:'第十场'}
                        ]
                    },
                    {label:'actII',
                        children:[
                            {label:'第一场'},{label:'第二场'},{label:'第三场'},{label:'第四场'},
                            {label:'第五场'},{label:'第六场'}
                        ]
                    },
                    {label:'actIII',
                        children:[
                            {label:'第一场'},{label:'第二场'},{label:'第三场'},{label:'第四场'},
                            {label:'第五场'},{label:'第六场'},{label:'第七场'},{label:'第八场'},
                            {label:'第九场'},{label:'第十场'},{label:'第十一场'},{label:'第十二场'},
                            {label:'第十三场'},{label:'第十四场'},{label:'第十五场'}
                        ]
                    },
                    {label:'actIV',
                        children:[
                            {label:'第一场'},{label:'第二场'},{label:'第三场'},{label:'第四场'},
                            {label:'第五场'},{label:'第六场'},{label:'第七场'}
                        ]
                    },
                    {label:'actV',
                        children:[
                            {label:'第一场'},{label:'第二场'},{label:'第三场'},{label:'第四场'},
                            {label:'第五场'},{label:'第六场'}
                        ]
                    }
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
        
    }
</style>