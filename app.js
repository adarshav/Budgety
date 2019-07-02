//Project planning and architecture
/*
    Here we have to create modules for destructuring the data or work 
    and it also helps for easy and better management of the project so that working on a project seems to be not tedious
 */
//The new way of creating the modules is by creating Immediatly Invoked Function Expressions [IIFE]; the speciality of iife is the methods initialised and functions declared are not available for public and its just private, while returning the object it is available for public with the help of return object we can invoke the functions and etc declared inside the iife...
 
//Totally there are 3 modules in our program
//1.budgetController
// var budgetController = (function() {
//     var x = 23;
// //this is not accessible public
//     var add = function(a) {
//         return x + a;
//     }
// //this can be accessible in public 
//     return {
//         publicTest:function(b) {
//             console.log(add(b));
//         }
//     }

// })();

//Budget Controller
var budgetController = (function() {
    //code starts

})();//this is the synatax of iife 


//UI Controller
var UIController = (function() {
    //Some code here

})();


//here both modules are independent and this havee communicate with the data hence another module comes to the picture
//it takes arguments to communicate between those TWO
var controller = (function(budgetCtrl, UICtrl) {

})(budgetController, UIController);
