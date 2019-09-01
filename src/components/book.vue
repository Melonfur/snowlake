<template>
    <div>
    <h1>book</h1>
    <p>简易结构：A Breif History of Time/Miser/divine comedy/Resurrection</p>
    <el-container>
            <el-container>
                <el-aside width="200px">
                  <li v-for="(item,index) in book" :key=index>
                    <router-link :to='{name:item.name}'><span class='el-icon-reading'></span><span>{{item.name}}</span></router-link>
                  </li>
                </el-aside>
                <el-main>
                  <router-view></router-view>
                </el-main>
            </el-container>
    </el-container>
    </div>
    
</template>
<script>
    export default {
        data(){
          return {
            book:[
              {name:'A Breif History of Time',author:'Stephen Hawking'},
              {name:'Miser',author:'Molière'},
              {name:'Resurrection',author:'Leo Tolstoy'},
              {name:'Divine Comedy',author:'Dante Alighieri'}
            ]
          }
        }
    }
</script>
<style scoped lang="less">
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    
   
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    
      li{
        list-style:none;
        margin:5px 2px;
        a{
          cursor:pointer;
          text-decoration:none;
        }
      }
  }
</style>