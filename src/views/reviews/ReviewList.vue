<template>
  <b-container class="bv-example-row">
    <b-row>
      <review-list-item-adder
        @update="getReviews"
      />
      <review-list-item
        v-for="review in reviews"
        :key="review._id"
        :_id="review._id"
        :userID="review.userID"
        :productID="review.productID"
        :description="review.description"
        :rating="review.rating"
        @update="getReviews"
      />
    </b-row>
  </b-container>
</template>

<script>
import ReviewListItem from './ReviewListItem';
import ReviewListItemAdder from './ReviewListItemAdder';
import {BRow, BContainer} from 'bootstrap-vue';
import * as requests from '../../requests';

export default {
  name: 'ReviewList',
  components: {
    'review-list-item': ReviewListItem,
    'review-list-item-adder': ReviewListItemAdder,
    'b-row': BRow,
    'b-container': BContainer,
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      requests.getReviews().then((result) => {
        this.reviews = result;
      });
    },
  },
  data() {
    return {
      reviews: [],
    };
  },
};
</script>
