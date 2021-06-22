<template lang="pug">
  .page.wrapper.index
    .index-wrapper.wrapper
      .top.flex.j-between.a-center
        vSelect(:vehicles="vehicles" :options="getOptions" @update-select="optionSelect")
        button.flex.a-center(@click="openModal") Add new
          .icon
            iconPlus
      .bottom
        vCard(v-for="vehicle in updateSelect",
          :vehicle="vehicle",
          :key="vehicle.id")
    vModal(v-show="isModalOpen" @close-modal="closeModal")
</template>

<script>
import iconPlus from '@/components/icons/icon-plus'
import vCard from '@/components/card'
import vSelect from '@/components/select'
import vModal from '@/components/modal'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'index-page',
  components: {
    iconPlus,
    vCard,
    vSelect,
    vModal
  },
  data () {
    return {
      isModalOpen: false,
      activeSelect: 'whatever'
    }
  },
  computed: {
    ...mapState({
      vehicles: state => state.vehicles
    }),
    ...mapGetters(['getOptions']),
    updateSelect () {
      return this.activeSelect === 'whatever'
        ? this.vehicles
        : this.vehicles.filter(element => element.type === this.activeSelect)
    }
  },
  async asyncData ({ store, error }) {
    await store
      .dispatch('GET_VEHICLES')
      .then(res => {
        store.commit('SET_VEHICLES', res)
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: err.message
        })
        return {}
      })
  },
  methods: {
    openModal () {
      this.isModalOpen = true
    },
    optionSelect (selected) {
      this.activeSelect = selected
    },
    closeModal () {
      this.isModalOpen = !this.isModalOpen
    }
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
    transition: 0.5s ease;

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

    &:focus,
    &:active {
      opacity: 0.5;
    }

    @include hovers {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .top {
    margin-bottom: 40px;

    button {
      svg {
        color: $color-secondary;
      }
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
