// Store Value in local Storage ...
const StoreValue = () => {
    if (localStorage.getItem("BlockDetails")) {
        let array = JSON.parse(localStorage.getItem("BlockDetails"));
        let Detailslink = document.querySelector("#Detailslink");
        Detailslink.innerHTML = ""
        for (let i = 0; i < array.length; i++) {
            const num = array[i];
            let DetailsValue = `<div class="DetailsIndex">
        <div class="S-no">${i + 1}</div>
        <div class="Name-show">${num.Name}</div>
        <div class="roll-show">${num.RollNo}</div>
        <div class="class-show">${num.ClassNo}</div>
        <div class="password-show">${num.Password}</div>
        <div class="email-show">${num.Email}</div>
        <div class="Action-show">
            <button onclick="Delete(${i})">Delete</button>
            <button onclick="Delete(${i})"><a href="CRUDE PPRACTICE.HTML">Edit</a></button>
        </div></div>
        `
            Detailslink.insertAdjacentHTML("beforeend", DetailsValue)

            document.querySelectorAll("#Detailslink .DetailsIndex button:nth-child(2)")[i].addEventListener("click", () => {
                let arrayobj = [num.Name, num.RollNo, num.ClassNo, num.Password, num.Email]
                // console.log(arrayobj);
                localStorage.setItem("arrayobj", JSON.stringify(arrayobj))
            })

            // document.querySelectorAll("#Detailslink .DetailsIndex")[i].addEventListener("click", () => {

            // })
        }
    }
}
try {
    StoreValue();
} catch (error) {
    console.log(error);
}
//Delete fuction in crud app...
function Delete(i) {
    let arr = JSON.parse(localStorage.getItem("BlockDetails"))
    let Deletearr = [...arr]
    Deletearr.splice(i, 1)
    arr = [...Deletearr]
    localStorage.setItem("BlockDetails", JSON.stringify(arr))
    StoreValue()
}

//Update fuction in crud app...

function Copy(i) {
    JSON.parse(localStorage.getItem("BlockDetails"));

}
