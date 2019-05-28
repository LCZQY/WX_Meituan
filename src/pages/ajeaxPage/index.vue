<template>
  <div class="container">    
    <dl >      
      <div :key="index" v-for="(item, index) in list">        
        <dd style="border:black solid thin; text-align:center" v-if="item.icon.length > 0" >
          <img :src="item.icon" />
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>

  export default {  

    data () {
      return {
        list: []
      }
    },       
    ////页面初始化请求数据
    async beforeMount() {
   
      var url = 'http://192.168.100.146:7001/api/buildings/pc/list'
      this.$fly.post(url,{
         "pageIndex": 0,
         "pageSize": 20
      })
      .then((ret) => { 
        this.list = ret.data.extension
         console.log(this.list,"response");
      
      }).catch((error) => {
        console.log(error,"接口请求报错");
      });
        // let ret = await this.$ajax({url: 'http://192.168.100.146:7001/api/buildings/pc/list',method:'POST', data:{
        //         "pageIndex": 0,
        //         "pageSize": 20
        //   }})
        //   this.list = ret.data.extension;
        //   console.log(list,"this.list") 
    },
    onShow(){

      console.log(this.list,"这时候的LIST是");
    },
    methods: {    

    }
  }
</script>
