Vue.config.devtools = true;

new Vue (
    {
        el: "#app",
        data: {
            randomEmailList: [],
        },
        created(){
            this.getEmail();
        },
        methods: {
            getEmail: function () {
                for (let i = 0; i < 10; i++ ) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                        this.randomEmailList.push (response.data.response);
                    });
                }
            }
        }
    }
);