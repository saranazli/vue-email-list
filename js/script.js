const {createApp} = Vue;

createApp ({

  data(){

    return{

      title : 'Axios Email',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mail : []

    }

  },

  methods: {

    getApi(){

      axios.get(this.apiUrl)
      .then((risp) =>{

        //this.mail = risp.data.response
        //console.log(this.mail)

        for ( let mail in risp.data){
          //console.log(mail)
          console.log(risp.data.response)
          this.mail.push(risp.data.response)
        }
        
      })
      .catch((error) => {
        console.log(error);
      })

    }

  },

  mounted(){

    this.getApi();

  }

}).mount('#app');