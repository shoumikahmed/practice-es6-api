const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = dogList => {
    const main = document.getElementById('main')
    const first10Data = dogList.slice(0, 10)
    console.log(first10Data)

    for (const dog of first10Data) {
        const div = document.createElement('div')
        div.className = "col-lg-4"
        div.innerHTML = `
            <img width="360px" height="250px" src="${dog.image.url}" />
            <h4>${dog.name}</h4>
            <P>weight: ${dog.weight.imperial} imperial</p>
        `
        main.appendChild(div)
    }

}