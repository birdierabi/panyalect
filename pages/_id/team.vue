<template lang="pug">
  .team-component
    .description {{ vehicle.team_text }}
    .title Qualified specialists
    .team-inner.flex.j-center.wrap
      vSpecialist(
        v-for="specialist in team",
        :specialist="specialist",
        :key="specialist.title"
        )
    .text Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
</template>

<script>
import vSpecialist from '@/components/specialist'

export default {
  name: 'team-component',
  components: {
    vSpecialist
  },
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      team: [
        {
          image: '/img/pilot.jpg',
          title: 'Marvin McKinney',
          text: 'Pilot assistant'
        },
        {
          image: '/img/mechanic.jpg',
          title: 'Savannah Nguyen',
          text: 'Mechanic'
        },
        {
          image: '/img/stewardess.jpg',
          title: 'Courtney Henry',
          text: 'Stewardess'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.team-component {
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

  .specialist-component {
    margin-left: 12px;
    margin-right: 13px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .team-inner {
    margin-bottom: 32px;
  }
}

@include sm {
.team-component {
  .description {
    margin-bottom: 20px;
  }
  .title {
    margin-bottom: 20px;

    font-size: 20px;
    line-height: 140%;
  }

  .specialist-component {
    margin-left: 0;
    margin-right: 0;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .team-inner {
    flex-direction: column;
    margin-bottom: 20px;
  }
}
}
</style>
