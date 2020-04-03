<template>
  <b-container class="bv-example-row">
    <b-row>
      <user-list-item-adder
        @update="getUsers"
      />
      <user-list-item
        v-for="user in users"
        :key="user._id"
        :_id="user._id"
        :firstName="user.firstName"
        :lastName="user.lastName"
        @update="getUsers"
      />
    </b-row>
  </b-container>
</template>

<script>
import UserListItem from './UserListItem';
import UserListItemAdder from './UserListItemAdder';
import {BRow, BContainer} from 'bootstrap-vue';
import * as requests from '../../requests';

export default {
  name: 'UserList',
  components: {
    'user-list-item': UserListItem,
    'user-list-item-adder': UserListItemAdder,
    'b-row': BRow,
    'b-container': BContainer,
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      requests.getUsers().then((result) => {
        this.users = result;
      });
    },
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>
