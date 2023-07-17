import dayjs from 'dayjs';

// format otherDay    mettre dans votre code import dayjss from..., const otherDay = 'date en fonction du format ci dessous, voir plus bas les ex', const formattedOtherDay = dayjs(otherDay).formatOtherDay();
/*
function formatOtherDay(date) {
  return dayjs(date).format('DD-MM-YYYY:HH:mm:ss-Z:+02:00','DD-MM-YYYY','DD-MM-YYYY:HH:mm:ss','DD-MM-YYYY:HH:mm','ddd, DD-MM-YYYY:HH:mm:ss');
}

// add the format function to the prototype Day.js
dayjs.extend((_, Dayjs) => {
  Dayjs.prototype.formatOtherDay = function () {
    return formatOtherDay(this.$d);
  };
});
*/



let dayjsMixins = {
  methods: {
    //taper dayjs() pour la date d'auj, taper dayjs.local('fr-CH') pour la date local
    //taper la date, ex (12-07-2023)(sans la région, comme Zurich), prenant un exemple ci-dessous
    todayFormattedDate (timestamp) { //12-07-2023:12:16:30, Zurich                                                              Wed, 12-07-2023:12:17:30
      return dayjs(timestamp).format('DD-MM-YYYY:HH:mm:ss-Z:+02:00','DD-MM-YYYY','DD-MM-YYYY:HH:mm:ss','DD-MM-YYYY:HH:mm','ddd, DD-MM-YYYY:HH:mm:ss');
    }
  }
}
//aller dans pages/homes pour voir comment utiliser dayjs
export default dayjsMixins