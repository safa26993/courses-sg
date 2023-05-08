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