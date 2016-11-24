<template>
  <div class="drawer-wrap">
    <slot name="trigger"></slot>
    <div class="drawer-container" :class="{open: state}">
      <div class="drawer-sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="drawer-content">
        <slot name="content"></slot>
      </div>
      <overlay :state="state" v-on:trigger="trigger"></overlay>
    </div>
  </div>
</template>
<script>
  import overlay from './Overlay.vue'
  export default {
    props: {
      state: {
        type: Boolean,
        default: false
      },
      onOpenChange: {
        type: Function
      }
    },
    components: {
      overlay
    },
    created: function(){
    },
    methods: {
      trigger(){
       this.onOpenChange()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/lib.scss';
  .drawer-wrap {
    height: 100%;
    display: flex;
    flex-direction:column;
    .drawer-trigger {
      height: 1.4rem;
      overflow:hidden;
    }
    .drawer-container {
      position: relative;
      overflow: hidden;
      height: 100%;
      .drawer-sidebar {
        left: 0;
        position: absolute;
        transform: translateX(-100%);
        max-width: 5.2rem;
        background: #fff;
        top: 0;
        bottom: 0;
        transition: transform .3s ease-in-out;
        z-index: 9;
        overflow-y: auto;
      }
      .drawer-content {
        @include absolute;
        overflow: auto;
      }
      &.open {
        .drawer-sidebar {
          transform: translateX(0);
        }
      }
    }
  }

</style>
