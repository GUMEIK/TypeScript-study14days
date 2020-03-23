function sliceArr<T>(arr:T[],n:number){
    if(n > arr.length){
        return arr;
    }
    const newArr:T[] = [];
    for(let i = 0;i < n;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

let arr = ["3","fff"]
sliceArr<string>(arr,6);