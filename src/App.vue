<template>
    <header>header</header>
    <aside>
        <Nav></Nav>
    </aside>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Nav from "@/components/Nav";

export default {
    name: 'App',
    components: {
        Nav,
    },
    setup() {
        const data = ref();

        axios.get('http://localhost:3001/tasks').then((res) => {
            data.value = res.data

            console.log(data.value)
        })

        return { data }
    }
}
</script>

<style lang="scss">

</style>
