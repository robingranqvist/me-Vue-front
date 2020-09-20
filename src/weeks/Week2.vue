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
    name: 'Week1',
    data() {
        return {
            title: '',
            body: ''
        };
    },
    async created() {
        try {
            const res = await axios.get('http://localhost:3030/reports/2');
            this.title = res.data[0].title;
            this.body = res.data[0].body;
            console.log(res);
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

