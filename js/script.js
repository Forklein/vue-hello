Vue.config.devtools = true;
console.log('Vue Activated', Vue);

const root = new Vue({
    el: '#container',
    data: {
        welcome: 'Hello Vue!',
        image: 'https://www.netfarm.it/web/image/4973/vuejs.png',
        message: {
            name: '',
            surname: '',
            email: '',
        },
        colortext: 'green',
    },
    methods: {
        bye() {
            alert('Hello Vue!');
        }
    }
});