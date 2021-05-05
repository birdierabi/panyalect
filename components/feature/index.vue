<template lang="pug">
  .feature-component.flex.a-center
    .icon.flex
      slot
    .inner
      .title(v-html="title")
      .text(v-html="text")
</template>

<script>
export default {
  name: 'feature-component',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-component {
  .icon {
    padding: 32px 24px;
    margin-right: 24px;

    background-color: var(--secondary-color);
    border-radius: 16px;
  }

  svg {
    width: 32px;
    height: 32px;

    color: var(--svg-color);
  }

  .title {
    margin-bottom: 8px;

    font-weight: bold;
    font-size: 16px;
    line-height: 152%;

    color: var(--title-color);
  }

  .text {
    font-size: 14px;
    line-height: 146%;
  }
}

@include sm {
  .feature-component {
    align-items: flex-start;

    .icon {
      padding: 28px 20px;
      margin-right: 16px;
    }

    svg {
      width: 24px;
      height: 24px;
    }

    .title {
      margin-bottom: 4px;
    }

    .text {
      font-size: 14px;
      line-height: 146%;
    }
  }
}
</style>
