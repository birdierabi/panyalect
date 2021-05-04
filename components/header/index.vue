<template lang="pug">
  header.header-component.wrapper.flex.j-between.a-center
    nuxt-link(to="/").logo
      iconLogo
    p World's first affordable airsharing
    .header-inner.flex.j-between
      button.theme.flex(@click="toggleTheme")
        iconMoon(v-show="!isNightMode")
        span(v-show="!isNightMode") Night mod
        iconSun(v-show="isNightMode")
        span(v-show="isNightMode") Day mod
      .nav
        button
          iconChat
        button
          iconNotification
    vAccount
</template>

<script>
import iconLogo from '@/components/icons/icon-logo'
import iconMoon from '@/components/icons/icon-moon'
import iconSun from '@/components/icons/icon-sun'
import iconChat from '@/components/icons/icon-chat'
import iconNotification from '@/components/icons/icon-bell'
import vAccount from '@/components/account'

export default {
  name: 'header-component',
  components: {
    iconLogo,
    iconMoon,
    iconSun,
    iconChat,
    iconNotification,
    vAccount
  },
  data () {
    return {
      isNightMode: false
    }
  },
  mounted () {
    this.switchTheme()
  },
  methods: {
    switchTheme () {
      const currentTheme = localStorage.getItem('theme')
      if (currentTheme) {
        document.documentElement.dataset.theme = currentTheme
        if (currentTheme === 'dark') {
          this.isNightMode = true
        }
      }
    },
    toggleTheme () {
      if (!this.isNightMode) {
        this.isNightMode = true
        document.documentElement.dataset.theme = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        this.isNightMode = false
        document.documentElement.dataset.theme = 'light'
        localStorage.setItem('theme', 'light')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-component {
  width: 100%;
  padding-top: 48px;
  padding-bottom: 20px;

  .logo {
    transition: 0.5s ease;

    svg {
      display: block;
      width: 171px;
      height: 48px;

      color: var(--logo-color);
    }

    &:focus,
    &:active {
      svg {
        opacity: 0.7;
      }
    }

    @include hovers {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  p {
    flex-grow: 0.52;
    margin-left: 20px;

    font-size: 16px;
    line-height: 152%;
  }

  .header-inner {
    flex-grow: 0.18;
  }

  button {
    padding: 5px;
    margin-left: 7px;
    margin-right: 7px;

    font-family: $font-family-default;
    font-size: 16px;
    line-height: 152%;
    color: var(--svg-color);

    outline: 0;
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s ease;

    svg {
      display: block;
      width: 24px;
      height: 24px;

      color: var(--svg-color);
      transition: 0.5s ease;
    }

    span {
      display: block;
      margin-left: 16px;

      user-select: none;
    }

    &:focus,
    &:active {
      color: var(--button-color);

      svg {
        color: var(--button-color);
      }
    }

    @include hovers {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .theme {
    min-width: 132px;
  }
}

@include main {
  .header-component {
    p {
      display: none;
    }
  }
}

@include sm {
  .header-component {
    padding-top: 56px;
    padding-bottom: 10px;

    .logo {
      svg {
        width: 113px;
        height: 32px;
      }
    }

    .header-inner {
      flex-grow: 1;
      justify-content: flex-end;
      margin-right: 16px;
    }

    button {
      margin-left: 3px;
      margin-right: 3px;

      svg {
        width: 20px;
        height: 20px;
      }

      span {
        display: none;
      }
    }

    .theme {
      min-width: unset;
    }
  }
}
</style>
