<template>
  <b-modal :id="`user-${_id}-editor-modal`" hide-footer :title="isEditMode ? `Editting ${firstName} ${lastName}` : 'Creating new user'">

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
    <hr v-if="isEditMode" />

    <!-- Firstname -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Firstname</label>
      </b-col>
      <b-col sm="9">
        <b-form-input type="text" v-model="formData.firstName"></b-form-input>
      </b-col>
    </b-row>

    <!-- Lastname -->
    <b-row class="my-1">
      <b-col sm="3">
        <label>Lastname</label>
      </b-col>
      <b-col sm="9">
        <b-form-input type="text" v-model="formData.lastName"></b-form-input>
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
  name: 'UserCreator',
  props: {
    _id: {
      type: String,
      required: false,
      default: null,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
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
    this.formData.firstName = this.firstName;
    this.formData.lastName = this.lastName;
  },
  data() {
    return {
      formData: {
        _id: null,
        firstName: null,
        lastName: null,
      },
    };
  },
  methods: {
    save() {
      // Post a product and update parent component
      if (this.isEditMode) {
        requests.updateUser(this.formData._id, {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
        }).then(() => {
          this.$emit('update');
        });
      } else {
        requests.postUser({
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
        }).then(() => {
          this.$emit('update');
        });
      }
      this.hide();
    },
    hide() {
      this.$bvModal.hide(`user-${this._id}-editor-modal`);
    },
  },
};
</script>
