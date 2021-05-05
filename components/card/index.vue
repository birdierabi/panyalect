<template lang="pug">
  nuxt-link(:to="`/${vehicle.id}/specifications`").card-component.flex
    img(:src="vehicle.preview")
    .inner.flex.j-between
      .title {{ vehicle.name }}
      .description {{ vehicle.description }}
      .price {{ vehicle.rent }} $/h
</template>

<script>

export default {
  name: 'card-component',
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.card-component {
  padding: 24px 32px;

  background-color: var(--bg-color);
  border-radius: 32px;

  cursor: pointer;

  img {
    margin-right: 24px;
    height: 88px;
    width: 88px;
    display: block;

    border-radius: 24px;
  }

  .inner {
    flex-direction: column;
  }

  .title {
    margin-bottom: 12px;

    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: var(--title-color);
  }

  .description {
    margin-bottom: 16px;

    font-size: 12px;
    line-height: 148%;
  }

  .price {
    font-weight: bold;
    font-size: 14px;
    line-height: 148%;

    color: var(--price-color);
  }
}
</style>
