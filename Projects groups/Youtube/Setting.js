function Menu() {
    let imgmenu = document.querySelector(".imgmenu");
    let CreateShortIcon = document.querySelectorAll(".createShort .icon");
    // console.log(CreateShortIcon);
    imgmenu.addEventListener("click", () => {
        let CreateShort = document.querySelector(".createShort");
        let Aboutus = document.querySelector("#Aboutus")
        CreateShortIcon.forEach((e, i) => {
            let icon = document.querySelectorAll(".icon")[i]
            let CreateShortI = document.querySelectorAll(".createShort h3")[i];
            CreateShortI.classList.toggle("width")
            icon.classList.toggle("iconPadding")
        })
        Aboutus.classList.toggle("display")
        CreateShort.classList.toggle("CreateShortWidth")
    })
}
try {
    Menu()
} catch (error) {
    console.log(error);
}


let backGroundColor = document.querySelector("#backGroundColor");
let FontstyleColor = document.querySelector("#FontstyleColor");
try {
    backGroundColor.addEventListener("click", () => {

        addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                document.body.style.background = backGroundColor.value
            }
        })
    })
    FontstyleColor.addEventListener("click", () => {

        addEventListener("keydown", (e) => {
            if (e.key == "ArrowUp") {
                document.body.style.color = FontstyleColor.value
            }
        })
    })

} catch (error) {
    console.log(error);
}


function Setting() {
    let Setting = document.querySelector(".value");
    // Setting.style="background: gold;"
    Setting.addEventListener("click", () => {
        let Setting1 = document.querySelector(".value");
        let Setting = document.querySelector("#Setting")
        Setting.classList.toggle("Setting")
        let BFcolor = document.querySelector(".BFcolor")
        BFcolor.classList.toggle("BackFcolor")
        let SettingMargin = document.querySelector(".SettingMargin")
        Setting1.classList.toggle("SettingMargin")
    })
}
try {
    Setting()
} catch (error) {
    console.log(error);
}

// try {
//     a
// } catch (error) {
//     console.log(error);
// }