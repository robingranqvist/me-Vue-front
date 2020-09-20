<template>
    <div>
        <div v-for="(post,i) in posts" :key="i">
            <router-link :to="'/reports/week/' + post.id" class="nav-a">-> ID: {{ post.id }} {{ post.title }}</router-link>
        </div>


        <div v-if="token">
            <h1>Skapa nytt inlägg</h1>
            <div class="form">
                <input type="title" class="input" v-model="titleNew" placeholder="Ny titel">
                <textarea rows="10" cols="25" class="input" v-model="bodyNew" placeholder="Skriv text här"></textarea>
                <button v-on:click="createPost" class="btn">Uppdatera</button>
                <div v-if="inserted">
                    <p class="finished">Inlägget är skickat!</p>
                </div>
            </div>


            <h1>Editera inlägg</h1>
            <div>
                <p class="label">Ange ID för det inlägget du vill editera</p>
                <input type="title" class="input" v-model="id" placeholder="">
                <p class="label">Titel</p>
                <input type="title" class="input" v-model="title">
                <p class="label">Brödtext</p>
                <textarea rows="10" cols="25" class="input" v-model="body"></textarea>
                <button v-on:click="updatePost" class="btn">Uppdatera</button>
                <div v-if="edited">
                    <p class="finished">Inlägget är uppdaterat!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data () {
        return {
            token: localStorage.getItem('token'),
            posts: [],
            id: 1,
            title: '',
            body: '',
            titleNew: '',
            bodyNew: '',
            inserted: false,
            edited: false
        }
    },
    async created() {
        const url = 'http://localhost:3030/reports/';
        await axios.get(url, {
            headers: {
                'auth-token': this.token
            }
        }).then((res) => {
            this.posts = res.data;
            //console.log(this.posts);
        }).catch(e => {
            console.log(e);
        });
    },
    methods: {
        async updatePost() {
            const url = 'http://localhost:3030/reports/' + this.id;
            const res = await axios.patch(url, {
                id: this.id,
                title: this.title,
                body: this.body,
            },
            {
                headers: {
                    'auth-token': this.token
                }
            }
            ).then((res) => {
                console.log(res);
                this.edited = true;
            }).catch(e => {
                console.log(e);
                this.edited = false;
            });
            console.log(res);
        },

        async createPost() {
            const url = 'http://localhost:3030/reports/';
            const res = await axios.post(url, {
                title: this.titleNew,
                body: this.bodyNew
            }, 
            {
                headers: {
                    'auth-token': this.token
                }
            }
            ).then((res) => {
                console.log(res);
                this.inserted = true;
            }).catch(e => {
                console.log(e);
                this.inserted = false;
            });
            
            console.log(this.token);
            console.log(res);
            console.log(localStorage.getItem('token'));
        },
    }
}
</script>

<style scoped>
    h1 {
        margin-top: 50px;
    }

    .form {
        margin: 50px 0px;
    }

    .label {
        margin-bottom: 20px;
    }

    .btn {
        margin-bottom: 50px;
    }
</style>