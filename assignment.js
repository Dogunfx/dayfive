/* 
    The interest of a loan is 5 Naira per day on Hush Company
    James collected the sum of 25,000 Naira from Hush company for the period of 45 days
    the program below simulate the interest James is paying for a specific period, you are to arrange the program ,
    using the appropriate structure that will run the program correctly,

    New info
    the company can not give more than 75,000 Naira



*/


let company_interest = 5;
let collected_loan = 25000;
let loan_period = 45;
let specific_period = 1;

let compound_interest = collected_loan + (company_interest * specific_period);

let message_1 = `Hello James, you will be paying ${compound_interest} Naira at the end of ${specific_period} days, for collecting a loan of ${collected_loan}`;

let message_2 = `Hello James, you exceeded your loan period, you loan period should not be more than ${loan_period} days`;

let message_3 = `Hello James your loan days should be more than one day`;

let message_4 = `Hello James, You can not collect more than 75,000 Naira for loan`;


if (specific_period != 1 && specific_period < loan_period) {
    console.log(message_1);
}

if (specific_period > loan_period) {
    console.log(message_2);
}

if (specific_period == 1) {
    console.log(message_3);
}


console.log(message_4);






