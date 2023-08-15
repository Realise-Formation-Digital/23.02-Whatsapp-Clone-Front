<template>
  <span :style="avatarStyle" v-bind="$attrs"/>
</template>

<script>
export default {

  props: {
    size: {
      type: String,
      default: "",
      required: true
    },
    rounded: {
      type: String,
      default: "",
      required: true
    },
    toyNumber: {
      type: [Number, String],
      default: "",
      default: 1,
      validator(value) {
        return value >= 1 && value <= 18;
      },

      group: {
        type: [Number, String],
        default: 1,
        validator(value) {
          return value >= 1 && value <= 2;
        },
      },
    },

    data() {
      return {
        groups: [
          {
            rows: 3,
            cols: 6,
            //  allowedExtensions : /(\.jpg)$/i,
            img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",


          },

          {
            rows: 3,
            cols: 6,
            img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
          },
          console.log(this.group)
        ],
      }
    },

    computed: {
      currentGroup() {
        return this.groups[this.group - 1]
      },

      posX: {
        get() {
          return (this.toyNumber - 1 % this.currentGroup.cols)
        },
      },

      posY: {
        get() {
          return Math.floor(this.toyNumber - 1 / this.currentGroup.cols)
        }
      },

      avatarStyle: {
        get() {
          return {
            display: "inline-block",
            width: this.size + "px",
            height: this.size + "px",
            "background-image": this.currentGroup.img,
            "background-repeat": "no-repeat",
            "background-size":
              this.size * this.currentGroup.cols +
              "px " +
              this.size * this.currentGroup.rows +
              "px",
            margin: "8px",
            borderRadius: this.rounded + "px",
            backgroundPositionX: `${this.posX * this.size}px`,
            backgroundPositionY: `${this.posY * this.size}px`,
          }
        }
      }
    }
  }
}


</script>