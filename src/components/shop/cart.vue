<template>
    <div id="cart">
        <h3>购物车</h3>
        <ul id="cartList">
        <transition-group name="show">
        <li v-for="item in cart" :key="item.fruit" v-show='item.quantity'>
            <span><a>名称:{{item.fruit}}</a><a>数量:{{item.quantity}}</a></span>
            <input type="number" min=1 :max=item.quantity  value=1 :id='item.fruit+"c"'>
            <button @click='minus(item)' :disabled='!item.quantity'>减</button>
        </li>
        </transition-group>
        </ul>
        <transition name="total">
        <p v-show='total'>总价格:{{total}}<button @click="pay">支付</button></p>
        </transition>
        <div id="paybox">
                <div id="pay">
                    <span class="close" @click="close">&times;</span>
                    <h3>总共支付：{{total}}</h3>
                    <p>请选择您的支付方式：</p>
                    <div class="box"><img src='@/assets/weixin.png'>微信</div>
                    <div class="box"><img src='@/assets/zhifubao.png'>支付宝</div>
                    <div class="box"><img src='@/assets/unionPay.png' class="unionpay">银联卡</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                    <div class="box">其他</div>
                </div>
        </div>
    </div>
</template>
<script>
 import {mapState,mapGetters,mapActions} from 'vuex'
 export default {
     name:'cart',
     data(){
         return {
             
         }
     },
     computed:{
         ...mapState('cart',
             ['cart']
         ),
         ...mapGetters('cart',
            ['total']
         )
     },
     methods:{
        ...mapActions('cart',
            ['remove']
        ),
        minus(item){
            var input=document.getElementById(item.fruit+"c");
            var v=input.value;
                this.remove({item,v})
        },
        pay(){
            var pay=document.getElementById('paybox')
                pay.style.display='block';
        },
        close(){
            var pay=document.getElementById('paybox')
                pay.style.display='none';
        }
     },
     created(){
       
     },
     beforeDestroyed(){
         
     }
}
</script>
<style scoped lang="less">
#cart {
    input[type="number"]{
        width:50px;
    }
    #cartList{
        counter-reset:count;
        li{
            list-style:none;
            span{
                a{
                    display:inline-block;
                    width:100px;
                }
                display:inline-block;
                width:200px;
            }
        }
        li::before{
            counter-increment:count;
            content:counter(count)":"
        }
        
    }
    button{
            margin-left:20px;
        }
    #paybox{
        display:none;
        position:absolute;
        width:100%;
        height:100%;
        background:#eee;
        top:0;
        left:0;
        opacity:0.8;
        #pay{
            width:400px;
            height:400px;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            background:green;
            h3{
                padding-left:15px;;
            }
            p{
                padding-left:15px;;
            }
            .close{
                display:inline-block;
                position:absolute;
                right:4%;
                width:25px;
                text-align:center;
                color:orange;
                font-size:38px;
                cursor:pointer;
            }
            .box{
                display:inline-block;
                width:45%;
                background:cornflowerblue;
                margin:10px;
                text-align:center;
                cursor:pointer;
                img{
                    width:20px;
                    vertical-align:bottom;
                    
                }
                .unionpay{
                        vertical-align:baseline;
                    }
            }
        }
    }
    
}
.show-enter-active,.total-enter-active{
   transition:all 2s;
}
.show-enter,.total-enter{
    opacity:0;
    transform:translateX(-30px);
}
.show-enter-to,.total-enter-to{
    opacity:1;
}
.show-leave-active,.total-leave-active{
    transition:all 2s;
}
.show-leave-to,.total-leave-to{
    transform:translateX(30px);
    opacity:0;
}


.num-enter-active{
    transition:all 1s;
    animation:num-move 1s;
}
.num-leave-active{
    transition:all 1s;
    animation:num-move 1s reverse ;
    position:absolute;
}
/* for transition */
.num-enter{
    opacity:0
}
.num-enter-to,.num-leave{
    opacity:1
}
.num-leave-to{
    opacity:0
}
.num-move{
    transition:transform 1s;
}
/* for animation */
@keyframes num-move {
    0% {
        opacity:1;
        transform:scale(0);
        
    }
    50%{
        opacity:0;
        transform:scale(1.5);
    }
    100% {
        opacity:1;
        transform:scale(1);
    }
}
</style>