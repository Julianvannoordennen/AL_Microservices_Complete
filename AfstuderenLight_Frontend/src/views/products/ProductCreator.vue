<template>
  <b-modal :id="`product-${_id}-editor-modal`" hide-footer :title="isEditMode ? `Editting ${name}` : 'Creating new product'">

    <!-- _Id -->
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
    <hr v-if="isEditMode" />

    <!-- Name -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Name</label>
      </b-col>
      <b-col sm="9">
        <b-form-input type="text" v-model="formData.name"></b-form-input>
      </b-col>
    </b-row>

    <!-- Description -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Description</label>
      </b-col>
      <b-col sm="9">
        <b-form-textarea v-model="formData.description"></b-form-textarea>
      </b-col>
    </b-row>

    <!-- Price -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Price</label>
      </b-col>
      <b-col sm="9">
        <b-input-group prepend="€" append=",-">
          <b-form-input v-model="formData.price" type="number"></b-form-input>
        </b-input-group>
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
import {BModal} from 'bootstrap-vue';
import * as requests from '../../requests';
export default {
  name: 'ProductCreator',
  props: {
    _id: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
  },
  components: {
    'b-modal': BModal,
  },
  computed: {
    isEditMode() {
      return this._id !== null;
    },
  },
  mounted() {
    this.formData._id = this._id;
    this.formData.name = this.name;
    this.formData.description = this.description;
    this.formData.price = this.price;
  },
  data() {
    return {
      formData: {
        _id: null,
        name: null,
        description: null,
        price: null,
      },
    };
  },
  methods: {
    save() {
      // Post a product and update parent component
      if (this.isEditMode) {
        requests.updateProduct(this.formData._id, {
          name: this.formData.name,
          description: this.formData.description,
          price: this.formData.price,
        }).then(() => {
          this.$emit('update');
        });
      } else {
        requests.postProduct({
          name: this.formData.name,
          description: this.formData.description,
          price: this.formData.price,
        }).then(() => {
          this.$emit('update');
        });
      }
      this.hide();
    },
    hide() {
      this.$bvModal.hide(`product-${this._id}-editor-modal`);
    },
  },
};
</script>
