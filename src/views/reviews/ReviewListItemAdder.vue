<template>
  <b-card
    bg-variant="success"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <review-creator
      @update="update"
    />
    <b-card-img v-b-modal="`review-null-editor-modal`" :src="require('../../assets/add.png')" alt="Image" bottom></b-card-img>
    <template v-slot:header>
      <h6 class="mb-0 card-title">Add new review</h6>
    </template>
  </b-card>
</template>

<script>
import {BCard} from 'bootstrap-vue';
import ReviewCreator from './ReviewCreator';

export default {
  name: 'ReviewListItemAdder',
  components: {
    'b-card': BCard,
    'review-creator': ReviewCreator,
  },
  methods: {
    update() {
      this.$emit('update');
    },
  },
};
</script>
