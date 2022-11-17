<template>
  <div>
    Access Token: <b>{{ accessToken }}</b>
  </div>
  <button @click="login">Log in</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, ref } from "vue";

const { loginWithRedirect, getAccessTokenSilently } = useAuth0();

const accessToken = ref("");

onMounted(async () => {
  accessToken.value = await getAccessTokenSilently();
});

const login = async () => {
  await loginWithRedirect();
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
