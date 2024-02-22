<template>
  <div class="custom-list absolute bg-white w-360">
    <h2 class="text-h5 text-weight-bold line-height-30 q-pl-lg mt-32 mb-28">
      Menu
    </h2>
    <q-list>
      <q-item class="custom-q-item q-pa-none items-center cursor-pointer">
        <RouterLink
          class="text-decoration-none full-width full-height column justify-center pl-56"
          :to="{ name: 'dashboard' }"
        >
          menu 1
        </RouterLink>
      </q-item>
      <q-item class="custom-q-item q-pa-none items-center cursor-pointer">
        <RouterLink
          class="text-decoration-none full-width full-height column justify-center pl-56"
          to="/menu-2"
        >
          menu 2
        </RouterLink>
      </q-item>
      <q-item
        class="custom-q-item q-pa-none q-py-none items-center cursor-pointer"
      >
        <RouterLink
          class="text-decoration-none full-width full-height column justify-center pl-56"
          to="/menu-3"
        >
          menu 3
        </RouterLink>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped lang="scss">
$list-item-hover-color: #ebebeb;
$link-color: #212121;

.w-360 {
  width: 360px;
}

.custom-list {
  top: 122px;
  bottom: 0;
  left: 126px;
}

.mt-32 {
  margin-top: 32px;
}

.mb-28 {
  margin-bottom: 28px;
}

.line-height-30 {
  line-height: 30.17px;
}

.pl-56 {
  padding-left: 56px;
}

.custom-q-item {
  &.q-item {
    height: 42.98px;
  }
}

a {
  color: $link-color;
}

.q-item:hover a {
  background-color: $list-item-hover-color;
  color: $link-color;
}

.router-link-active {
  border-left-width: 2px;
  border-color: #249990;
  border-left-style: solid;
}
</style>
