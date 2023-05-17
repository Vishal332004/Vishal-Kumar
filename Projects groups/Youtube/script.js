let apiKey = "AIzaSyBDferBRFTodDpbE_RDEQKm5RSBNOHrznw";
let a = fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10000&regionCode=IN&key=${apiKey}`)
    .then((e) => {
        return e.json()
    })
    .then((e) => {
        console.log(e)
        try {
            append(e.items)
            // findlinK(e.items)
        } catch (error) {
            console.log(error);
        }

    })




function append(data) {
    // >>>>>>>>>>>>>>>>>>>>>> html first page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html first page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html first page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html first page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<

    // clear html home page unwanted videos
    const Indexhome = () => {
        if (data.length >= 1) {
            document.querySelector("#main").innerHTML = ""
        }
        let main = document.getElementById("main");
        data.forEach(({ snippet, id }) => {
            // console.log(snippet);
            let img = snippet.thumbnails.high.url;
            let Cimg = snippet.thumbnails.default.url
            let title = snippet.title;
            let channelTitle = snippet.channelTitle;
            // Channel box container
            let a = document.createElement("a")
            a.href = "PlayVideo.html";
            a.innerHTML = `<div>
            <img src="${img}" alt="">
            <p class="Title">${title}</p>
            <div>
                <img src="${Cimg}" alt="">
                <p>${channelTitle}</p>
            </div>
        </div>`
            main.append(a)
        });


        //  this decreasing title lengths

        for (let i = 0; i < data.length; i++) {
            let titl = data[i].snippet.title;
            // console.log(titl);
            if (titl.length >= 52) {
                let newTitle = titl.replace(titl.slice(50), "...more")
                document.querySelectorAll(".Title")[i].innerText = newTitle;

            }

        }

        // find video links to play videos

        let link = document.querySelectorAll("#main>a")
        link.forEach((value, i) => {
            // console.log(value);
            // console.log(i);
            value.addEventListener("click", () => {
                let videoid = data[i].id;
                let obj = {
                    videolink: `https://www.youtube.com/embed/${videoid}`,
                    chlogo: data[i].snippet.thumbnails.default.url,
                    chviews: data[i].statistics.viewCount,
                    chlike: data[i].statistics.likeCount,
                    chname: data[i].snippet.channelTitle,
                    vidname: data[i].snippet.title,
                    viddescription:data[i].snippet.description
                }
                // localStorage.setItem("vishal", `https://www.youtube.com/embed/${videoid}`)
                localStorage.setItem("keyram", JSON.stringify(obj))
            })
        })
    }
    try {
        Indexhome();
    } catch (error) {
        console.log(error);
    }

    // >>>>>>>>>>>>>>>>>>>>>> html second page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html second page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html second page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html second page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<

    const htmlplayvideo = () => {
        // clear html home page unwanted videos
        if (data.length >= 1) {
            document.querySelector("#Videolist").innerHTML = ""
        }

        let Videolist = document.getElementById("Videolist");

        data.forEach(({ snippet, statistics }) => {
            // console.log(snippet);
            let img = snippet.thumbnails.high.url;
            let Cimg = snippet.thumbnails.default.url
            let title = snippet.title;
            let channelTitle = snippet.channelTitle;
            // for (let i in data.length){
            let views = statistics.viewCount;
            // }
            // Channel box container



            let a = document.createElement("a")
            a.href = "PlayVideo.html"
            a.innerHTML = `<div>
            <img class="imgmain" src="${img}" alt="">
            <div>
                <h4 class="Title">${title}</h4>
                <div>
                    <img src="${Cimg}" alt="">
                    <div class="Titlelogo">
                        <p>${channelTitle}</p>
                        <p>${views} Views</p>
                    </div>
                </div>
            </div>
        </div>`

            Videolist.append(a)
        })
        for (let i = 0; i < data.length; i++) {
            // const element = array[i];
            let titl = data[i].snippet.title;
            // console.log(titl);
            if (titl.length >= 52) {
                let newTitle = titl.replace(titl.slice(50), "...")
                let vi = document.querySelectorAll(".Title")[i].innerText = newTitle;
                // console.log(vi);

            }

        }


        // link find for playing videos
        let Videolista = document.querySelectorAll("#Videolist>a")
        Videolista.forEach((value, i) => {
            value.addEventListener("click", () => {
                let videoid = data[i].id;
                let obj = {
                    videolink: `https://www.youtube.com/embed/${videoid}`,
                    chlogo: data[i].snippet.thumbnails.default.url,
                    chviews: data[i].statistics.viewCount,
                    chlike: data[i].statistics.likeCount,
                    chname: data[i].snippet.channelTitle,
                    vidname: data[i].snippet.title,
                    viddescription:data[i].snippet.description
                }
                // localStorage.setItem("vishal", `https://www.youtube.com/embed/${videoid}`)
                localStorage.setItem("keyram", JSON.stringify(obj))
            })
        })
    }
    try {
        htmlplayvideo()
    } catch (e) {
        console.log(e);
    }
    // >>>>>>>>>>>>>>>>>>>>>> html third page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html third page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html third page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>>> html third page of youtube clone <<<<<<<<<<<<<<<<<<<<<<<<<<<
    const htmlsearchpage = () => {
        // clear html home page unwanted videos
        if (data.length >= 1) {
            document.querySelector("#maincontainer").innerHTML = ""
        }
        let main = document.getElementById("maincontainer");
        data.forEach(({ snippet, id, statistics }) => {
            // console.log(snippet);
            let img = snippet.thumbnails.high.url;
            let Cimg = snippet.thumbnails.default.url
            let title = snippet.title;
            let channelTitle = snippet.channelTitle;
            let views = statistics.viewCount;
            let description=snippet.description
            // Channel box container
            let a = document.createElement("a")
            a.href = "PlayVideo.html";
            a.innerHTML = `<img src="${img}" alt="">
            <div class="titleheading">
                <h4 class="Title">${title}</h4>
                <p class="views">${views} Views</p>
                <div>
                    <img src="${Cimg}" alt="">
                    <p>${channelTitle}</p>
                </div>
                <div class="discriptions">${description}</div>
            </div>`
            main.append(a)
        });
        for (let i = 0; i < data.length; i++) {
            let titl = data[i].snippet.title;
            // console.log(titl);
            if (titl.length >= 64) {
                let newTitle = titl.replace(titl.slice(64), "...more")
                let vi = document.querySelectorAll(".Title")[i].innerText = newTitle;
                // console.log(vi);

            }

        }
        for (let i = 0; i < data.length; i++) {
            let disc = data[i].snippet.description;
            // console.log(disc);
            if (disc.length >= 150) {
                let newTitle = disc.replace(disc.slice(150), "...more")
                let vi = document.querySelectorAll(".titleheading .discriptions")[i].innerHTML = newTitle;
                // console.log(vi);

            }

        }

        // link find of searchpage using now

        let link = document.querySelectorAll("#maincontainer>a")
        link.forEach((value, i) => {
            // console.log(value);
            // console.log(i);
            value.addEventListener("click", () => {
                let videoid = data[i].id;
                let obj = {
                    videolink: `https://www.youtube.com/embed/${videoid}`,
                    chlogo: data[i].snippet.thumbnails.default.url,
                    chviews: data[i].statistics.viewCount,
                    chlike: data[i].statistics.likeCount,
                    chname: data[i].snippet.channelTitle,
                    vidname: data[i].snippet.title,
                    viddescription:data[i].snippet.description
                }
                // localStorage.setItem("vishal", `https://www.youtube.com/embed/${videoid}`)
                localStorage.setItem("keyram", JSON.stringify(obj))
            })
        })
    }
    try {
        htmlsearchpage();
    } catch (error) {
        console.log(error);
    }

}

// function findlinK(data) {
//     let link = document.querySelectorAll("#main>a")
//     link.forEach((value, i) => {
//         console.log(value);
//         console.log(i);
//         value.addEventListener("click", () => {
//             let videoid = data[i].id;
//             let obj = {
//                 videolink: `https://www.youtube.com/embed/${videoid}`,
//                 chlogo: data[i].snippet.thumbnails.default.url,
//                 chviews: data[i].statistics.viewCount,
//                 chname: data[i].snippet.channelTitle,
//                 vidname: data[i].snippet.title
//             }
//             // localStorage.setItem("vishal", `https://www.youtube.com/embed/${videoid}`)
//             localStorage.setItem("keyram", JSON.stringify(obj))
//         })
//     })
// }
// console.log(localStorage.getItem("vishal"));

try {
    document.querySelector(".search a").addEventListener("click", () => {
        let inputvalue = document.querySelector("#Enterkeydown").value;
        localStorage.setItem("king", inputvalue)
    })
} catch (error) {
    console.log(error);
}