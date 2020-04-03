<template>
  <div class="reviews">
    <hr class="awesome-hr" />
    <review-list></review-list>
    <hr class="awesome-hr" />
  </div>
</template>

<script>
import ReviewList from './ReviewList';
export default {
  name: 'Reviews',
  components: {
    'review-list': ReviewList,
  },
};
</script>
