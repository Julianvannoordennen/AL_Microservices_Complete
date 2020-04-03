<template>
  <div class="users">
    <hr class="awesome-hr" />
    <user-list></user-list>
    <hr class="awesome-hr" />
  </div>
</template>

<script>
import UserList from './UserList';
export default {
  name: 'Users',
  components: {
    'user-list': UserList,
  },
};
</script>
