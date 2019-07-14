let socket = io()

socket.on('connected',()=>{
    console.log(socket.id)
})

$(function(){
    let inputbox = $('#inputbox')
    let sendchat =$('#sendchat')
    let msglist=$('msglist')
    sendchat.click(()=>{
        socket.emit('send_chat',{
        message: inputbox.val()
        })
    })
    socket.on('recieve_chat', function(data) {
        msglist.append(`<li>${data.message}</li>`)        
    })
})