<template lang="pug">
  .specification-component
    .description {{ vehicle.specifications_text }}
    .title Features:
    vFeature(
      v-for="feature in features",
      :text="feature.text",
      :title="feature.title",
      :key="feature.title"
      )
      component(:is="feature.icon")
</template>

<script>
import vFeature from '@/components/feature'
import iconPrize from '@/components/icons/icon-prize'
import iconPilot from '@/components/icons/icon-pilot'

export default {
  name: 'specification-component',
  components: {
    vFeature,
    iconPrize,
    iconPilot
  },
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      features: [
        {
          icon: 'iconPrize',
          title: 'A challenge for a true champion',
          text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
          icon: 'iconPilot',
          title: 'Pilot&rsquo;s sweaty hands',
          text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.specification-component {
  margin-bottom: 6px;

  .description {
    margin-bottom: 32px;
  }

  .title {
    margin-bottom: 32px;

    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: var(--title-color);
  }

  .feature-component {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@include sm {
  .specification-component {
    .title {
      margin-bottom: 20px;

      font-size: 20px;
      line-height: 140%;
    }

    .description {
      margin-bottom: 20px;
    }

    .feature-component {
      margin-bottom: 12px;
    }
  }
}
</style>
