import shop from '../shop'
import localStorage from '@/localStorage/localStorage'
const state={
    shop:[]
}
const getters={
    
}
const mutations={
    //读取商品详情
    getShop(state){
                state.shop=shop

    },
    //列表商品数量减少
    decrement(state,p){
        const d=state.shop.find((item)=>item.name==p.product.name)
            d.quantity-=p.val;
        
        
    },
    //列表商品数量增加
    increment(state,p){
        const d=state.shop.find((item)=>item.name==p.item.fruit)
              d.quantity=parseInt(d.quantity)+parseInt(p.v)

    }
}
const actions={
    getShop({state,commit,rootState}){
        var add=localStorage.get('store');
        //修正LcocalStorage里数量不一致的问题
        var num=shop.every((item,index)=>{
         return parseInt(item.quantity)==parseInt(add.s[index].quantity)+parseInt(add.c[index].quantity)
        })
        if (num){
            if (add!==null){
                state.shop=add.s
                rootState.cart.cart=add.c
            }else{
                commit('getShop')
            }
            
       }else{
           commit('getShop')
        }
           
    }

}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}