// let now = new Date;
// let thisYear = now.getYear()
// if (thisYear < 1900) {
//   thisYear += 1900
// }

// let birthYear = prompt("Enter your year of birth");
// let result = thisYear - birthYear;

// document.write(`I was born   ${result}   years ago`);


// const daysInYear = 365.25;
// const daysInWeek = 7;
// const yearsInLifetime = 80;

// const weeksInALifetime = daysInYear / daysInWeek * yearsInLifetime



// document.write(weeksInALifetime);

// let timeOfDay = new Date().getHours();


// if (timeOfDay => 8 && timeOfDay <=16) {
//     document.write("It's Morning!")

//     } else if (timeOfDay > 16 && timeOfDay <=23) {
//     document.write("It's Evening!")
//     } else {
//     document.write("It's Night!")
// }


// const sandwichCalculator = (bread, cheese) => {
//     let sandwichesNumber = bread / 2;

//     if (cheese < sandwichesNumber) {
//         return cheese;
//     }

//     return sandwichesNumber;
//   }

// sandwichCalculator();


// for (var i = 10; i >= 0; i--) {
  
//  alert(i);

// }
// alert("Blast Off!");

// let products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];

// for (i=0; i<products.length; i++) {
//   console.log(products[i]);
// }

// //Functional loop


// const products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];

// products.forEach(element => console.log(element));

/* Pizza Exercise */

var toppings = ['Cheese', 'Salami', 'Bits', 'Tomatoes'];

// function  makePizza (toppings) {
//     return (`A tasty pizza with ${toppings.join(' and ')}`);
// }

/* the same with arrow function */

makePizza = (toppings) => (`A tasty pizza with ${toppings.join(' and ')}`);

// makePizza(toppings);


/* ~~~ Write a short function to capitalise every element of the array. ~~~ */

function Capitalize(arr) {
    newArr = arr.map(x => x.toUpperCase());
    return newArr;
}


/* jQuery */



// $(function() {
//     $("body").css({
//         'color' : 'red',
//         'font-size' : '16px',
//         'padding' : '15px'
//      });
//   });


// $(function() {
//     $("h2").html("Hello jQuery");
//   });


  $(function() {
    $("body").append('<p>Hi from jQuery</p>')
  });

  $(function() {
    $("p").append('<a> hyperlink</a>');
  });

  $(function() {
    $("a").attr('href', 'http://www.google.com');
  });

  $(function() {
    $(".clickable").click(function() {
      alert("I can't believe you just did that!");
    });
  });