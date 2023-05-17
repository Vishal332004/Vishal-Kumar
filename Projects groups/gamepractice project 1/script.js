let mainbottom = parseFloat(window.getComputedStyle(main, null).getPropertyValue('bottom'));
let mainright = parseFloat(window.getComputedStyle(main, null).getPropertyValue('right'))
let mainleft = parseFloat(window.getComputedStyle(main, null).getPropertyValue('left'))
let maintop = parseFloat(window.getComputedStyle(main, null).getPropertyValue('top'))
let mainheight = parseFloat(window.getComputedStyle(main, null).getPropertyValue('height'))
let mainwidth = parseFloat(window.getComputedStyle(main, null).getPropertyValue('width'));
let bodyheight = parseFloat(window.getComputedStyle(body, null).getPropertyValue('height'));
let Score = document.querySelector("#score")
let windowscreenwidth = document.querySelector("body").offsetWidth
let windowscreenHeight = document.querySelector("body").offsetHeight;
console.log(windowscreenwidth);
if (windowscreenwidth < 600 && windowscreenHeight < 700) {
    alert('This gape can\'t play in android')
    document.querySelector("#game-alert").classList.remove("display-none")
    clearInterval(B)
    clearInterval(A)
    delete createnow()
    clearInterval(Scorevalue)
}
else {
    let Scorenum = 0;
    let Scorevalue = setInterval(() => {
        Scorenum += 1;
        Score.innerHTML = "Score :" + Scorenum;
    }, 100);
    //  console.log("hello", mainwidth);
    // console.log(mainright);

    function createnow() {
        console.log(maintop);
        let div1 = document.createElement("div")
        div1.setAttribute("class", "move1")
        move.appendChild(div1)
        let div2 = document.createElement("div")
        div2.setAttribute("class", "move2")
        move.appendChild(div2)
        let rightnow = 0;
        let space = Math.floor(Math.random() * 300);

        function movenow() {
            rightnow += 1;
            let a = 0; let y = 0;
            div1.style.top = a + "px"
            div1.style.bottom = y + "px"
            div1.style.right = rightnow + "px";

            let b = space + 80;
            div1.style.height += b + "px";
            div1.style.width += 100 + "px";
            let x = -space + 350;
            div2.style.height += x + "px";
            div2.style.right = rightnow + "px";
            offsetY = Math.abs(rightnow - mainright)
            offsetX = Math.abs(mainright - 50 - rightnow); console.log("mainbottom", mainbottom);
            if (offsetY >= 0 && offsetX <= 50 && maintop <= b) {
                clearInterval(A);
                clearInterval(B);
                clearInterval(Scorevalue)
                // setTimeout(() => {
                alert(`game over Your Score is1 :${Scorenum}`)
                location.reload()
                console.log("vishal");
                // }, 50);
                // maintop <= b && mainright >=rightnow -100 && mainright <=rightnow + 100 || mainbottom >= x && mainright >=rightnow -100 && mainright <=rightnow + 100 
            }
            if (offsetY >= 0 && offsetX <= 50 && maintop + 116 >= 730 - (-space + 400)) {
                setTimeout(() => {
                    alert(`game over Your Score is :${Scorenum}`)
                    clearInterval(A);
                    clearInterval(B);
                    clearInterval(Scorevalue)
                    location.reload()
                }, 10);
                console.log("vishal1");
                // maintop <= b && mainright >=rightnow -100 && mainright <=rightnow + 100 || mainbottom >= x && mainright >=rightnow -100 && mainright <=rightnow + 100 
            }
            if (maintop >= bodyheight) {
                alert(`game over Your Score is :${Scorenum}`)
                clearInterval(A);
                clearInterval(B);
                clearInterval(Scorevalue)
                location.reload()
                console.log("vishal1");
            }
        }
        let A = setInterval(movenow, 5);
    }
    let B = setInterval(createnow, 2000)

    // handle
    main = document.querySelector("#main");
    let gravity = 2;
    function mainMoveDown() {
        maintop += gravity;
        main.style.top = maintop + "px"
    }
    let C = setInterval(mainMoveDown, 15);
    function jump() {
        maintop -= 30;
        main.style.top = maintop + "px"
    }
    function control(e) {
        if (e.key == "ArrowUp") {
            jump();
        }
        console.log(e);
    }
    addEventListener("keydown", control)
    document.querySelector("#body").addEventListener('click', () => {
        maintop -= 50;
        main.style.top = maintop + "px";
    })

}