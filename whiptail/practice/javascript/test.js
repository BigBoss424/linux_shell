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
function send_email(email_to_address, email_body){
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

}

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
        EMAIL: 'sally@example.com'
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
function returnArray(arr){
    return rec =
}
