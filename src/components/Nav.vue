<template>
    <div class="nav">
    <router-link class="nav__link" to="/">
        <span uk-icon="icon: home; ratio: 1.3"></span>
    </router-link>
    <router-link class="nav__link" to="/test">
        <span uk-icon="icon: cog; ratio: 1.3"></span>
    </router-link>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
    display: grid;
    justify-content: center;
    gap: 5px;
    &__link {
        padding: 10px;
        transition: .2s;
        border-radius: 15px;
        & > a {
            display: flex;
            justify-content: center;
            align-items: center;

        }
        &:hover {
            background: #F3F5F9;
        }
    }
}
</style>