<template>
  <a href="https://newt.so/" rel="noreferrer noopener" target="_blank" class="Badge">
    <img src="/logo.svg" alt="Newt" width="16" height="13" />
    <span class="Badge_Text">Made in Newt</span>
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
.Badge {
  position: fixed;
  display: flex;
  align-items: center;
  right: 16px;
  bottom: 16px;
  background: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 2px 8px -4px rgba(0,0,0,.5);
  padding: 3px 8px;
}
.Badge_Text {
  margin: 0 0 0 5px;
}
</style>