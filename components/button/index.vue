<template lang="pug">
  button.button-component
    slot
</template>

<script>

export default {
  name: 'button-component'
}
</script>

<style lang="scss" scoped>
.button-component {
  padding: 17px 32px;

  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: $color-secondary;

  background-color: var(--button-color);
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  outline: 0;
  transition: 0.5s ease;

  &:focus,
  &:active {
    background-color: var(--price-color);
  }

  @include hovers {
    &:hover {
      background-color: var(--price-color);
    }
  }
}

@include sm {
.button-component {
  padding: 16px 24px;
}
}
</style>
