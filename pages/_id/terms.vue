<template lang="pug">
  .terms-component
    .description {{ vehicle.term_text }}
    .title Additional conditions:
    ul
      li Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      li Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      li Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
</template>

<script>

export default {
  name: 'terms-component',
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.terms-component {
  margin-bottom: 78px;

   .description {
    margin-bottom: 32px;
  }

  .title {
    margin-bottom: 24px;

    font-weight: bold;
    font-size: 16px;
    line-height: 152%;
    color: var(--title-color);
  }

  ul {
    list-style: none;
  }

  li {
    position: relative;

    padding-left: 28px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;

      width: 8px;
      height: 8px;

      border-radius: 50%;
      background-color: var(--price-color);
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

@include sm {
.terms-component {
  margin-bottom: 32px;

  .description {
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 16px;
  }

  li {
    padding-left: 16px;

    &::before {
      width: 4px;
      height: 4px;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
}
</style>
