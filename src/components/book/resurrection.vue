<template>
    <div id="resurrenction">
        <h3>Resurrenction<small>--Leo Tolstoy</small></h3>
        <div>
            <li v-for="(item,index) in parts" :key=index>
                {{item.part}}
            </li>
        </div>
    </div>
</template>
<script>
export default {
        data(){
            return {
                parts:[
                    {part:'partI'},
                    {part:'partII'},
                    {part:'partIII'}
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