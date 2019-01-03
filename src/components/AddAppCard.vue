<template>
  <Card>
    <div style="text-align:center">
      <img
        src="@/assets/arrow.png"
        class="dropHere"
      />
      <h3 style="opacity: 0.2;">Drop here</h3>
    </div>
  </Card>
</template>

<script>
  export default {}
</script>

<style scoped>
  .dropHere {
    width: 128px;
    height: 128px;
    border: 5px dotted black;
    border-radius: 20px;
    opacity: 0.1;
  }
</style>
