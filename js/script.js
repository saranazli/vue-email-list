const {createApp} = Vue;

createApp ({

  data(){

    return{

      title : 'Axios Email',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'

    }

  },

  method: {

    getApi(){

      axios.get(this.apiUrl)
      .then((response) =>{
        console.log(response.data);
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