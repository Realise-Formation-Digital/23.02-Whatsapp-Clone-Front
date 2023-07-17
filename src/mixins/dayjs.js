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
                                    //Wed, 12-07 - 2023: 12: 17: 30
    todayFormattedDate1(timestamp) {
      return dayjs(timestamp).format('ddd, DD-MM-YYYY:HH:mm:ss');
    },
 //12-07-2023:12:16:30, GMT+0200 (Central European Summer Time)
    todayFormattedDate2(timestamp) { 
      'DD-MM-YYYY:HH:mm:ss-Z:+02:00'
    },
    todayFormattedDate3(timestamp) {  
      'DD-MM-YYYY'
    },
    todayFormattedDate4(timestamp) {  
      'DD-MM-YYYY:HH:mm:ss'
    },
    todayFormattedDate5(timestamp) {  
      'DD-MM-YYYY:HH:mm'
    },
  }
}
//aller dans pages/homes pour voir comment utiliser dayjs
export default dayjsMixins