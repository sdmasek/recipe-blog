

//access the heart icon
// const heartIcon = document.querySelector(".svg-icon");
const recipeCard = document.querySelector(".rcp-card");
const recipeCards = document.querySelectorAll(".rcp-card");
const recipeModal = document.querySelector(".recipe-modal");
const recipeSection = document.querySelector(".recipes");
const searchInput = document.querySelector(".form-control");
const form = document.querySelector("form");
const main = document.querySelector("main");
const recipeSearchTerm = document.querySelector("H4");
const modalContainer = document.querySelector(".recipe-modal-container");
// const recipeModalContainer = document.querySelector(".recipe-modal-container");
const modalClose = document.querySelector(".modal-close");
const recipeTitles = document.querySelectorAll("h4");
//get all images that have the data-food-type tag
const recipeImages = document.querySelectorAll(".card-photo");
let recipes = [];


//event listeners
recipeSection.addEventListener("click", clickRecipe);
searchInput.addEventListener("keyup", searchRecipes);

const datacaptionsList = [
    "lemon", "salmon", "fish", "seafood", "dinner", "butter", "sauce", "citrus",
    "soup", "vegetarian", "lunch", "squash", "pumpkin", "creamy", "fall", "autumn",
    "mexican", "easy", "lime", "cilantro", "pork", "strawberry", "fruit", "salad", "vegetarian",
    "fresh", "lettuce", "spring", "spinach", "summer", "chicken", "raisins", "orange",
    "mandarin", "shrimp", "grill", "pepper"
]

const recipeDiv = document.createElement("div");
const recipeLi = document.createElement("li");
const recipeLink = document.createElement("a");

recipeDiv.className = "recipe-search-container";
recipeLi.className = "recipe-search-item";
recipeLink.className = "recipe-search-link";

//get the figure element to access the img element



//displays the recipe in a text format
//took away for loop here because there's already one in the search input listener
displaySearch = (recipeSearch) => {
    //use pre-made variables to store the newly created innerHTML elements in
    recipeLi.textContent = searchInput.value;
    // console.log(searchInput.value);
    // console.log(recipeSearch.innerHTML);
    recipeDiv.innerHTML += `
            <ul>
            <li class="recipe-search-item">
            <a class = "recipe-search-link" href="#">${recipeSearch}</a>
            </li>
            </ul>
        `;

    form.appendChild(recipeDiv);

    if (recipeLi.textContent === "") {
        form.removeChild(recipeDiv);
    }

}

//search for recipes using the titles from the h4's
function searchRecipes(e) {
    //switch the search value to lowercase
    let search = e.target.value.toLowerCase();

    // go through each recipe card to get datacaption and title
    for (let i = 0; i < recipeCards.length; i++) {
        //initialize new recipe array

        let recipeCaption = recipeImages[i].getAttribute("data-food-caption");

        let recipeTitle = recipeCards[i].querySelector("h4");
        recipeTitle = recipeTitle.textContent;
        //filter through datacaption array and if the search's title matches
        //the datacaption, push that title to the recipes array
        const recipeMatch = datacaptionsList.filter(datacaption => {
            // recipeCaption.toLowerCase().includes(search)
            if (search.toLowerCase().includes(datacaption)) {
                if (recipeCaption.includes(datacaption)) {
                    recipes.push(recipeTitle);

                    console.log(recipeTitle);
                }
            }

        });
        displaySearch(recipeMatch);

    }

}

function clickRecipe(e) {

    console.log("clicked");
    for (let i = 0; i < recipeCards.length; i++) {
        if (e.target.value !== recipeSection) {
            console.log("card clicked");
            let html = `
        <div class="modal-header">
        <h5 class="recipe-modal-title">Mouthwatering Dish</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia ullam deleniti fuga voluptas asperiores suscipit sed alias quaerat cum quos sequi, libero inventore repellendus non harum consectetur in optio? Dolorem reprehenderit libero neque labore. Quae cumque ipsa praesentium perspiciatis reiciendis dolore officiis libero architecto aperiam deleniti veritatis quasi molestias voluptatem, ducimus beatae veniam deserunt voluptatibus officia dolor! Exercitationem, natus? Itaque quos sit natus sint deleniti in obcaecati facilis, alias libero nemo amet illum dolorem facere provident molestias voluptas vitae eveniet! Soluta tempore ratione voluptates impedit sunt earum. Sed, nulla.
        </p>
        </div>
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

            recipeModal.innerHTML = html;

        }

        recipeModal.parentElement.classList.remove("hidden");
        modalClose.classList.remove("hidden");
        modalContainer.classList.add("overlay");

    }

}


modalClose.addEventListener('click', () => {
    console.log("modal closed");
    recipeModal.parentElement.classList.remove("overlay");
    recipeModal.parentElement.classList.add("hidden");
});






