<template>
    <div>
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
    name: 'Post',
    data() {
        return {
            id: this.$route.params.id,
            title: '',
            body: ''
        };
    },
    async created() {
        try {
            const param = this.id;
            const url = 'http://localhost:3030/reports/week/' + param;
            console.log(url);
            const res = await axios.get(url);
            this.title = res.data[0].title;
            this.body = res.data[0].body;
            // console.log(this.title);
        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
</style>

