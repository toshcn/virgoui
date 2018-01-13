<style lang="less">
    @import "../src/style/index.less";
</style>

<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.text-center {
  text-align: center;
}
.container{ width: 1024px; margin: 0 auto; padding: 10px 40px; }
</style>

<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/icon">Icon</router-link></li>
                <li><router-link to="/grid">Grid</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {}
    },
    mounted: function () {

    },
    beforeDestroy: function () {

    },
    methods: {

    }
}
</script>
