let input = document.querySelector("#input")
let searchBtn = document.querySelector("#Search")
let apiKey = '60c6c0de-be6f-4028-a1c9-2b30ea87f623'
let notfound = document.querySelector(".not-found")
let Loading = document.querySelector("span")
let Defination=document.querySelector(".Defination")
let audio=document.querySelector(".audio")
let data;
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    // Get input data
    let word = input.value;
    // call api det data
    if (word === "") {
        alert("word is required;")
    }
    getData(word);
})

async function getData(word) {
    // Ajax call
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);

    const data = await response.json();

    // if data is empty
    if (!data.length) {
        notfound.innerText = "Not result showing..."
        return;
    }
    // if result is suggetions
    if (typeof data[0] === "string") {
        let heading = document.createElement("h3")
        // document.append(heading)
        heading.innerText = `Did you mean?`
        notfound.append(heading)
        for (let i = 0; i <= data.length; i++) {
            const element = data[i];
            let suggetion = document.createElement("span")
            suggetion.classList.add("suggetion")
            suggetion.innerText = element;
            notfound.appendChild(suggetion)
            // Loading.innerText+=data[i]+" , "
        }
        return;
    }

    // Result found...
    Defination.innerText=data[0].shortdef[0]

    // Sound found...
    let sound =data[0].hwi.prs[0].sound.audio;
    // audio.innerHTML=sound;
    if (sound) {
        audio.innerHTML=""
        renderSound(sound)
    }
    console.log(data);
}
function renderSound(sound){
    let soundSrc=`https://media.merriam-webster.com/audio/prons/en/us/mp3/${sound[0]}/${sound}.mp3`
    let aud=document.createElement("audio")
    aud.src=soundSrc;
    aud.controls=true;
    audio.append(aud)

}


// if result is suggetions
// if (typeof data[0] === "string") {
//     let heading = document.createElement("h3")
//     // document.append(heading)
//     heading.innerText = `Did you mean?`
//     notfound.append(heading)
// }
// for (let i = 0; i <= data.length; i++) {
//     const element = data[i];
//     Loading.innerText += data[i] + " , "
// }
// console.log(data);
