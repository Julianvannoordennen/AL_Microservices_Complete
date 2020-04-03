<template>
  <b-card
    bg-variant="light"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <product-creator
      @update="update"
      :_id="_id"
      :name="name"
      :description="description"
      :price="price"
    />
    <b-card-img :src="require('../../assets/products.png')" alt="Image" bottom></b-card-img>
    <template v-slot:header>
      <h6 class="mb-0 card-title">{{ name }}</h6>
    </template>
    <b-card-text>
      {{ description }}
    </b-card-text>
    <b-button-group class="button-align-fix">
      <b-button href="#" variant="primary">€ {{ price }},-</b-button>
      <b-button v-b-modal="`product-${_id}-editor-modal`" variant="warning">
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
import ProductCreator from './ProductCreator';
import * as requests from '../../requests';

export default {
  name: 'ProductListItem',
  props: {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onDeleteButtonClick(_id) {
      requests.deleteProduct(_id).then(() => {
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
    'product-creator': ProductCreator,
  },
};
</script>
