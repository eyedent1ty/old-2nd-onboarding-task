<template>
  <q-page>
    <header>
      <div class="flex justify-between mb-32">
        <h2 class="menu-title q-ma-none">Employee List</h2>
        <div class="flex">
          <q-btn
            class="q-mr-lg"
            no-caps
            unelevated
            rounded
            color="teal"
            label="Add Employee"
          />
          <q-input placeholder="Search" borderless outlined dense rounded>
            <template #append>
              <q-icon name="search" size="16px" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="flex items-center gap-16 mb-32">
        <p class="q-ma-none">Filters:</p>
        <q-select
          class="select-input"
          model-value="All"
          :options="['All']"
          borderless
          outlined
          dense
          rounded
        />
        <q-input placeholder="Date" borderless outlined dense rounded>
          <template #append>
            <q-icon name="calendar_month" size="16px" />
          </template>
        </q-input>
      </div>
    </header>
    <main>
      <q-table class="employees-table" table-header-class="table-header" :columns="columns" />
    </main>
  </q-page>
</template>

<script src="./scripts/EmployeeList.js"></script>

<style lang="scss" scoped>
@import './styles/EmployeeList.scss';
</style>
