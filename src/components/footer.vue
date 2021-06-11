<template>
  <div class="footer">
    <div><input type="checkbox" name="" id="" /></div>
    <div>
      <p>已完成{{ 1 }}件/总计{{ 2 }}件</p>
    </div>
    <div><button class="btn">清除已完成任务</button></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  padding: 10px;
  border-radius: 10px;
  line-height: 20px;
  font-size: 18px;
  background-color: #dddd43;
  color: #fff;
  border: none;
  cursor: pointer;
}
input[type="checkbox"] {
  cursor: pointer;
}
</style>