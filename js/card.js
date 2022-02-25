const loadCard = () => {
    const input = document.getElementById('input-value')
    const error = document.getElementById('error')
    const inputValue = parseInt(input.value)
    if (isNaN(inputValue) || inputValue == "") {
        // alert('please input number')
        error.innerText = 'Please give a Number'
        input.value = ''
        main.innerHTML = ''
    }
    else if (inputValue <= 0) {
        error.innerText = 'please give a positive number'
        input.value = ''
        main.innerHTML = ''
    }
    else if (inputValue > 52) {
        error.innerText = 'this page has only 52 elements'
        input.value = ''
        main.innerHTML = ''
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => displayCard(data.cards))
        input.value = ''
        error.innerHTML = ''
        main.innerHTML = ''
    }
}

const displayCard = cards => {
    const main = document.getElementById('main')
    for (const card of cards) {
        console.log(card)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mb-3')
        div.classList.add('mt-5')
        div.innerHTML = `
        <div class="card" style="width: 14rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
                <a onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See Details</a>
            </div>
        </div>
        `
        main.appendChild(div)
    }
}

const cardDetails = code => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement('div')
            main.innerHTML = ''
            div.innerHTML = `
            <div class="card" style="width: 14rem;">
                <img src="${singleCard.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${singleCard.suit}</h5>
                    <p class="card-text">${singleCard.code}</p>
                </div>
            </div> 
            `
            main.appendChild(div)
        })
}