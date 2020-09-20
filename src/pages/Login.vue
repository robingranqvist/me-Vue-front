<template>
    <div>
        <h1>Logga in</h1>
        <div class="reg-form">
            <input type="email" class="input" v-model="user" placeholder="Email">
            <input type="password" class="input" v-model="pwd" placeholder="Lösenord">
            <button v-on:click="addUser" class="btn">Logga in</button>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            user: '',
            pwd: ''
        }
    },
    methods: {
        addUser() {
            axios.post('http://localhost:3030/login', {
                email: this.user,
                password: this.pwd
            }).then((res) => {
                localStorage.setItem('token', res.data);
                // Redirectar till index
                window.location.href = '/';
                console.log(res);
            }).catch(e => {
                console.log(e)
            });
        }
    }
}
</script>

<style scoped>
    .input {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #b3b1b1;
        margin-bottom: 20px;
    }
    
    .btn {
        width: 100%;
        padding: 20px;
        cursor: pointer;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
</style>