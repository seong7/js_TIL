// export const add = (a, b) => a + b;         // named export : 해당 fn 또는 data 를 import 하려면 동일한 변수명으로 받아야함
// export const multiply = (a, b) => a * b;
// export const ID = 23;

import {elements} from './base';

export const getInput = () => elements.searchInput.value; // 한줄짜리 arrow fn : 자동으로 처리된 값을 return 해줌

export const clearInput =()=> {
    elements.searchInput.value = ''; // return 값을 만들지 않기 위해 function 한줄이지만 감싸줌
};

export const clearResults = ()=>{
    elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
                // Array.reduce( fn(Accumulator, Currunt El), Acc의 초기값);
        title.split(' ').reduce((acc, cur) => {

            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;        // return 값은 다음 acc 에 assign 됨
        }, 0);

        /*
        // example)  'Pasta with tomato and spinach' -> ['Pasta', 'with', 'tomato', 'and', 'spinach']
           acc : 0 / acc + cur.length = 5 (다음 acc에 assign) / newTitle = ['Pasta']
           acc : 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
           acc : 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
           acc : 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']    // limit 보다 크므로 push 하지 않음
           acc : 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']    // limit 보다 크므로 push 하지 않음
        */

        return `${newTitle.join(' ')} ...`; // join : split 과 반대로 매개변수 값을 구분자로 추가하여 배열 요소들을 하나의 string 으로 합친다.
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    console.log(recipes);
    recipes.forEach(renderRecipe); // foreach - callback fn 간단히 사용하는 법
};