(function(w, d, undefined) {

    var max         = 100,
        min         = 1,
        dividerFizz = 3,
        dividerBuzz = 5;

    for(var i = min; i <= max; ++i) {
        if(isFizzBuzz(i)) {
            console.log(i, '- Fizz Buzz!');
        } else if(isFizz(i)) {
            console.log(i, '- Fizz!');
        } else if(isBuzz(i)) {
            console.log(i, '- Buzz!');
        } else {
            console.log(i);
        }
    }

    function isFizz (n) {
        return (n % dividerFizz) === 0;
    }

    function isBuzz (n) {
        return (n % dividerBuzz) === 0;
    }

    function isFizzBuzz (n) {
        return (n % dividerFizz) === 0 && (n % dividerBuzz) === 0;
    }

})(window, document);
