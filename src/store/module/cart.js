import shop from '../shop'
import localStorage from '@/localStorage/localStorage'
const state={
    cart:[]
}
const getters={
    //总价格
    total(state){
        return state.cart.reduce(
            function(all,item){
               return all+item.p*item.quantity
            },0)
    }
}
const mutations={
    //购物车的物品添加
    add(state,p){
        const n=shop.find(item=>item.name==p.product.name)
            state.cart.push({
                fruit:n.name,
                p:n.price,
                quantity:p.val
            })
    },
    //input数量（减少购物车商品数量）
    increment(state,p){
        const c=state.cart.find((item)=>item.fruit==p.product.name);
              c.quantity=parseInt(c.quantity)+parseInt(p.val)
    },
    //购物车商品数量显示
    remove(state,p){
        const c=state.cart.find((item)=>item.fruit==p.item.fruit)
                c.quantity=parseInt(c.quantity)-parseInt(p.v)
    }
    
}
const actions={
    
    add({commit,state,rootState},p){
        const cart=state.cart.find((item)=>item.fruit==p.product.name)
        const s=rootState.product.shop.find((item)=>item.name==p.product.name)
        if (s.quantity>=p.val&&p.val>0){
            if (!cart) {
                commit('add',p)
            }else{
                commit('increment',p)
            }
            commit('product/decrement',p,{ root:true })
            localStorage.set('store',{c:state.cart,s:rootState.product.shop})
        }
        
    },
    remove({commit,rootState},p){
        const c=state.cart.find((item)=>item.fruit==p.item.fruit)
        if (c.quantity>=p.v){
            commit('remove',p)
            commit('product/increment',p,{root:true})
        }
        localStorage.set('store',{c:state.cart,s:rootState.product.shop})
    }

}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}