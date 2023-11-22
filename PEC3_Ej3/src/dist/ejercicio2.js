// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones y salidas indicadas en los comentarios.
var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
for (var key in myHangar) {
    if (myHangar.hasOwnProperty(key)) {
        var plane = myHangar[key];
        console.log("".concat(key, ":").concat(plane.model, "(").concat(plane.npassengers, ")"));
    }
}
