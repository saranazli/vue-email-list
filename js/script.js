const {createApp} = Vue;

createApp ({

  data(){

    return{

      title : 'Axios Email',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails : [],
      counter : 0 

    }

  },

  methods: {

    getApi(){

      for ( let i = 0 ; i < 10; i++){

        axios.get(this.apiUrl)
        .then((risp) =>{
          
          this.mails.push(risp.data.response)
          console.log(this.mails)
          
        })
        .catch((error) => {
          console.log(error);
        })

        this.counter++

      }

       

    }

  },

  mounted(){

    this.getApi();

  }

}).mount('#app');