import { defineComponent } from 'vue';

const columns = [
  {
    name: 'employee-id',
    required: true,
    label: 'Employee ID',
    align: 'left',
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
  },
  {
    name: 'email',
    required: true,
    label: 'Email',
    align: 'left',
  },
  {
    name: 'status',
    required: true,
    label: 'Status',
    align: 'left',
  },
  {
    name: 'address',
    required: true,
    label: 'Address',
    align: 'left',
  },
];

export default defineComponent({
  setup() {
    return {
      columns,
    };
  },
});
