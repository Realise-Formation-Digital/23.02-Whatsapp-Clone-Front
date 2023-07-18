import dayjs from 'dayjs';

let dayjsMixins = {
  methods: {
    //taper dayjs() pour la date d'auj, taper dayjs.local('fr-CH') pour la date local
                                    //Wed, 12-July-2023:12:17:30
    todayFormattedDate_FullDateWellLongAndFullTime (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMMM-YYYY:HH:mm:ss');
    },                                  //Wed, 12-July-2023:12:17:30.000
    todayFormattedDate_FullDateWellLongAndFullTimeWithMilliSec (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMMM-YYYY:HH:mm:ss.SSS');
    },
                                        //Wed, 12-July-2023:12:17:30
    todayFormattedDate_FullDateWellLongAndTimeWithoutSecond (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMMM-YYYY:HH:mm');
    },
                                        //Wed, 12-July-2023:12:17:30
    todayFormattedDate_FullDateWellLongNoTime (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMMM-YYYY');
    },
                                        //Wed, 12-July-2023:12:17:30.000
    todayFormattedDate_FullDateLongAndFullTimeWithMilliSec (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMM-YYYY:HH:mm:ss.SSS');
    },
                                        //Wed, 12-July-2023:12:17:30
    todayFormattedDate_FullDateLongAndTimeWithoutSecond (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMM-YYYY:HH:mm');
    },
                                        //Wed, 12-July-2023:12:17:30
    todayFormattedDate_FullDateLongNoTime (timestamp) {
      return dayjs(timestamp).format('ddd, DD-MMM-YYYY');
    },
                              //12-07-2023:12:16:30, GMT+0200 (Central European Summer Time)
    todayFormattedDate_FullDateLongAndUTCAndTime (timestamp) { 
      return dayjs(timestamp).format('DD-MMM-YYYY:HH:mm:ss-Z:+02:00')
    },
    todayFormattedDate_FullDateSmall (timestamp) { //17-07-2023
      return dayjs(timestamp).format('DD-MM-YYYY')
    },
    todayFormattedDate_FullDateSmallAndFullTime (timestamp) {  //17-07-2023:16:39:30
      return dayjs(timestamp).format('DD-MM-YYYY:HH:mm:ss')
    },
    todayFormattedDate_FullDateSmallAndTimeWithoutSecond (timestamp) {  //17-07-2023:16:41
      return dayjs(timestamp).format('DD-MM-YYYY:HH:mm')
    },
    todayFormattedDate_FullTime (timestamp) {  //16:58:36
      return dayjs(timestamp).format('HH:mm:ss')
    },
    todayFormattedDate_FullTimeAndMilliSecond (timestamp) {  //16:59:20.000
      return dayjs(timestamp).format('HH:mm:ss.SSS')
    },
  }
}
//aller dans pages/homes pour voir comment utiliser dayjs
export default dayjsMixins