<template>
  <b-card
    bg-variant="light"
    header-tag="header"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <review-creator
      @update="update"
      :_id="_id"
      :userID="userID"
      :productID="productID"
      :description="description"
      :rating="rating"
    />
    <b-card-img :src="require('../../assets/reviews.png')" alt="Image" bottom></b-card-img>
    <p>{{ description }}</p>
    <template v-slot:header>
      <h6 class="mb-0 card-title">Product review</h6>
    </template>
    <b-button-group class="button-align-fix">
      <b-button href="#" variant="primary">{{ rating }} / 5</b-button>
      <b-button v-b-modal="`review-${_id}-editor-modal`" variant="warning">
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
import ReviewCreator from './ReviewCreator';
import * as requests from '../../requests';

export default {
  name: 'ReviewListItem',
  props: {
    _id: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    productID: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onDeleteButtonClick(_id) {
      requests.deleteReview(_id).then(() => {
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
    'review-creator': ReviewCreator,
  },
};
</script>
