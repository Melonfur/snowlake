<template>
  <div id="app">
  <h1>demo</h1>
    <div>
      <ul>
        <li><router-link :to='{name:"shop"}'>shop</router-link></li>
        <li><router-link to='/book'>book</router-link></li>
      </ul>
    </div>
      <router-view></router-view>
      <hr>
      <router-view name="weather"></router-view>
  </div>
</template>

<script>


export default {
  
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="less" scoped>
#app{
  font-family:sans-serif;
  ul{
    list-style:none;
    li{
      display:inline-block;
      margin:0 5px;
    }
  }
  
}
</style>
