<script lang="ts" setup>
import {Header} from '@ui/components/header';
import {Footer} from '@ui/components/footer';
</script>
<template>
  <header>
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
