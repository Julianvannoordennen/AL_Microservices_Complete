<template>
  <b-card
    bg-variant="success"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <user-creator
      @update="update"
    />
    <b-card-img v-b-modal="`user-null-editor-modal`" :src="require('../../assets/add.png')" alt="Image" bottom></b-card-img>
    <template v-slot:header>
      <h6 class="mb-0 card-title">Add new user</h6>
    </template>
  </b-card>
</template>

<script>
import {BCard} from 'bootstrap-vue';
import UserCreator from './UserCreator';

export default {
  name: 'UserListItemAdder',
  components: {
    'b-card': BCard,
    'user-creator': UserCreator,
  },
  methods: {
    update() {
      this.$emit('update');
    },
  },
};
</script>
