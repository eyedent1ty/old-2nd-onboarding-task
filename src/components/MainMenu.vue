<template>
  <div class="custom-list absolute bg-white w-360 q-px-lg py-32">
    <h2 class="text-h5 text-weight-bold line-height-30">Menu</h2>
    <q-list>
      <q-item class="custom-q-item q-py-none items-center cursor-pointer">
        <RouterLink class="text-decoration-none" to="/"> menu 1 </RouterLink>
      </q-item>
      <q-item class="custom-q-item q-py-none items-center"> menu 2 </q-item>
      <q-item class="custom-q-item q-py-none items-center"> menu 3 </q-item>
    </q-list>
  </div>
</template>

<style scoped lang="scss">
.w-360 {
  width: 360px;
}

.custom-list {
  top: 86px;
  bottom: 0;
  left: 126px;
}

.py-32 {
  padding-top: 32px;
  padding-bottom: 32px;
}

.line-height-30 {
  line-height: 30.17px;
}

.custom-q-item {
  &.q-item {
    height: 42.98px;
  }
}
</style>
