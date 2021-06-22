<template lang="pug">
  .specialist-component
    img(:src="specialist.image")
    .inner
      .title {{ specialist.title }}
      .text {{ specialist.text }}
</template>

<script>
export default {
  name: 'specialist-component',
  props: {
    specialist: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.specialist-component {
  img {
    margin-bottom: 16px;
    width: auto;
    height: auto;

    border-radius: 16px;
  }

  .title {
    margin-bottom: 8px;

    font-weight: bold;
    font-size: 16px;
    line-height: 14px;

    color: var(--title-color);
  }

  .text {
    font-size: 12px;
    line-height: 148%;
  }
}

@include sm {
.specialist-component {
  display: flex;
  align-items: center;

  img {
    margin-bottom: 0;
    margin-right: 16px;
  }

  .title {
    margin-bottom: 4px;

    line-height: 152%;

    color: var(--title-color);
  }
}
}

@include xs {
.specialist-component {
  display: flex;

  img {
    width: 132px;
    height: 80px;
  }
}
}
</style>
