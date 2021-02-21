

//
// Group by prototype
//
// eslint-disable-next-line no-extend-native
Object.prototype.groupBy = function (source,sz = 1000) {

    const result = [];
    var size = 0;
    var batchresult = [];

    source.forEach(x => {
        size++;
        batchresult.push(x);

        if (size == sz) {
            result.push(batchresult);
            batchresult = [];
            size = 0;
        }
    });

    if (batchresult.length > 0) {
        result.push(batchresult);
    }

    // console.log('Batch: ' + JSON.stringify(result));

    return result;
}