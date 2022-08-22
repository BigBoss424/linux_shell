//Question 1
//Question 1
let rec = {
    FIRST_NAME: 'John',
    LAST_NAME: 'Smith',
    EMAIL: 'john@example.com',
    PHONE_NUMBER: '888-777-6666',
    STREET: '1234 Ohio St',
    CITY: 'Evansville',
    STATE: 'IN',
    POSTAL_CODE: '47701',
    COUNTRY: 'US'
};
//email_body needs to contain first name, last name, phone number, and mailing address
//Using server-side Javascript, write code that would build the email HTML and use the 
//aforementioned function to send an email to the customer.

    email_body = {
        fName: rec.FIRST_NAME,
        lName: rec.LAST_NAME,
        phoneNum: rec.PHONE_NUMBER,
        mailAddress: [
            rec.STREET,
            rec.CITY,
            rec.STATE,
            rec.POSTAL_CODE
        ]
    }

    email_to_address = rec.EMAIL;

    


//Question 2

//Consider the array of objects
let recs1 = [
    {
        ID: 1,
        NAME: 'John',
        EMAIL: 'john@example.com',
        SSN: '123'
    },
    {
        ID: 2,
        NAME: 'Sally',
        EMAIL: 'sally@example.com',
        SSN: '456'
    },
    {
        ID: 3,
        NAME: 'Angie',
        EMAIL: 'angie@example.com',
        SSN: '789'
    }
];
//Write code that returns the same array of objects without the key "SSN"
const newrecs = recs1.map(({SSN, ...rest}) => {
    return rest;
});
console.log(newrecs);

recs1.forEach(object => {
    delete object['SSN'];
});
console.log(recs1);




//Question 4
pdf = {
    printBackground: true,
    margin: {
        top: "30px",
        right: "0px",
        bottom: "30px",
        left: "0px"
    }
};

//Return the margins from the input object
function parse_margin(pdf = {}){
    
    return pdf.margin;
}
parse_margin(pdf);
console.log(parse_margin(pdf));

//Question 5
//Compose a SQL query to select the top
//100 active sales reps by volume of sales
//for the prior 30 days.

//select the top 100 active sales
//select from salesrep, SUM(sales) as salesVolume
//from salesrep a join sales b on a.salesrep_id = b.salesrep_id
//group by salerep_name
//order by salesVolume DESC 
//LIMIT 100
//where sales_date > now() - INTERVAL 30 day;
// by volume

//for the prior 30 days
//where sales_date > now() - INTERVAL 30 day;