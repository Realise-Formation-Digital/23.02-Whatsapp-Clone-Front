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
            today.format('DD-MM-YYYY-HH-MM-SS');
        }

      }
    }
    
 
  
  
  // define a component that uses this mixin



//   var Component = Vue.extend({
//     mixins: [myMixin]
//   })
  
//   var component = new Component() // => "hello from mixin!"