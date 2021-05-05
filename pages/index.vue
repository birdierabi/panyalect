<template lang="pug">
  .page.wrapper.index
    .index-wrapper.wrapper
      .bottom
        vCard(v-for="vehicle in vehicles",
          :vehicle="vehicle",
          :key="vehicle.id")
</template>

<script>

import iconPlus from '@/components/icons/icon-plus'
import vCard from '@/components/card'
import vSelect from '@/components/select'
import { mapState } from 'vuex'

export default {
  name: 'index-page',
  components: {
    iconPlus,
    vCard,
    vSelect
  },
  computed: {
    ...mapState({
      vehicles: state => state.vehicles
    })
  },
  async asyncData ({ store, error }) {
    await store.dispatch('GET_VEHICLES')
      .then(res => { store.commit('SET_VEHICLES', res) })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: err.message
        })
        return {}
      })
  }
}
</script>

<style lang="scss" scoped>
.index {
  padding-top: 20px;
  padding-bottom: 48px;

  .index-wrapper {
    padding-top: 56px;
    padding-bottom: 56px;

    background-color: var(--secondary-color);
    border-radius: 48px;
  }

  button {
    position: relative;

    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    color: var(--button-color);

    outline: 0;
    cursor: pointer;

    background-color: transparent;

    .icon {
      display: block;
      padding: 12px;
      margin-left: 20px;

      background-color: var(--button-color);
      border-radius: 16px;
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;

      color: var(--secondary-color);
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 32px;
    grid-column-gap: 32px;
  }
}

@include main {
  .index {
    .bottom {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
  }
}

@include sm {
  .index {
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 0;
    padding-right: 0;

    .index-wrapper {
      padding-top: 26px;
      padding-bottom: 24px;

      border-radius: 24px;
    }

    .bottom {
      grid-template-columns: 1fr;
      grid-row-gap: 12px;
    }

    button {
      font-size: 16px;
      line-height: 136%;

      .icon {
        padding: 6px;
        margin-left: 12px;

        border-radius: 8px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
