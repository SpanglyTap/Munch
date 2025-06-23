import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
    const foodData = {
        christmas: [
            { 
                name: 'Glazed Ham', 
                image: 'glazed_ham.png',
                calories: '450 kcal per serving',
                ingredients: ['1 fully cooked ham (10-12 lbs)', '1 cup brown sugar', '1/2 cup honey', '1/4 cup dijon mustard', 'Whole cloves'],
                recipe: 'Preheat oven to 325°F (165°C). Score the ham in a diamond pattern and stud with cloves. In a saucepan, combine brown sugar, honey, and mustard; heat until smooth. Brush glaze over ham. Bake for 1.5-2 hours, basting every 20 minutes, until heated through.'
            },
            { 
                name: 'Gingerbread Cookies', 
                image: 'gingerbread_cookies.png',
                calories: '150 kcal per cookie',
                ingredients: ['3 cups all-purpose flour', '1 tbsp ground ginger', '1 tsp cinnamon', '1/2 tsp nutmeg', '1/2 tsp cloves', '3/4 cup unsalted butter', '3/4 cup brown sugar', '1/2 cup molasses', '1 large egg'],
                recipe: 'Whisk dry ingredients. Cream butter and sugar, then beat in molasses and egg. Gradually mix in flour mixture. Chill dough for 2 hours. Roll out, cut shapes, and bake at 350°F (175°C) for 8-10 minutes. Decorate when cool.'
            },
            { 
                name: 'Eggnog', 
                image: 'eggnog.png',
                calories: '350 kcal per cup',
                ingredients: ['4 large eggs, separated', '1/2 cup granulated sugar', '2 cups whole milk', '1 cup heavy cream', '1/2 cup bourbon or rum (optional)', 'Freshly grated nutmeg'],
                recipe: 'Whisk egg yolks and sugar until creamy. Slowly whisk in milk and cream. Stir in alcohol if using. In a separate bowl, beat egg whites until soft peaks form. Gently fold whites into the yolk mixture. Chill thoroughly. Serve dusted with nutmeg.'
            }
        ],
        halloween: [
            { 
                name: 'Pumpkin Soup', 
                image: 'pumpkin_soup.png',
                calories: '250 kcal per bowl',
                ingredients: ['1 medium pumpkin (or 2 cans pumpkin puree)', '1 large onion, chopped', '2 carrots, chopped', '4 cups vegetable broth', '1 cup heavy cream', '1 tsp nutmeg', 'Salt and pepper'],
                recipe: 'If using fresh pumpkin, roast at 400°F (200°C) until tender, then scoop out flesh. Sauté onion and carrots until soft. Add pumpkin flesh and broth. Simmer for 20 minutes. Blend until smooth. Stir in cream, nutmeg, salt, and pepper. Heat through and serve.'
            },
            { 
                name: 'Candy Apples', 
                image: 'candy_apples.png',
                calories: '400 kcal per apple',
                ingredients: ['6-8 medium apples', '3 cups granulated sugar', '1 cup light corn syrup', '1/2 cup water', 'Red food coloring', 'Wooden sticks'],
                recipe: 'Wash and dry apples, remove stems, and insert sticks. Combine sugar, corn syrup, and water in a saucepan. Cook over medium-high heat to 300°F (150°C) - hard crack stage. Remove from heat, stir in food coloring. Dip apples, let excess drip off, and place on greased parchment to cool.'
            },
            { 
                name: 'Spiderweb Cookies', 
                image: 'spider_cookies.png',
                calories: '200 kcal per cookie',
                ingredients: ['Your favorite sugar cookie dough', 'White icing', 'Black icing in a thin-tipped tube', 'Chocolate truffles'],
                recipe: 'Bake round sugar cookies. While they cool, flood with white icing. Immediately draw concentric circles with black icing. Drag a toothpick from the center outwards to create a web. Let it set. Make a spider by placing a chocolate truffle on the cookie and drawing legs with black icing.'
            }
        ],
        easter: [
            { 
                name: 'Deviled Eggs', 
                image: 'deviled_eggs.png',
                calories: '70 kcal per half',
                ingredients: ['6 large eggs, hard-boiled and peeled', '1/4 cup mayonnaise', '1 tsp dijon mustard', '1 tsp white vinegar', 'Salt and pepper to taste', 'Paprika for garnish'],
                recipe: 'Slice eggs in half lengthwise. Remove yolks and place in a bowl. Mash yolks with a fork. Mix in mayonnaise, mustard, vinegar, salt, and pepper until smooth and creamy. Pipe or spoon the yolk mixture back into the egg white halves. Garnish with a sprinkle of paprika.'
            },
            { 
                name: 'Hot Cross Buns', 
                image: 'hot-cross_buns.png',
                calories: '250 kcal per bun',
                ingredients: ['1 cup warm milk', '2 tsp active dry yeast', '1/4 cup sugar', '1 egg', '1/4 cup melted butter', '3 cups flour', '1/2 cup currants', '1 tsp cinnamon', 'For the cross: 1/2 cup flour, 4-5 tbsp water'],
                recipe: 'Proof yeast in warm milk with a pinch of sugar. Mix with egg, butter, sugar, flour, currants, and cinnamon. Knead until smooth. Let rise for 1-2 hours. Form into buns, let rise again. Pipe a cross mixture on top. Bake at 375°F (190°C) for 15-20 minutes.'
            },
            { 
                name: 'Roast Lamb', 
                image: 'roast_lamb.png',
                calories: '500 kcal per serving',
                ingredients: ['1 leg of lamb (4-5 lbs)', '6 cloves garlic, slivered', '2 tbsp fresh rosemary, chopped', '2 tbsp olive oil', 'Salt and black pepper'],
                recipe: 'Preheat oven to 375°F (190°C). Make small slits all over the lamb and insert garlic slivers. Rub the lamb with olive oil, rosemary, salt, and pepper. Place in a roasting pan and roast for 1.5 - 2 hours, or until a meat thermometer reads 145°F (63°C) for medium. Let rest before carving.'
            }
        ],
        thanksgiving: [
            { 
                name: 'Roast Turkey', 
                image: 'roast_turkey.png',
                calories: '550 kcal per serving',
                ingredients: ['1 whole turkey (12-14 lbs)', '1 large onion, quartered', '1 lemon, halved', 'Fresh herbs (rosemary, thyme, sage)', '1/2 cup melted butter', 'Salt and pepper'],
                recipe: 'Preheat oven to 325°F (165°C). Remove giblets. Pat turkey dry. Stuff cavity with onion, lemon, and herbs. Tie legs together. Rub entire turkey with melted butter, salt, and pepper. Roast for 3-4 hours, basting occasionally, until juices run clear and internal temperature reaches 165°F (74°C) in the thickest part of the thigh.'
            },
            { 
                name: 'Mashed Potatoes', 
                image: 'mashed_potatoes.png',
                calories: '300 kcal per cup',
                ingredients: ['5 lbs Russet potatoes, peeled and quartered', '1 cup warm milk', '1/2 cup unsalted butter', 'Salt and white pepper to taste', 'Chives for garnish'],
                recipe: 'Place potatoes in a large pot and cover with salted cold water. Bring to a boil and cook until tender (about 20 minutes). Drain well. Return potatoes to the pot and mash. Add warm milk and butter, and continue mashing until creamy. Season with salt and pepper. Garnish with chives.'
            },
            { 
                name: 'Cranberry Sauce', 
                image: 'cranberry_sauce.png',
                calories: '110 kcal per 1/4 cup',
                ingredients: ['1 bag (12 oz) fresh cranberries', '1 cup granulated sugar', '1 cup water', 'Zest of one orange'],
                recipe: 'Rinse cranberries. In a saucepan, combine sugar and water. Bring to a boil, stirring to dissolve sugar. Add cranberries and orange zest. Return to a boil, then reduce heat and simmer for about 10 minutes, until most cranberries have burst. Remove from heat and let it cool completely. The sauce will thicken as it cools.'
            }
        ]
    };

    const holidaySelector = document.getElementById('holiday-selector');
    const foodDisplay = document.getElementById('food-display');
    const foodGridContainer = document.getElementById('food-grid-container');
    const modal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.modal-close');

    function renderHolidaySelectors() {
        Object.keys(foodData).forEach((holiday, index) => {
            const holidayEl = document.createElement('div');
            holidayEl.className = 'holiday-card';
            holidayEl.dataset.holiday = holiday;
            holidayEl.style.setProperty('--delay', `${index * 100}ms`);
            holidayEl.innerHTML = `<h3>${holiday.charAt(0).toUpperCase() + holiday.slice(1)}</h3>`;
            holidaySelector.appendChild(holidayEl);
        });
    }

    function renderFoodItems(holiday) {
        foodGridContainer.innerHTML = ''; // Clear previous items
        const foods = foodData[holiday];
        if (!foods) {
            foodGridContainer.innerHTML = '<h2>No recipes found for this holiday.</h2>';
            return;
        }

        const foodGrid = document.createElement('div');
        foodGrid.className = 'food-grid';

        foods.forEach(food => {
            const foodEl = document.createElement('div');
            foodEl.className = 'food-card';
            foodEl.dataset.holiday = holiday;
            foodEl.dataset.foodName = food.name;
            foodEl.innerHTML = `
                <img src="${food.image}" alt="${food.name}">
                <h4>${food.name}</h4>
            `;
            foodGrid.appendChild(foodEl);
        });
        foodGridContainer.appendChild(foodGrid);
    }
    
    function showRecipeModal(holiday, foodName) {
        const food = foodData[holiday]?.find(f => f.name === foodName);
        if(!food) return;

        modalBody.innerHTML = `
            <img src="${food.image}" alt="${food.name}" class="modal-img">
            <h2>${food.name}</h2>
            <p class="calories"><strong>Calories:</strong> ${food.calories}</p>
            <div class="recipe-section">
                <h3>Ingredients</h3>
                <ul>
                    ${food.ingredients.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-section">
                <h3>Recipe</h3>
                <p>${food.recipe}</p>
            </div>
        `;
        modal.style.display = 'flex';
    }

    function hideRecipeModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    }

    holidaySelector.addEventListener('click', e => {
        const holidayCard = e.target.closest('.holiday-card');
        if (holidayCard) {
            // Remove active class from any previously selected card
            document.querySelectorAll('.holiday-card.active').forEach(card => card.classList.remove('active'));
            // Add active class to the clicked card
            holidayCard.classList.add('active');

            const holiday = holidayCard.dataset.holiday;
            renderFoodItems(holiday);
        }
    });

    foodDisplay.addEventListener('click', e => {
        const foodCard = e.target.closest('.food-card');
        if(foodCard) {
            const { holiday, foodName } = foodCard.dataset;
            showRecipeModal(holiday, foodName);
        }
    });

    closeModalBtn.addEventListener('click', hideRecipeModal);
    modal.addEventListener('click', e => {
        if(e.target === modal) {
            hideRecipeModal();
        }
    });

    function initializeApp() {
        renderHolidaySelectors();

        // Select and display the first holiday by default
        const firstHolidayCard = holidaySelector.querySelector('.holiday-card');
        if (firstHolidayCard) {
            firstHolidayCard.classList.add('active');
            const firstHoliday = firstHolidayCard.dataset.holiday;
            renderFoodItems(firstHoliday);
        }
    }

    initializeApp();
});