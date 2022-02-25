const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
loadUser()

const displayUser = users => {
    const main = document.getElementById('main')
    console.log(users)
    for (const user of users) {
        // console.log(user)
        const div = document.createElement('div')
        div.innerHTML = `
            <p>name: ${user.name.title} ${user.name.first}</P>
            <p>${user.location.city}</p>
            <p>${user.location.country}</p>
            <p>${user.location.street.name}</p>
        `
        main.appendChild(div)
    }
}