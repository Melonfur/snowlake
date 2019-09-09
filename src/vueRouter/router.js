import vue from 'vue'
import vueRouter from 'vue-router'
    import shop from '../components/shop.vue'
    import weather from '../components/weather.vue'
    import book from '../components/book.vue'
        import time from '../components/book/ABreifHistoryofTime.vue'
        import miser from '../components/book/miser.vue'
        import resurrection from '../components/book/resurrection.vue'
        import divineComedy from '../components/book/divineComedy.vue'
vue.use(vueRouter)

const routes=[
    {path:'/shop',component:shop,name:'shop'},
    {path:'/xhr',component:weather,name:'weather'},
    {path:'/book',component:book,name:'book',
        children:[
            {path:'time',component:time,name:'A Breif History of Time'},
            {path:'divineComedy',component:divineComedy,name:'Divine Comedy'},
            {path:'Miser',component:miser,name:'Miser'},
            {path:'Resurrection',component:resurrection,name:'Resurrection'},
            {path:'*',redirect:{name:'Miser'}}
        ]
    },
    {path:'*',redirect:null}//默认跳转，重定向
]
export default new vueRouter({
        mode:'history',
        base:'snowlake',
        routes
    }
)

