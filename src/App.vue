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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }
  body {
      background: linear-gradient( 0.25turn, #FF803B, #FFAE66, #FF803B );
  }
  .headline-text-view {
    color: #555555;
    font-size: 28px;
    font-weight: bold;
  }
  .title-text-view {
    color: #555555;
    font-size: 24px;
    font-weight: bold;
  }
  .subtitle-text-view {
    color: #555555;
    font-size: 20px;
    font-weight: bold;
  }
  .copy-text-view {
    color: #555555;
    font-size: 16px;
    font-weight: normal;
  }
  .bold-copy-text-view {
    color: #555555;
    font-size: 16px;
    font-weight: bold;
  }
  .subcopy-text-view {
    color: #b5b5b5;
    font-size: 16px;
    font-weight: normal;
  }
  .urgentcopy-text-view {
    color: #FF803B;
    font-size: 16px;
    font-weight: bold;
  }
  .subtext-text-view {
    color: #b5b5b5;
    font-size: 12px;
    font-weight: normal;
  }
  .lateral-cta-button {
    background-color: white;
    border-radius: 4px;
    border: 1px solid #555555;
    padding: 13px 16px;
    font-size: 24px;
    font-weight: normal;
    cursor: pointer;
    color: #555555;
    &:focus {
      outline: none;
    }
    &.disabled {
      color: #b5b5b5;
      border-color: #b5b5b5;
    }
  }
   .advancing-cta-button {
    background-color: #FF803B;
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
      background-color: #b5b5b5;
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
    color: #b5b5b5;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .human-input-bar {
    text-align: center;
    color: #555555;
    font-size: 16px;
    font-weight: normal;
    background: white;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    &::placeholder {
      color: #b5b5b5;
    }
    &:focus {
      outline: none;
    }
  }
</style>
