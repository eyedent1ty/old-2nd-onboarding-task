<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="p-y-36 bg-white">
      <q-toolbar class="row justify-between">
        <q-input class="custom-input" borderless placeholder="Search Filter...">
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="flex items-center gap-32">
          <q-icon name="notifications" size="36px" />
          <q-avatar class="bg-avatar" size="48px"></q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :model-value="true"
      show-if-above
      :mini="miniState"
      :mini-width="104"
    >
      <q-list class="p-y-36 full-height column justify-between">
        <q-item>
          <q-icon name="diamond" size="36px"></q-icon>
        </q-item>
        <q-item class="q-py-none">
          <q-list>
            <q-item class="q-py-none">
              <q-icon name="home" size="36px"></q-icon>
            </q-item>
            <q-item class="q-py-none">
              <q-icon class="cursor-pointer" name="menu" size="36px" @click="miniState = !miniState" />
            </q-item>
            <q-item class="q-py-none">
              <p class="q-mb-none">Menu</p>
            </q-item>
          </q-list>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const miniState = ref(true);
    return {
      miniState,
    };
  },
});
</script>

<style lang="scss">
@import "./styles/MainLayout.scss";
</style>
