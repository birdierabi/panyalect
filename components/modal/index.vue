<template lang="pug">
  transition(name="modal")
    .modal-component
      .top.flex.j-between
        .title Add new vehicle
        button.close.flex.center(@click.prevent="closeModal")
          iconClose
      form(@submit.prevent="sendForm()")
        .modal-img.flex.a-center.j-center
          label(for="id")
            iconAdd
            input.upload(id="file" type="file" @change="fileUpload()" required)
          .image-container(:class="{'above': hasImage}")
        input(placeholder="Name" v-model="name" type="text" name="name" autocomplete="off" required)
        input(placeholder="Description" v-model="description" type="text" name="description" autocomplete="off" required)
        .modal-price
          input(placeholder="Price" v-model="rent" type="text" name="rent" autocomplete="off" max="6" pattern="^[0-9]+$" required)
          span.currency $/h
        vButton.flex.center(type="submit") Complete
</template>

<script>
import { mapMutations } from 'vuex'
import iconClose from '@/components/icons/icon-close'
import iconAdd from '@/components/icons/icon-add-file'
import vButton from '@/components/button'

export default {
  name: 'modal-component',
  components: {
    iconClose,
    iconAdd,
    vButton
  },
  data () {
    return {
      name: null,
      description: null,
      rent: null,
      type: 'custom',
      file: '',
      hasImage: false
    }
  },
  methods: {
    ...mapMutations(['ADD_VEHICLE']),
    fileUpload () {
      const fileInput = document.querySelector('input[type="file"]')
      const imageContainer = document.querySelector('.image-container')
      const file = fileInput.files[0]
      const reader = new FileReader()
      let img
      reader.onload = () => {
        this.hasImage = true
        img = new Image()
        img.src = reader.result
        this.file = img.src
        imageContainer.innerHTML = ''
        imageContainer.append(img)
      }
      reader.readAsDataURL(file)
      img = ''
    },
    closeModal () {
      this.$emit('close-modal')
    },
    addVehicle () {
      const vehicle = {
        id: Date.now().toString(),
        name: this.name,
        description: this.description,
        rent: this.rent,
        type: this.type,
        preview: this.file,
        image: this.file
      }
      this.ADD_VEHICLE(vehicle)
    },
    sendForm () {
      this.addVehicle()
      this.name = this.description = this.rent = ''
      const imageContainer = document.querySelector('.image-container')
      imageContainer.innerHTML = ''
      this.hasImage = false
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-component {
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  padding: 64px 72px;

  background-color: var(--bg-color);
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;

  .title {
    color: var(--title-color);

    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
  }

  .top {
    margin-bottom: 40px;
  }

  .image-container {
    width: 100%;
    height: 100%;
  }

  .close {
    padding: 12px;

    background-color: var(--secondary-color);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.5s ease;
    outline: 0;

    svg {
      color: var(--title-color);
    }

    &:focus,
    &:active {
      background-color: var(--price-color);
    }

    @include hovers {
      &:hover {
        background-color: var(--price-color);
      }
    }
  }

  label {
    position: absolute;
    z-index: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 12px;

    border-radius: 16px;
    background-color: var(--bg-color);

    svg {
      color: var(--button-color);
    }

    input {
      position: absolute;
      top: 0;
      right: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
      cursor: pointer;
    }
  }

  svg {
    display: block;

    width: 24px;
    height: 24px;
  }

  .modal-img {
    width: 456px;
    height: 348px;

    margin-bottom: 24px;

    border-radius: 24px;
    background-color: var(--secondary-color);
  }

  form {
    input {
      padding: 21px 24px;
      width: 100%;
      margin-bottom: 24px;

      font-size: 16px;
      line-height: 14px;
      color: var(--text-color);

      border-radius: 12px;
      background-color: var(--secondary-color);
      outline: none;
    }

    input:last-child {
      margin-bottom: 40px;
    }
  }

  .button-component {
    width: 100%;
    padding: 21px 50px;
  }

  .modal-price {
    position: relative;
  }

  .currency {
    position: absolute;
    top: 20px;
    right: 15px;

    display: block;

    font-size: 16px;
    line-height: 14px;
  }

  .above {
    z-index: 1;
  }
}
</style>
