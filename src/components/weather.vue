<template>
    <div>
        <h1>Weather</h1>
        <p>XMLHttpRequest</p>
        <p>the weather forecast of Chengdu</p>
        <div id="xhr">
            <h3>{{text.city}}</h3>
            <li v-for="(item,index) in text.forecast" :key=index>
            {{item.date}}--{{item.fengli}}--{{item.fengxiang}}--{{item.high}}--{{item.low}}--{{item.type}}
            </li>
        </div>
        <button @click='xhr()'>XHR</button>
    </div>
    
</template>
<script>
    import Axios from 'axios'
    export default{
        data(){
            return {
                text:''
            }
        },
        methods:{
            xhr(){
                var url="https://www.apiopen.top/weatherApi?city=%E6%88%90%E9%83%BD";
                /*var xhr=new XMLHttpRequest(); //原生
                var x=document.getElementById('xhr')
                xhr.onreadystatechange=function(){
                        if (xhr.readyState==4&&xhr.status==200){
                        var t=JSON.parse(xhr.responseText).data.forecast
                            x.innerHTML="<h3>"+JSON.parse(xhr.responseText).data.city+"</h3>"
                            for (var i=0;i<t.length;i++){
                            var reg=t[i].fengli.replace(/^</,'&lt')+t[i].fengli.replace(/>$/,'&gt')
                              x.innerHTML+="<li>"+t[i].date+"--"+t[i].fengxiang+"--"
                                            +t[i].low+"--"+t[i].high+"--"+t[i].type+"--"+reg+"</li>"
                            }
                            
                    }
                    
                }
                xhr.open('GET',url,true)
                xhr.send();
               */
               //axios
                Axios.get(url).then((response)=>{
                    this.text=response.data.data
                    })
                    .catch((error)=>console.log(error))
               
            }
        }
    }
</script>
<style scoped lang="less">

</style>