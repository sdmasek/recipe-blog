//access the heart icon
const heartIcon = document.querySelector(".svg-icon");
const recipeCard = document.querySelector(".rcp-card");
const recipeSection = document.querySelector(".rcp-card-container");
const searchInput = document.querySelector(".form-control");
const form = document.querySelector("form");
const recipeSearchTerm = document.querySelector("H4");

// const recipeUrl = "www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
//access the recipe card
// const recipe = document.querySelector(".rcp-card");
// const recipes = [
//     `easy pulled pork tacos, creamy veggie curry, savory butter lemon salmon,
//     eggs benedict, strawberry salad, summer mandarin salid, pan seared bass

//     `

// ];

recipeDiv = document.createElement("div");
recipeLi = document.createElement("li");

recipeDiv.className = "recipe-search-container";
recipeLi.className = "recipe-search-item";
//recipes is just the callback, you don't have to actually use the
//recipes array for this
displaySearch = (recipes) => {
    for (let i = 0; i < recipes.length; i++) {
        //use pre-made variables to store the newly created innerHTML elements in
        recipeLi.textContent = searchInput.value;
        console.log(searchInput.value);
        recipeDiv.innerHTML = `
            <ul>
            <li class="recipe-search-item">${recipes}</li>
            </ul>
        `;

    }
    form.appendChild(recipeDiv);
    if (recipeLi.textContent === "") {
        form.removeChild(recipeDiv);
    }
}

const recipeTitles = document.querySelectorAll("h4");

//search for recipes 
searchInput.addEventListener("keyup", (e) => {
    //switch the search value to lowercase
    let search = e.target.value.toLowerCase();
    for (let i = 0; i < recipeTitles.length; i++) {
        let recipeText = recipeTitles[i].textContent;

        if (recipeText.toLowerCase().includes(search)) {
            console.log(recipeText);
            displaySearch(recipeText);
        }
    }
});

recipeCard.addEventListener("click", (e) => {
    const recipeModal = document.createElement("div");
    recipeModal.className = "recipe-modal";
    // const recipeTitle = e.target.querySelector("h4");
    recipeModal.innerHTML = `
        <h5 class="recipe-modal-title">Mouthwatering Dish</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia ullam deleniti fuga voluptas asperiores suscipit sed alias quaerat cum quos sequi, libero inventore repellendus non harum consectetur in optio? Dolorem reprehenderit libero neque labore. Quae cumque ipsa praesentium perspiciatis reiciendis dolore officiis libero architecto aperiam deleniti veritatis quasi molestias voluptatem, ducimus beatae veniam deserunt voluptatibus officia dolor! Exercitationem, natus? Itaque quos sit natus sint deleniti in obcaecati facilis, alias libero nemo amet illum dolorem facere provident molestias voluptas vitae eveniet! Soluta tempore ratione voluptates impedit sunt earum. Sed, nulla.
        </p>
        <p>What You'll Need</p>
        <ul>
        <li>1/2 teaspoon Ingredient</li>
        <li>2 tablespoons Ingredient</li>
        <li>1 teaspoon Ingredient</li>
        <li>1 cup Ingredient</li>
        <li>1/4 teaspoon Ingredient</li>
        <li>2 Ingredient, diced</li>
        </ul>
        <p>Directions</p>
        <ol>
        <li>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. </li>
        <li>Apple pie jelly beans topping carrot cake danish tart cake cheesecake. </li>
        <li>Muffin danish chocolate soufflé pastry icing bonbon oat cake.</li>
        <li> Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.</li>
        <li>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.</li>
        <li>Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. </li>
        <li>Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.</li>
        </ol>
    
    `;

    recipeSection.appendChild(recipeModal);
    recipeModal.classList.add("overlay");
});






