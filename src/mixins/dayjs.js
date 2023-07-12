// define a mixin object
var dayjs = {
    created: function () {
      this.hello()
    },
    methods: {
        today () {
            dayjs();
        },
        formattedDate () {  //12-07-2023:12:16:30                                                              Wed, 12-07-2023:12:17:30
            today.format('DD-MM-YYYY:HH:mm:ss-Z:+05:00','DD-MM-YYYY','DD-MM-YYYY:HH:mm:ss','DD-MM-YYYY:HH:mm','ddd, DD-MM-YYYY:HH:mm:ss');
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