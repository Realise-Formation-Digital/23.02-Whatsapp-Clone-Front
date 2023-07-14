<template>
    <div id="app">
      <VuemojiPicker @emojiClick="handleEmojiClick" />
    </div>
  </template>
  
  <script lang="ts">
  import { VuemojiPicker, EmojiClickEventDetail } from 'vuemoji-picker'
  
  export default{
    
    components: {
      VuemojiPicker
    },
    methods: {
      handleEmojiClick(detail: EmojiClickEventDetail) {},
    
      openEmoji(){
        this.visible = true;
      },

    }
  }
  </script>