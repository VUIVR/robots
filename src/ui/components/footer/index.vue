<script lang="ts" setup>
import {SocialIcons} from '@ui/components/socials';
import {Icon} from '@ui/shared/icons';
</script>
<template>
  <div class="footer">
    <SocialIcons />
    <div class="footer__license">
      <span>A product of</span>
      <Icon :width="30" :height="18" name="logo-black" />
    </div>
    <div>© 2020 Lift Media. All rights reserved</div>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
