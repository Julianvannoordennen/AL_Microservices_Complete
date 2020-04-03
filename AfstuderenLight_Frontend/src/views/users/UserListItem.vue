<template>
  <b-card
    bg-variant="light"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <user-creator
      @update="update"
      :_id="_id"
      :firstName="firstName"
      :lastName="lastName"
    />
    <b-card-img :src="require('../../assets/users.png')" alt="Image" bottom></b-card-img>
    <p />
    <template v-slot:header>
      <h6 class="mb-0 card-title">{{ firstName }} {{ lastName }}</h6>
    </template>
    <b-button-group class="button-align-fix">
      <b-button v-b-modal="`user-${_id}-editor-modal`" variant="warning">
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button @click="onDeleteButtonClick(_id)" href="#" variant="danger">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </b-button-group>
  </b-card>
</template>

<script>
import {BCard, BIconTrash, BIconPencil} from 'bootstrap-vue';
import UserCreator from './UserCreator';
import * as requests from '../../requests';

export default {
  name: 'UserListItem',
  props: {
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDeleteButtonClick(_id) {
      requests.deleteUser(_id).then(() => {
        this.$emit('update');
      });
    },
    update() {
      this.$emit('update');
    },
  },
  components: {
    'b-card': BCard,
    'b-icon-trash': BIconTrash,
    'b-icon-pencil': BIconPencil,
    'user-creator': UserCreator,
  },
};
</script>
