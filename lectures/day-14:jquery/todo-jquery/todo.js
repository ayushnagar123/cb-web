$(()=>{
    $('#add').click(()=>{
        console.log('add clicked 1')
        $('#users').append(
            `<li>${$('#name').val()}</li>`)
    })
    $('#userform').submit((e)=>{
        e.preventDefault()
        console.log('submitted')
        console.log(e)
    })
})
