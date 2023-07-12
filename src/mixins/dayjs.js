// define a mixin object
var dayjs = {
    created: function () {
      this.hello()
    },
    methods: {
        today () {
            dayjs();
        },
        formattedDate () {
            today.format('DD-MM-YYYY-HH-mm-ss-Z:+05:00','DD-MM-YYYY','DD-MM-YYYY-HH-mm-ss','DD-MM-YYYY-HH-mm');
        },
        localDate () {
            dayjs.local()
        }

      }
    }
    
 
  
  
  // define a component that uses this mixin



//   var Component = Vue.extend({
//     mixins: [myMixin]
//   })
  
//   var component = new Component() // => "hello from mixin!"