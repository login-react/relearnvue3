<template>{{ injectRes.val }}</template>

<script setup>
import { inject } from "vue";
const injectRes = inject("getData");
console.log("injectRes :>> ", injectRes);
</script>

<style></style>
