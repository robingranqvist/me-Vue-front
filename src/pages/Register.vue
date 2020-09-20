<template>
    <div>
        <h1>Registrera dig</h1>
        <div class="reg-form">
            <input type="email" class="input" v-model="user" placeholder="Email">
            <input type="password" class="input" v-model="pwd" placeholder="Lösenord">
            <button v-on:click="addUser" class="btn">Registrera dig</button>
            <div v-if="registered">
                <p class="finished">Du är registrerad!</p>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            user: '',
            pwd: '',
            registered: false
        }
    },
    methods: {
        addUser() {
            axios.post('http://localhost:3030/register', {
                email: this.user,
                password: this.pwd
            }).then((res) => {
                console.log(res);
                this.registered = true;
            }).catch(e => {
                console.log(e)
            });
        }
    }
}
</script>

<style scoped>
    
</style>