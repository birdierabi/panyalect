<template lang="pug">
  nuxt-link(to="#").account-component.flex.a-center
    span Bessie Cooper
    .icon
</template>

<script>
export default {
  name: 'account-component'
}
</script>

<style lang="scss" scoped>
.account-component {
  font-weight: bold;
  font-size: 16px;
  line-height: 152%;
  color: var(--title-color);
  transition: 0.5s ease;

  span {
    display: block;
    margin-right: 16px;

    user-select: none;
  }

  .icon {
    width: 56px;
    height: 56px;

    background-image: url("/img/bessie-cooper.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    transition: 0.5s ease;
  }

  &:focus,
  &:active {
    color: var(--button-color);

    .icon {
      box-shadow: 0 0 3px 3px var(--button-color);
      border-radius: 50%;
    }
  }

  @include hovers {
    &:hover {
      opacity: 0.7;
    }
  }
}

@include sm {
  .account-component {
    span {
      display: none;
    }
  }
}

@include xs {
  .account-component {
    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
