const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
for(let  i = 0; i<a.length;i++){
    if(a[i]%3!==0){
        continue;
    }
    if(a[i]%2===0){
        continue;
    }
    console.log(a[i]);
}