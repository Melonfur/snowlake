<template>
<div id="shop">
    <h1>Fruit Shop</h1>
    <P>fruit</P>
    <hr>
    <productList></productList>
    <hr>
    <cart></cart>
</div>

</template>
<script>
import productList from './shop/productList.vue'
import cart        from './shop/cart.vue'

export default {
    components:{
        productList,
        cart
    }
}
</script>
<style scoped lang="less">

</style>