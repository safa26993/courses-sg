
// delete
function deleteArticle() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')

    axios.delete('/article/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        alert('Article was deleted')
        window.location.href = '/article'
    })
    .catch( (err)=> {
        console.log(err)
    })
}
function deleteCours() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')

    axios.delete('/cours/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        alert('lesson was deleted')
        window.location.href = '/cours'
    })
    .catch( (err)=> {
        console.log(err)
    })
}

// Add WYISWYG editor to forms
// tinymce.init({
//     selector: 'textarea#default'
//   });