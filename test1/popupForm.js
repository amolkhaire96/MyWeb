
// Validating Empty Field
function check_empty() {

    var fullName, email, mobile, query;

    fullName = document.getElementById('fullname').value;
    email = document.getElementById('email').value;
    mobile = document.getElementById('mobile').value;
    query = document.getElementById('query').value;

    // if ( fullName == "" || email == "" || mobile == "" || query == "" ) {
    //
    //     alert("Fill All Fields !");
    //
    // } else {

        document.getElementById('form').submit();
        sendEmail(fullName, email, mobile, query);
    // }
}
//Function To Display Popup
function div_show() {
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('abc').style.display = "none";
}

function sendEmail(fullName, email, mobile, query) {
    // alert(fullName);
    Email.send({
        Host: "smtp.gmail.com",
        Username : "amolkfreelancer@gmail.com",
        Password : "amolkfreelancer@123",
        To : 'amolkhaire96@gmail.com',
        From : "amolkhaire96@gmail.com",
        Subject : "Enquiry Name: "+fullName+" - "+mobile,
        Body : "<b>Hi Amol,</b><br><br>"+
        "There is Enquiry from student whose details are below<br><br>" +
        "<b>Name:"+ fullName+"</b><br>" +
        "<b>Email:"+ email +"</b><br>" +
        "<b>Mobile:"+ mobile + "</b><br>" +
        "<b>Query:"+ query + "</b><br>" +
        "Thanks,"+"<br>" +
        "Amol Khaire"
    })
        .then(function(message){
            alert("Form Submitted Successfully...")
        });
}