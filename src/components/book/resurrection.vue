<template>
    <div id="resurrenction">
        <h3>Resurrenction<small>--Leo Tolstoy</small></h3>
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
                    {label:'partI',
                        children:[
                            {label:'chapte-1'},{label:'chapter-2'},{label:'chapter-3'},{label:'chapter-4'},{label:'chapte-5'},
                            {label:'chapte-6'},{label:'chapter-7'},{label:'chapter-8'},{label:'chapter-9'},{label:'chapte-10'},
                            {label:'chapte-11'},{label:'chapter-12'},{label:'chapter-13'},{label:'chapter-14'},{label:'chapte-15'},
                            {label:'chapte-16'},{label:'chapter-17'},{label:'chapter-18'},{label:'chapter-19'},{label:'chapte-20'},
                            {label:'chapte-21'},{label:'chapter-22'},{label:'chapter-23'},{label:'chapter-24'},{label:'chapte-25'},
                            {label:'chapte-26'},{label:'chapter-27'},{label:'chapter-28'},{label:'chapter-29'},{label:'chapte-30'},
                            {label:'chapte-31'},{label:'chapter-32'},{label:'chapter-33'},{label:'chapter-34'},{label:'chapte-35'},
                            {label:'chapte-36'},{label:'chapter-37'},{label:'chapter-38'},{label:'chapter-39'},{label:'chapte-40'},
                            {label:'chapte-41'},{label:'chapter-42'},{label:'chapter-43'},{label:'chapter-44'},{label:'chapte-45'},
                            {label:'chapte-46'},{label:'chapter-47'},{label:'chapter-48'},{label:'chapter-49'},{label:'chapte-50'},
                            {label:'chapte-51'},{label:'chapter-52'},{label:'chapter-53'},{label:'chapter-54'},{label:'chapte-55'},
                            {label:'chapte-56'},{label:'chapter-57'},{label:'chapter-58'},{label:'chapter-59'}
                        ]},
                    {label:'partII',
                        children:[
                            {label:'chapte-1'},{label:'chapter-2'},{label:'chapter-3'},{label:'chapter-4'},{label:'chapte-5'},
                            {label:'chapte-6'},{label:'chapter-7'},{label:'chapter-8'},{label:'chapter-9'},{label:'chapte-10'},
                            {label:'chapte-11'},{label:'chapter-12'},{label:'chapter-13'},{label:'chapter-14'},{label:'chapte-15'},
                            {label:'chapte-16'},{label:'chapter-17'},{label:'chapter-18'},{label:'chapter-19'},{label:'chapte-20'},
                            {label:'chapte-21'},{label:'chapter-22'},{label:'chapter-23'},{label:'chapter-24'},{label:'chapte-25'},
                            {label:'chapte-26'},{label:'chapter-27'},{label:'chapter-28'},{label:'chapter-29'},{label:'chapte-30'},
                            {label:'chapte-31'},{label:'chapter-32'},{label:'chapter-33'},{label:'chapter-34'},{label:'chapte-35'},
                            {label:'chapte-36'},{label:'chapter-37'},{label:'chapter-38'},{label:'chapter-39'},{label:'chapte-40'},
                            {label:'chapte-41'},{label:'chapter-42'}
                        ]
                    },
                    {label:'partIII',
                        children:[
                            {label:'chapte-1'},{label:'chapter-2'},{label:'chapter-3'},{label:'chapter-4'},{label:'chapte-5'},
                            {label:'chapte-6'},{label:'chapter-7'},{label:'chapter-8'},{label:'chapter-9'},{label:'chapte-10'},
                            {label:'chapte-11'},{label:'chapter-12'},{label:'chapter-13'},{label:'chapter-14'},{label:'chapte-15'},
                            {label:'chapte-16'},{label:'chapter-17'},{label:'chapter-18'},{label:'chapter-19'},{label:'chapte-20'},
                            {label:'chapte-21'},{label:'chapter-22'},{label:'chapter-23'},{label:'chapter-24'},{label:'chapte-25'},
                            {label:'chapte-26'},{label:'chapter-27'},{label:'chapter-28'}
                        ]
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    #resurrenction{
        li{
            list-style:none
        }
    }

</style>