function objConvertArr(object){
    const result = Object.keys(object).map(function(key) {
        return [(key), object[key]];
    });
    return result;
}

export default objConvertArr;