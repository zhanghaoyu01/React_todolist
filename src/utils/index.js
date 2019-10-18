//冒泡排序2.0(默认从小到大)
function bubbleSort ( arr ) {
    var i = arr.length - 1; //初始时,最后位置保持不变　　
    while ( i > 0 ) {
        var pos = 0; //每趟开始时,无记录交换
        for ( let j = 0; j < i; j++ ) {
            if ( arr[ j ] > arr[ j + 1 ] ) { //>从小到大,<从大到小
                let tmp = arr[ j ];
                pos = j; //记录交换的位置
                arr[ j ] = arr[ j + 1 ];
                arr[ j + 1 ] = tmp;
            }
        }
        i = pos; //为下一趟排序作准备
    }
    arr.reverse();  //* 将从小到大
    return arr;
}


export function downSort ( arr ) {
    let mun = []
    arr.forEach( elm => {
        mun.push( elm.id )
    } );
    bubbleSort( mun );
    return mun[0]

}



