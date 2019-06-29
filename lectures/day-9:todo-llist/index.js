// window.addEventListener('load', function () {
//     const addButton = document.getElementById('addbutton')
//     addButton.addEventListener('click', function () {
//         const songList = document.getElementById('songList')
//         const input = document.getElementById('inputbox')

//         songList.innerHTML += "<li>" + input.value + "</li>"
//         input.value = ""
//     })
// })


const state = [{
    title: 'Endgame',
    striked:false,
    // isstriked()
}]

function render (state) {
    // const html = state.reduce(function (acc, song) {
    //     return acc + "<li>" +  song.title + "</li>"
    // }, "")
    // return html

    let html = ""
    // var isstriked= function(){
    //     li.addEventListener('click',function(){
    //         striked=true
    //     })
    // }
    // isstriked()
    for(let i=0; i< state.length; i++) {
        if (state[i].striked) {
            html += `<li class="strike">${state[i].title}</li>`
        } else {
            html += `<li>${state[i].title}</li>`
        }
    }

    return html
}

function paint () {
    const songList = document.getElementById('songList')
    songList.innerHTML = render(state)
}


window.onload = function () {
    const addButton = document.getElementById('addbutton')
    addButton.addEventListener('click', function () {
        const input = document.getElementById('inputbox')
        state.push({
            title: input.value,
            striked: false
        })
        paint()
    })

paint()
const songList=document.getElementById("songList")
songList.addEventListener('click',function(e){
    const title=e.target.innerHTML
    const selectedSong = state.find(function(song){
        return song.title ===title
    })
    selectedSong.striked=!selectedSong.striked
    paint()
})
document.getElementById("binButton").addEventListener('click',function(){
    state.filter(function(song){
        
    })
})
}