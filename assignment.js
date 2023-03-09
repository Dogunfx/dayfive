/* 

    the problem comes first before the solution

    The interest of a loan is 5 Naira per day on Hush Company
    James collected the sum of 25,000 Naira from Hush company for the period of 45 days
    the program below simulate the interest James is paying for a specific period, you are to arrange the program ,
    using the appropriate structure that will run the program correctly,

    New info
    the company can not give more than 75,000 Naira

    means

    if( when     === true ) {
        what
    }

*/


let company_interest = 5;
let collected_loan = 50000;
let loan_period = 45;
let specific_period = 30;
let maxi_amount_to_collect = 75000;
let customer = "James";


let compound_interest = collected_loan + (company_interest * specific_period);

let message_1 = `Hello ${customer}, you will be paying ${compound_interest} Naira at the end of ${specific_period} days, for collecting a loan of ${collected_loan}`;

let message_2 = `Hello ${customer}, you exceeded your loan period, your loan period should not be more than ${loan_period} days`;

let message_3 = `Hello ${customer} your loan days should be more than one day`; 

let message_4 = `Hello ${customer}, You can not collect more than ${maxi_amount_to_collect}  Naira for loan`;

let message_5 = `Hello ${customer}, Only James can collect loan from our company`;

//where do you tell the user message 5



if(specific_period < loan_period && specific_period != 1 && collected_loan < maxi_amount_to_collect){
 console.log(message_1);
}

if(specific_period > loan_period){
    console.log(message_2);
}

if(specific_period == 1){
    console.log(message_3);
}

if(collected_loan > maxi_amount_to_collect){
    console.log(message_4);
}