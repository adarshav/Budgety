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
    return {
        getInput: function() {
            var type = document.querySelector('.add__type').value; //will be either inc or exp
            var description = document.querySelector('.add__description').value;
            var value = document.querySelector('.add__value').value;
            
        }
    }

})();


//here both modules are independent and this havee communicate with the data hence another module comes to the picture
//it takes arguments to communicate between those TWO

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    //Third
    var ctrlAddItem = function() {
        //1. Get the field input data

        //2. Add the item to th Budget Controller

        //3. Add the item to the UI

        //4. Calculate the Budget

        //5.Update it in UI
        console.log('It works');
    }

    //First Task; Event Handler
    //ctrlAddItem is named function, ther is no need to call it bcoz once the event triggers the function should perform  
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //Second
    //this is bcoz when the user enters ENTER also it should perform the same function
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {//keyCode is a property of event occured in document where as older browsers cannot recognise the KEYCODE property and they use WHICH property
            ctrlAddItem();
        }

    })

})(budgetController, UIController);
