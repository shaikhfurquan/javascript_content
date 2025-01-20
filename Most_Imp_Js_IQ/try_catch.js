/*
Exceptional Handeling:- 
Exceptional Handeling in javascript is a mechanism that allow you to handle error & unexpected situations in your code gracefully.


Types of Error:-
1. Syntax error
2.Runtime error
3.Reference error

Various statements in error handling:-
try, catch, throw, finally
*/


/*
try {
    greeting('Welcome')
} catch (err) {
    console.log(err.name + ' : ' + err.message);
}
//ReferenceError : greeting is not defined
*/

/*
try{  
    var a=2;  
    if(a==2)  
    document.write("ok");  
    }  
    catch(Error){  
    document.write("Error found"+e.message);  
    }  
    finally{  
    document.write("Value of a is 2 ");  
    }
*/

try {
    var a = 2;
    if (a == 2)
        console.log("ok");
}
catch (err) {
    console.log("Error Occures" + err.message);
}
finally {
    console.log(`Value of a is ${a}` );
}
//ok
//Value of a is 2 
