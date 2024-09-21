
/*
Break:- Break statement stop the entire process of the loop.

Continue:- Continue statement only stop the current iteration of the loop.
*/

//if i=5 the code will exit immediately.
for (let i=1; i<=10; i++){
    if(i==5){
    break;
    }
    console.log(i);
}
//1,2,3,4


for (let j=1; j<=10; j++){
    if(j==5){
    continue;
    }
    console.log(j);
}
//1,2,3,4,5,6,7,8,9,10
