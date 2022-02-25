const searchFood = () => {
    const searchFieald = document.getElementById('search-field')
    const searchValue = searchFieald.value
    searchFieald.value = ''
    if (searchValue == '') {
        return alert('no result found')
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }

}

const displaySearchResult = foods => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''
    if (searchResult == null) {
        return alert('No Result Found')
    }
    foods.forEach(food => {
        // console.log(food)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadFoodDetail(${food.idMeal})" class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    })
}

const loadFoodDetail = foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodDetail(data.meals[0]))
}

const displayFoodDetail = food => {
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0, 100)}</p>
            <a href="${food.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    mealDetails.appendChild(div)
}