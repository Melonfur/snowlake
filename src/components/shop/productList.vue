<template>
  <div id="list">
    <h3>商品列表</h3>
    <ul>
    <li v-for="(product,index) in shop" :key="index">
      <span>名称:<a>{{product.name}}</a><a>价格:{{product.price}}</a><a>数量:{{product.quantity}}</a></span>
      <input type="number" min=1 :max=product.quantity  value=1 :id=product.name>
      <button @click="plus(product)" :disabled='!product.quantity'>添加</button>
    </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  name: 'productList',
  data(){
    return {
      val:[]
    }
  },
  computed:{
    ...mapState('product',
      ['shop']
    )
  },
  props: {

  },
  methods:{
    ...mapActions({
        add:'cart/add',
        getShop:'product/getShop'
    }),
    plus(product){
       var input=document.getElementById(product.name);
       var val=input.value
           this.add({product,val})
    }
  },
  created(){
        this.getShop()//this.$store.dispatch('product/getShop') 
  },
  beforeDestroy(){
  
  }

}
</script>


<style scoped lang="less">
#list{
  input[type="number"]{
        width:50px;
    }
  ul{
    counter-reset:count;
    li{
      list-style:none;
      a{
        display:inline-block;
        width:90px;
      }
      span{
        display:inline-block;
        width:400px;
      }
    }
    li::before{
      counter-increment:count;
      content:counter(count)":";
      display:inline-block;
    }
  }
  
}
</style>
