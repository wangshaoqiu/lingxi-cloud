<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>
<style>
#nprogress .bar {
  background: #42b983 !important;
}
button:focus{
   border:none;
}
:focus {
outline: 0 !important;
}
</style>