<template>
  <q-page>
    <h2 class="menu-title q-ma-none">Dashboard</h2>
    <q-list class="row">
      <q-item v-for="i in 4" :key="i" class="col-3 q-pl-none">
        <q-card class="card full-width">
          <q-card-section class="card__title text-weight-bold">Card {{ i }}</q-card-section>
          <q-card-section class="card__description">Description</q-card-section>
        </q-card>
      </q-item>
    </q-list>
  </q-page>
</template>

<style scoped lang="scss">
@import './styles/DashboardPage.scss';
</style>
