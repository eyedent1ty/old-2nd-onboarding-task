<template>
  <q-page>
    <header class="flex justify-between">
      <h2 class="menu-title q-ma-none">Employee List</h2>
      <div class="flex">
        <q-btn class="btn-add q-mr-lg" no-caps unelevated rounded color="teal" label="Add Employee" />
        <q-input class="search-input" placeholder="Search" borderless outlined dense rounded>
          <template #append>
            <q-icon name="search" size="16px" />
          </template>
        </q-input>
      </div>
    </header>
  </q-page>
</template>

<style lang="scss">
@import './styles/EmployeeList.scss';
</style>
