<template>
  <span :style="avatarStyle" v-bind="$attrs"/>
</template>

<script>
export default {

  props: {
    size: {
      type:  String,
      default: "",
      required: true
    },
    rounded: {
      type:  String,
      default:"",
      required: true
    },
    toyNumber: {
      type:  Number,
      default: "",
      required: true
      // validator(value) {
      //   return value >= 1 && value <= 2;
      // },
    },
    group1: {
      type:  String,
      default: "",
      required: false
    },
    group2: {
      type:  String,
      default: "",
      },
    },
 
  data() {
    return {
      currentGroup: {
      group1:[
        {rows: 3,
        cols: 6,
        img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
        }
      ],

      group2: [
        {
        rows: 3,
        cols: 6,
        img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
        }
      ],
      }
    }
  },

  computed: {
    currentGroup: {
      get() {
        return [this.group1.length - 1] && [this.group2.length - 1] ; 
      }
    },
    posX: {
      get() {
        return (this.toyNumber.group1 - 1) &&(this.toyNumber.group2 - 1) % this.currentGroup.cols
      },
    },
    
    posY: {
      get() {
        return Math.floor((this.toyNumber - 1) / this.currentGroup.cols)
      }
    },

    avatarStyle: {
      get() {
        return {
          display: "inline-block",
          width: this.size + "px",
          height: this.size + "px",
          backgroundImage: this.currentGroup.img,
          backgroundRepeat: "no-repeat",
          backgroundSize:
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



</script>