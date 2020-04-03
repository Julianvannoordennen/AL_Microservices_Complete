<template>
  <b-card
    bg-variant="success"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <product-creator
      @update="update"
    />
    <b-card-img v-b-modal="`product-null-editor-modal`" :src="require('../../assets/add.png')" alt="Image" bottom></b-card-img>
    <template v-slot:header>
      <h6 class="mb-0 card-title">Add new product</h6>
    </template>
  </b-card>
</template>

<script>
import {BCard} from 'bootstrap-vue';
import ProductCreator from './ProductCreator';

export default {
  name: 'ProductListItemAdder',
  components: {
    'b-card': BCard,
    'product-creator': ProductCreator,
  },
  methods: {
    update() {
      this.$emit('update');
    },
  },
};
</script>
