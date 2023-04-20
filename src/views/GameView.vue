<script setup lang="ts">
import { ref } from 'vue';
import { usePlayerStore } from '@/stores/player';

const store = usePlayerStore();
</script>

<template>
    {{ store.players }}
</template>
