<template>
  <b-modal :id="`review-${_id}-editor-modal`" hide-footer :title="isEditMode ? `Editting review` : 'Creating new review'">

    <!-- Id -->
    <b-row v-if="isEditMode" class="my-1">
      <b-col sm="3">
        <label>Id</label>
      </b-col>
      <b-col sm="9">
        <b-input-group prepend="#">
          <b-form-input disabled type="text" v-model="formData._id"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- User -->
    <b-row v-if="!isEditMode" class="my-1">
      <b-col sm="3">
        <label>User</label>
      </b-col>
      <b-col sm="9">
        <b-input-group>
          <div class="button-align-fix input-group-prepend">
            <button @click="getUsers" class="btn btn-outline-secondary" type="button">
              <arrow-counterclockwise />
            </button>
          </div>
          <b-form-select @change="selectUser" type="number" :options="usersAsOptions"></b-form-select>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- User Id -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>User Id</label>
      </b-col>
      <b-col sm="9">
        <b-input-group prepend="#">
          <b-form-input disabled type="text" v-model="formData.userID"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- Product -->
    <b-row v-if="!isEditMode" class="my-1">
      <b-col sm="3">
        <label>Product</label>
      </b-col>
      <b-col sm="9">
        <b-input-group>
          <div class="button-align-fix input-group-prepend">
            <button @click="getProducts" class="btn btn-outline-secondary" type="button">
              <arrow-counterclockwise />
            </button>
          </div>
          <b-form-select @change="selectProduct" type="text" :options="productsAsOptions"></b-form-select>
        </b-input-group>
      </b-col>
    </b-row>

    <!-- Product Id -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Product Id</label>
      </b-col>
      <b-col sm="9">
        <b-input-group prepend="#">
          <b-form-input disabled type="text" v-model="formData.productID"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <hr />

    <!-- Description -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Description</label>
      </b-col>
      <b-col sm="9">
        <b-form-textarea v-model="formData.description"></b-form-textarea>
      </b-col>
    </b-row>

    <!-- Rating -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Rating ({{ formData.rating }})</label>
      </b-col>
      <b-col sm="9">
        <b-form-input type="range" min="0" max="5" v-model="formData.rating"></b-form-input>
      </b-col>
    </b-row>

    <!-- Buttons -->
    <b-row class="my-1">
      <b-col sm="12">
        <b-button variant="primary" @click="hide">Cancel</b-button>
        <b-button variant="success" @click="save" class="float-right">Save</b-button>
      </b-col>
    </b-row>

  </b-modal>
</template>

<script>
import {BModal, BIconArrowCounterclockwise} from 'bootstrap-vue';
import * as requests from '../../requests';
export default {
  name: 'ReviewCreator',
  props: {
    _id: {
      type: String,
      required: false,
      default: null,
    },
    userID: {
      type: String,
      required: false,
    },
    productID: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  components: {
    'b-modal': BModal,
    'arrow-counterclockwise': BIconArrowCounterclockwise,
  },
  computed: {
    isEditMode() {
      return this._id !== null;
    },
    productsAsOptions() {
      return this.products.map((product) => {
        return {
          value: product._id,
          text: product.name,
        };
      });
    },
    usersAsOptions() {
      return this.users.map((user) => {
        return {
          value: user._id,
          text: `${user.firstName} ${user.lastName}`,
        };
      });
    },
  },
  mounted() {
    this.formData._id = this._id;
    this.formData.userID = this.userID;
    this.formData.productID = this.productID;
    this.formData.description = this.description;
    this.formData.rating = this.rating;
  },
  data() {
    return {
      formData: {
        _id: null,
        userID: null,
        productID: null,
        description: null,
        rating: null,
      },
      products: [],
      users: [],
    };
  },
  methods: {
    selectProduct(_id) {
      this.formData.productID = _id;
    },
    selectUser(_id) {
      this.formData.userID = _id;
    },
    getProducts() {
      requests.getProducts().then((result) => {
        this.products = result;
      });
    },
    getUsers() {
      requests.getUsers().then((result) => {
        this.users = result;
      });
    },
    save() {
      // Post a review and update parent component
      if (this.isEditMode) {
        requests.updateReview(this.formData._id, {
          userID: this.formData.userID,
          productID: this.formData.productID,
          description: this.formData.description,
          rating: this.formData.rating,
        }).then(() => {
          this.$emit('update');
        });
      } else {
        requests.postReview({
          userID: this.formData.userID,
          productID: this.formData.productID,
          description: this.formData.description,
          rating: this.formData.rating,
        }).then(() => {
          this.$emit('update');
        });
      }
      this.hide();
    },
    hide() {
      this.$bvModal.hide(`review-${this._id}-editor-modal`);
    },
  },
};
</script>
