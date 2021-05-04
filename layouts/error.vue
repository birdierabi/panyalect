<template lang="pug">
  .page.wrapper.error
    .error-wrapper.wrapper.flex.center
      h1 An error has occurred
      p(v-html="message")
      a(href='/')
        vButton Reload page
</template>

<script>
import vButton from '@/components/button'

export default {
  name: 'page-error',
  components: {
    vButton
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    message () {
      const defaultMessage = 'Please refresh the page'
      return this.error.statusCode === 500
        ? defaultMessage
        : this.error.message || defaultMessage
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  padding-top: 40px;
  padding-bottom: 48px;

  .error-wrapper {
    flex-direction: column;
    height: 76vh;

    text-align: center;

    background-color: var(--secondary-color);
    border-radius: 48px;
  }

  h1 {
    margin-bottom: 24px;

    font-weight: bold;
    font-size: 40px;
    line-height: 120%;

    color: var(--title-color);
  }

  p {
    margin-bottom: 40px;
  }
}

@include sm {
.error {
  padding-top: 8px;
  padding-bottom: 20px;
  padding-left: 0;
  padding-right: 0;

  h1 {
    margin-bottom: 16px;

    font-size: 24px;
  }

  p {
    margin-bottom: 32px;
  }
}
}
</style>
