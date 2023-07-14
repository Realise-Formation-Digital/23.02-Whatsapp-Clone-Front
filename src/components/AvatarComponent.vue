<template>
  <span :style="avatarStyle" v-bind="$attrs" />
</template>

<script>

export default {
  props: {
    size: {
      type: [Number, String],
      default: 48,
    },
    rounded: {
      type: [Number, String],
      default: 0,
    },
    toyNumber: {
      type: [Number, String],
      default: 1,
      validator(value) {
        return value >= 1 && value <= 18;
      },
    },
    group: {
      type: [Number, String],
      default: 1,
      validator(value) {
        return value >= 1 && value <= 2;
      },
    },
  },
  computed: () => {
    this.currentGroup = this.GROUPS[this.group - 1]
    this.posX = (this.toyNumber - 1) % this.currentGroup.value.cols
    this.posY = Math.floor((this.toyNumber - 1) / this.currentGroup.value.cols)
    this.avatarStyle = {
      display: "inline-block",
      width: this.size + "px",
      height: this.size + "px",
      backgroundImage: this.currentGroup.value.img,
      backgroundRepeat: "no-repeat",
      backgroundSize:
          this.size * this.currentGroup.value.cols +
          "px " +
          this.size * this.currentGroup.value.rows +
          "px",
      margin: "8px",
      borderRadius: this.rounded + "px",
      backgroundPositionX: `-${this.posX.value * this.size}px`,
      backgroundPositionY: `-${this.posY.value * this.size}px`,
    }
  },
  data: () => {
    return {
      GROUPS: [
        {
          rows: 3,
          cols: 6,
          img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
        },
        {
          rows: 3,
          cols: 6,
          img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
        },
      ],
      currentGroup: null,
      posX: null,
      posY: null,
      avatarStyle: null
    }


    const currentGroup = computed(() => GROUPS[props.group - 1]);
    const posX = computed(
        () => (props.toyNumber - 1) % currentGroup.value.cols
    );
    const posY = computed(() =>
        Math.floor((props.toyNumber - 1) / currentGroup.value.cols)
    );

    const avatarStyle = computed(() => ({
      display: "inline-block",
      width: props.size + "px",
      height: props.size + "px",
      backgroundImage: currentGroup.value.img,
      backgroundRepeat: "no-repeat",
      backgroundSize:
          props.size * currentGroup.value.cols +
          "px " +
          props.size * currentGroup.value.rows +
          "px",
      margin: "8px",
      borderRadius: props.rounded + "px",
      backgroundPositionX: `-${posX.value * props.size}px`,
      backgroundPositionY: `-${posY.value * props.size}px`,
    }));

    return {
      avatarStyle,
    };
  }
}
</script>