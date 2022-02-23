function tripleTrouble(one, two, three){
    let newArray = ['']
    for (let i = 0 ; i<one.length ; i++){
        newArray += one[i]
        newArray += two[i]
        newArray += three[i];
    }
    console.log(newArray);
    return newArray;
}

let arr1 = [ 'a', 'a', 'a']
let arr2 = [ 'b', 'b', 'b']
let arr3 = [ 'c', 'c', 'c']

tripleTrouble(arr1, arr2, arr3)