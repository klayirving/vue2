<template>
  <div id="star">
    <div class="imgclass"><img src="./star48_on@2x.png"><img src="./star48_on@2x.png"><img src="./star48_on@2x.png"><img src="./star48_on@2x.png"><img src="./star48_off@2x.png"></div>
  </div>
</template>

<script>
  export default {
    name: "star",
    data() {
      return {}
    },
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      }
    }
  }
</script>

<style scoped>
  #star {
    display: inline-block;
    background-repeat: no-repeat;
    width: 100%;
  }
  .imgclass{
    width: 100%;
    text-align: center;

  }
  img{
    margin-left: 22px;
    display: inline-block;
    height: 24px;
    margin-top: 16px;
    text-align: center;

  }




</style>
