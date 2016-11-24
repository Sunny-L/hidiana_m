<template>
  <div class="overlay" :class="{show: state}" @click="close()"></div>
</template>
<script>
  export default {
    props: ['state'],
    methods: {
      close(){
        this.$emit('trigger')
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/lib.scss';
  .overlay {
    @include absolute;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition:all .3s ease;
    transition-delay: .2s;
    &.show {
      opacity: 1;
      visibility: visible;
    }
  }

</style>
