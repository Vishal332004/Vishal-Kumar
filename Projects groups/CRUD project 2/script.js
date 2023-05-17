let Submit = document.querySelector("#Submit");
try {
    if (JSON.parse(localStorage.getItem("BlockDetails"))==null) {
        localStorage.setItem("BlockDetails","[]")
    }
} catch (error) {
    console.log(error);
}
// Submit button give life Now...
Submit.addEventListener("click", () => {
    let Name = document.querySelector("#Name").value;
    let RollNo = document.querySelector("#Roll-No").value;
    let ClassNo = document.querySelector("#Class-No").value;
    let Password = document.querySelector("#Password").value;
    let Email = document.querySelector("#Email").value;
    
    let arr=JSON.parse(localStorage.getItem("BlockDetails"))

    if (Name == "" || RollNo == "" || ClassNo == "" || Password == "" || Email == "") {
        alert("Please Complite fill the form...")
    }
    else {
        let Object = {
            "Name": Name,
            "RollNo": RollNo,
            "ClassNo": ClassNo,
            "Password": Password,
            "Email": Email
        }
        console.log(Object);
        // let array = []
        arr.push(Object)
        localStorage.setItem("BlockDetails",JSON.stringify(arr));
        // alert(arr);
    }
})
let arrayobj=JSON.parse(localStorage.getItem("arrayobj"));
// if (arrayobj.length==0) {
//     console.log("error here");
// }
// else{
//     console.log(arrayobj);
//     let Name = document.querySelector("#Name").value;
//     Name=`${arrayobj[0]}`
// }

document.querySelector("#Name").value=`${arrayobj[0]}`;
document.querySelector("#Roll-No").value=`${arrayobj[1]}`;
document.querySelector("#Class-No").value=`${arrayobj[2]}`;
document.querySelector("#Password").value=`${arrayobj[3]}`;
document.querySelector("#Email").value=`${arrayobj[4]}`;


localStorage.setItem("arrayobj","")