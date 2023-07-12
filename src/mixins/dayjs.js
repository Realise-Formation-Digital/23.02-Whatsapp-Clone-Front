
// define a mixin object
let dayjsMixins = {
    
    methods: {
      //taper dayjs() pour la date d'auj, taper dayjs.local() pour la date local
        //taper la date, ex (12-07-2023), prenant un exemple ci dessous
        formattedDate () { //12-07-2023:12:16:30, Genève                                                              Wed, 12-07-2023:12:17:30
            today.format('DD-MM-YYYY:HH:mm:ss-Z:+02:00','DD-MM-YYYY','DD-MM-YYYY:HH:mm:ss','DD-MM-YYYY:HH:mm','ddd, DD-MM-YYYY:HH:mm:ss');
        },
      }
    }
  
  export default dayjsMixins