// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data(){
        return{
            
            myEmails : [],

        }

    },

    methods :{
        generateEmail (){
            for (i = 0; i < 10; i++){
                 axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                    console.log(resp.data.response);
                     this.myEmails.push(resp.data.response);
                    
                 })
                }
        }

    }




}).mount("#app");