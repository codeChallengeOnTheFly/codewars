function minMax(arr) {
    max = arr[0];
    min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if ( max < arr[i]) {
            max = arr[i];
        }

        if( min > arr[i]){
          min = arr[i]
        }
    }

    return [min, max];
}
