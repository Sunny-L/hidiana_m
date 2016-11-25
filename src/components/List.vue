<template>
  <div class="w-list">
    <div class="w-list-header">{{header}}</div>
    <div class="w-list-body">
      <div class="w-list-item" v-for="item in data">
        <div class="w-list-content">
          <div class="w-list-title">
            {{item.title}}
            <div class="w-list-brief">{{item.brief}}</div>
          </div>
          <div class="w-list-extra">{{item.extra}}</div>
        </div>
      </div>
      <slot name="body"></slot>
    </div>
    <div class="w-list-footer"></div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Array,
        default(){
          return []
        }
      },
      header: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/lib.scss';
  .w-list {
    font-size: 14px;
    .w-list-header {
      padding: .3rem .3rem .18rem;
      font-size: 16px;
      color: #888;
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid #ddd;
    }
    .w-list-item {
      min-height: .9rem;
      padding: .25rem .3rem .25rem .3rem;
      overflow: hidden;
      background: #fff;
      border-bottom: 1px solid #ddd;
      .w-list-content {
        display: flex;
        justify-content: space-between;
        @include ellipsis;
        .w-list-title {
          flex: 2;
          overflow: hidden;
          .w-list-brief {
            color: #888;
            margin-top: .12rem;
            line-height: 1.2;
            font-size: 14px;
            @include ellipsis;
          }
        }
        .w-list-extra {
          flex: 1;
        }
      }
    }
  }

</style>
