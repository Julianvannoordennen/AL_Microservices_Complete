<template>
  <b-container class="bv-example-row">
    <b-row>
      <product-list-item-adder
        @update="getProducts"
      />
      <product-list-item
        v-for="product in products"
        :key="product._id"
        :_id="product._id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        @update="getProducts"
      />
    </b-row>
  </b-container>
</template>

<script>
import ProductListItem from './ProductListItem';
import ProductListItemAdder from './ProductListItemAdder';
import {BRow, BContainer} from 'bootstrap-vue';
import * as requests from '../../requests';

export default {
  name: 'ProductList',
  components: {
    'product-list-item': ProductListItem,
    'product-list-item-adder': ProductListItemAdder,
    'b-row': BRow,
    'b-container': BContainer,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      requests.getProducts().then((result) => {
        this.products = result;
      });
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
