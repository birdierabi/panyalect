<template lang="pug">
  .select-component
    span Rent
    select(v-model="selected" @change="changeOption(selected)")
      option(v-for="type in options" :value="type" :key="type") {{ type }}
</template>

<script>
export default {
  name: 'select-component',
  data () {
    return {
      selected: 'whatever'
    }
  },
  props: {
    vehicles: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array
    }
  },
  methods: {
    changeOption (selected) {
      this.$emit('update-select', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-component {
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;

  color: var(--title-color);

  select {
    margin-left: 6px;

    font-weight: bold;
    color: var(--button-color);

    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
}

@include sm {
  .select-component {
    font-size: 24px;
  }
}
</style>
