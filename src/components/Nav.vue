<template>
    <div>
        <div class="nav-main">
            <router-link to="/" class="nav-a">Hem</router-link>
            <router-link to="/reports" class="nav-a">Rapporter</router-link>
            
                <router-link v-if="!token" to="/login" class="nav-a">Logga in</router-link>
                <router-link v-if="!token" to="/register" class="nav-a">Registrera dig</router-link>
            
            
                <a href="#" v-if="token" @click="logOut">Logga ut</a>
            
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            token: localStorage.getItem('token'),
        }
    },

    methods: {
        logOut() {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
    }
}
</script>

<style scoped>
    
    .nav-a {
        color: #333;
        margin: 0px 20px;
        text-decoration: none;
    }

    .nav-a:hover {
        opacity: 0.5;
    }

    .nav-main {
        display: flex;
        justify-content: space-between;
        background: #ebebeb;
        padding: 30px;
    }

</style>