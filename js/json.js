const loadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = comments => {
    // const commentsDiv = document.getElementById('comments')
    comments.forEach(comment => {
        const commentsDiv = document.getElementById('comments')
        const p = document.createElement('p')
        p.innerText = comment.email
        commentsDiv.appendChild(p)
    })
}





