const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Email List',
            nCall: 10,
            emails: [],
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        };
    },

    methods: {
        apiCall() {
            // ciclo per pushare in array 10 elementi richiamando ogni volta l' api per avere 10 elementi diversi
            for (let i = 0; i < this.nCall; i++) {
                axios.get(this.url).then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        },
    },

    created() {
        // richiamo il metodo alla creazione della pagina
        this.apiCall();
    },
}).mount('#app')