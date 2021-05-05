<template lang="pug">
  .page.vehicle-page.wrapper.flex
    .img-inner.flex.j-center
      img(:src="vehicle.image")
    .inner
      .title {{ vehicle.name }}
      .rent-inner
        .rent.flex.a-center.j-between
          .price Rent for
            span {{ vehicle.rent }} $/h
          vButton Rent now
</template>

<script>

import vButton from '@/components/button'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'vehicle-page',
  components: {
    vButton
  },
  computed: {
    ...mapState({
      vehicles: state => state.vehicles
    }),
    ...mapGetters(['getItem']),
    vehicle () {
      return this.getItem(this.$route.params.id)
    }
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
  .vehicle-page {
    padding-top: 20px;
    padding-bottom: 56px;

    .img-inner {
      align-self: center;
      flex-basis: 73%;
      width: 100%;
      height: 100%;
      margin-right: 64px;
    }

    img {
      width: inherit;
      height: inherit;
      max-height: 700px;
      max-width: 712px;

      border-radius: 24px;
    }

    .inner {
      flex-basis: 56%;
    }

    .title {
      margin-bottom: 32px;

      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: var(--title-color);
    }

    .rent {
      padding: 16px 32px;

      background-color: var(--secondary-color);
      border-radius: 16px;
    }

    .price {
      font-weight: bold;
      font-size: 20px;
      line-height: 140%;

      color: var(--title-color);

      span {
        margin-left: 6px;

        color: var(--price-color);
      }
    }
  }

  @include main {
    .vehicle-page {
      flex-direction: column;

      .img-inner {
        flex-basis: unset;
        margin-right: 0;
      }

      .inner {
        flex-basis: unset;
        margin-top: 40px;
      }
    }
  }

  @include sm {
    .vehicle-page {
      height: 100vh;
      padding-top: 10px;
      padding-bottom: 0;

      .title {
        margin-bottom: 16px;

        font-size: 24px;
        line-height: 120%;
      }

      .img-inner {
        height: auto;
      }

      .rent-inner {
        position: sticky;
        bottom: 0;

        padding-bottom: 32px;

        background-color: var(--bg-color);

        &::before {
          content: '';

          position: absolute;
          top: -22px;
          z-index: -1;

          width: 100vw;
          height: 34px;
          margin-left: -25px;
          margin-right: -25px;

          background: linear-gradient(180deg, rgba(1, 35, 69, 0) 0%, var(--bg-color) 100%);
        }
      }

      .rent {
        padding: 12px 24px;
      }

      .price {
        font-size: 16px;
        line-height: 140%;
      }
    }
  }

  @include xs {
    .vehicle-page {
      .rent-inner {
        &::before {
          margin-left: -16px;
          margin-right: -16px;
        }
      }
    }
  }
</style>
