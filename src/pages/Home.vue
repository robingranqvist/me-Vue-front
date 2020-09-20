<template>
    <div>
        <!-- <ul>
            <li v-for="(post, index) in users" v-bind:key="index">
                {{ post.content }}
            </li>
        </ul> -->

        <h1>
            {{ title }}
        </h1>

        <p>
            {{ body }}
        </p>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Week1',
    data() {
        return {
            content: [],
            title: '',
            body: ''
        };
    },
    async created() {
        try {
            const res = await axios.get('http://localhost:3030/');
            //console.log(res.data.post);
            this.title = res.data.post.title;
            this.body = res.data.post.content;
            
        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }
</style>