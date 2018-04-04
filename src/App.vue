<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">

  @import "components/Core/colors.less";

  #app {
    font-family: Raleway;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
  body {
      background: white;
  }
  .headline-text-view {
    color: @hop_charcoal;
    font-size: 28px;
    font-weight: bold;
  }
  .title-text-view {
    color: @hop_charcoal;
    font-size: 24px;
    font-weight: bold;
  }
  .subtitle-text-view {
    color: @hop_charcoal;
    font-size: 20px;
    font-weight: bold;
  }
  .copy-text-view {
    color: @hop_charcoal;
    font-size: 16px;
    font-weight: normal;
  }
  .bold-copy-text-view {
    color: @hop_charcoal;
    font-size: 16px;
    font-weight: bold;
  }
  .subcopy-text-view {
    color: @hop_grey;
    font-size: 16px;
    font-weight: normal;
  }
  .urgentcopy-text-view {
    color: @hop_orange;
    font-size: 16px;
    font-weight: bold;
  }
  .inline-link-text-view {
    color: @hop_charcoal;
    font-size: 16px;
    font-weight: normal;
    text-decoration: underline;
  }
  .subtext-text-view {
    color: @hop_grey;
    font-size: 12px;
    font-weight: normal;
  }
  .lateral-cta-button {
    background-color: white;
    border-radius: 4px;
    border: 1px solid @hop_charcoal;
    padding: 13px 16px;
    font-size: 24px;
    font-weight: normal;
    cursor: pointer;
    color: @hop_charcoal;
    &:focus {
      outline: none;
    }
    &.disabled {
      color: @hop_grey;
      border-color: @hop_grey;
    }
  }
   .advancing-cta-button {
    background-color: @hop_orange;
    border-radius: 4px;
    border: none;
    padding: 13px 16px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    &:focus {
      outline: none;
    }
    &.disabled {
      background-color: @hop_grey;
    }
    &.giant {
      font-size: 40px;
    }
  }
  .we-hate-this-cta-button {
    background-color: transparent;
    padding: 0px;
    border: none;
    font-size: 20px;
    font-weight: normal;
    color: @hop_grey;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .edit-text-input {
    background: transparent;
    border: none;
    color: @hop_charcoal;
    font-size: 16px;
    font-weight: bold;
    caret-color: @hop_orange;
    &::placeholder {
      color: @hop_grey;
    }
    &:focus {
      outline: none;
    }
  }
</style>
