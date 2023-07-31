let navLinks = document.querySelectorAll("header nav a");
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((value, index) => {
        let a = document.querySelectorAll("section")[index].offsetHeight;
        // console.log(a,index);
        let b = document.querySelectorAll("section")[index].offsetTop;
        // console.log(b,index);
        // console.log(window.scrollY,index);
        if (window.scrollY + 100 >= b && window.scrollY <= b + a) {
            // console.log(index);
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(`header nav a:nth-child(${index + 1}`).classList.add('active');
            })
        }
        Arrowup()
    })

})
document.querySelector(".img").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("navbar-display-block")
})

function Arrowup() {
    let ArrowUp = document.querySelector(".footer-iconTop")
    ArrowUp.style.display = "none"
    if (window.scrollY >= 350) {
        // console.log(ArrowUp.offsetTop);
        ArrowUp.style.display = ""

    }
}


let form = document.querySelector("form")
let yourMassage = document.querySelector("textarea")
document.querySelector("#submit").addEventListener("click", () => {
    let A = fullName.value.length > 1 && fullName.value.length < 22;
    console.log(A);
    let B =mobileNumber.value.length == 10 == true;
    console.log(B);
    let C = `${emailSubject.value}`.length >= 10;
    console.log(C);
    let D = `${yourMassage.value}`.length > 50 && `${yourMassage.value}`.length <= 1000;
    console.log(D);
    if (!(fullName.value.length == "" && emailAddress.value.length == "" && mobileNumber.value.length == "" && emailSubject.value.length == "")) {
        formvalidation()
    }
    if (A == true && B == true && C == true && D == true) {
        // alert("visha")
        let name = document.querySelector("#fullName").value;
        let email = document.querySelector("#emailAddress").value;
        let emailSubject = document.querySelector("#emailSubject").value;
        let Number = document.querySelector("#mobileNumber").value;
        let Massage = document.querySelector("textarea").value;
        let body = `Name: ${name} <br/> Email: ${email} <br/> Contact Number: ${Number} <br/> Subject: ${emailSubject} <br/> Massage: ${Massage}`
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "kumat9296@gmail.com",
            Password: "1FDC91CE437980D7B50F53F2E83823F71C5D",
            To: 'kumat9297@gmail.com',
            From: "kumat9296@gmail.com",
            Subject: emailSubject,
            Body: body
        }).then((message) => {
            if (message == 'OK') {
                document.querySelector("#formSubmit").innerHTML="Your form is Submited!"
            }
        })
    }
})
const formvalidation = () => {
    function fullNam() {
        if (fullName.value.length == "") {
            fullNameError.innerHTML = "** Please Enter your name"
        }
        else if (fullName.value.length > 1 && fullName.value.length < 22) {
            fullNameError.innerHTML = ""
        }
        else if (fullName.value.length >= 22) {
            // alert("Your Name is two long!")
            fullNameError.innerHTML = "** Your Name is two long!"
        }
    }
    fullNam();
    function emailAddres() {
        if (emailAddress.value.length == "") {
            emailAddressError.innerHTML = "** Please Enter your email."
        }
        else if (!`${emailAddress.value}`.endsWith("@gmail.com")) {
            // alert("Your email is invailed!")
            emailAddressError.innerHTML = "** Your email is invailed!"
            // console.log(`${emailAddress.value}`.endsWith("@gmail.com"));
        }
        else if (!`${emailAddress.value}`.endsWith("@gmail.com") == false) {
            emailAddressError.innerHTML = ""
        }
    }
    emailAddres();
    function mobileNumbe() {
        if (`${mobileNumber.value}`.includes("-") || `${mobileNumber.value}`.includes("+")) {
            mobileNumberError.innerHTML = "** Your Number is Invailed!"
        }
        // else if(/[0-9]/.includes()){
        //     mobileNumberError.innerHTML = "** "
        // }
        else if (mobileNumber.value.length == "") {
            mobileNumberError.innerHTML = "** Please Enter your phone number."
        }
        else if (!`${mobileNumber.value}`.startsWith(7) == !`${mobileNumber.value}`.startsWith(8) == !`${mobileNumber.value}`.startsWith(9) == true) {
            // alert("Your Number is wrong !");
            mobileNumberError.innerHTML = "** Your Number is invailed !"
        }
        else if (mobileNumber.value.length > 0 == true && mobileNumber.value.length < 10 == true) {
            mobileNumberError.innerHTML = "** Please enter right number!"
        }
        else if (mobileNumber.value.length == 10 == true) {
            mobileNumberError.innerHTML = ""
        }
        else {
            mobileNumberError.innerHTML = "** This number is invailed!"
        }
    }
    mobileNumbe();
    function emailSubjec() {
        if (emailSubject.value.length == "") {
            emailSubjectError.innerHTML = "** Please Enter your form subject.."
        }
        else if (`${emailSubject.value}`.length <= 10) {
            // alert("You may write wrong Subject!")
            emailSubjectError.innerHTML = "** You may write wrong Subject!"
        }
        else {
            emailSubjectError.innerHTML = ""
        }
    }
    emailSubjec();
    function yourMassag() {
        if (`${yourMassage.value}`.length <= 50) {
            // alert("You want write min 50 words Massage!")
            document.querySelector(".contact form >p").innerHTML = '** You want write min 50 words Massage!'
        }
        else if (`${yourMassage.value}`.length > 50 && `${yourMassage.value}`.length <= 1000) {
            document.querySelector(".contact form >p").innerHTML = ''
        }
        else {
            document.querySelector(".contact form >p").innerHTML = '** Max 1000 Word massage you send!'
            // alert("Max 100 Word massage you send!")
        }
    }
    yourMassag();
    form.addEventListener("input", () => {
        fullNam();
        emailAddres();
        mobileNumbe();
        emailSubjec();
        yourMassag();

    })
}
