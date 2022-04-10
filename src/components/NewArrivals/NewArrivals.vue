<script setup>
import {useCatalog} from '../../stores/catalog.js'
</script>

<template src="./newarrivals.html"></template>
<style scoped src="./newarrivals.css"></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useCatalog, {newArrivals: 'results'})
  },

  mounted() {
      console.log('results: ', this.newArrivals)
    },

  methods: {
    ...mapActions(useCatalog, ['fetchNewArrivals']),

    addToCart() {
      // we'll populate this later
    }
  },

  created() {
    // when the template is created, we call this action
    this.fetchNewArrivals();
  }
};
</script>