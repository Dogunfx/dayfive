/* 
    The interest of a loan is 5 Naira per day on Hush Company
    James collected the sum of 25,000 Naira from Hush company for the period of 45 days
    the program below simulate the interest Jame is paying for a specific period, you are the arrange the program ,
    using the appropriate structure that will run the program correctly
*/


let company_interest = 5;
let collected_loan  = 25000;
let days = 23;
let loan_period =45;

let compound_interest = collected_loan + ( company_interest * days);

let message_1 = `Hello James, you will be paying ${compound_interest} at the end of ${days} days, for collecting a loan of ${collected_loan}`;

let message_2 = `Hello James, you exceeded your loan period, you loan period should not be more than ${loan_period} days`; 

let message_3 = `Hello James you loan days should be more than one day`;

console.log(message_1);
console.log(message_2);
console.log(message_3);
