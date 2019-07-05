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
    //names or class names in UI once gets change, And that class name should b replaced its a laborious process hence create an Object with series of class names and play around it
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn'//this BTN is in controller module to available here it is sent through parameters
    } 
    return {
        getInput: function() {

            return {
                type:document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description:document.querySelector(DOMStrings.inputDescription).value,
                value:document.querySelector(DOMStrings.inputValue).value
            };
            
        },
        getDomStrings:function() {
            return DOMStrings;
        }//this is the process of sending method as parameter to another module
    }

})();


//here both modules are independent and this havee communicate with the data hence another module comes to the picture
//it takes arguments to communicate between those TWO

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setUpEventListeners = function() {//this is just to structure the code

        var Dom = UICtrl.getDomStrings();

        //First Task; Event Handler
        //ctrlAddItem is named function, ther is no need to call it bcoz once the event triggers the function should perform  
        document.querySelector(Dom.inputBtn).addEventListener('click', ctrlAddItem);

        //Second
        //this is bcoz when the user enters ENTER also it should perform the same function
        document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {//keyCode is a property of event occured in document where as older browsers cannot recognise the KEYCODE property and they use WHICH property
            ctrlAddItem();
        }
        });

    };

    //Third
    var ctrlAddItem = function() {
        //1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        //2. Add the item to th Budget Controller

        //3. Add the item to the UI

        //4. Calculate the Budget

        //5.Update it in UI

    }

    return{
        init:function() {
            console.log('Application has started..');
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();//function call to the event listeners
