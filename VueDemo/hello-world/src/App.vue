<template>
  <div id="app">
    <GithubHead/>
    <GithubList/>
  </div>
</template>

<script>
import GithubHead from "@/components/GithubHead";
import GithubList from "@/components/GithubList";
export default {
  name: 'App',
  components:{GithubList,GithubHead}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
</style>