// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000 ){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
      }
      var H = 50;
      var Q = 25;
      var D = 10;
      var N = 5;
      var P = 1;

      var obj = {};
      var a = Math.floor(currency / H);
      if ( a > 0 ) {
        obj.H = a;
      }
      currency = currency % H;
      var b = Math.floor(currency / Q);
      if ( b > 0 ) {
        obj.Q = b;
      }
      currency = currency % Q;
      var c = Math.floor(currency / D);
      if ( c > 0 ) {
        obj.D = c;
      }
      currency = currency % D;
      var d = Math.floor(currency / N);
      if ( d > 0 ) {
        obj.N = d;
      }
      currency = currency % N;
      var e = Math.floor(currency / P);
      if ( e > 0 ) {
        obj.P = e;
      }
      currency = currency % P;
      return obj;
}
