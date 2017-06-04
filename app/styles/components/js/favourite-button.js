import { removeFavourite, addFavourite } from './snack-bar.js';

const pop = (id,articles) => {
  const div = document.getElementById(id);

  if(div.className === "button-like"){
    let favouriteArticles = [];
    const favourite = {
      ...articles
    };
    if (localStorage.getItem('favourites')) {
      favouriteArticles = JSON.parse(localStorage.getItem('favourites'));
      favouriteArticles.push(favourite);
      localStorage.setItem('favourites', JSON.stringify(favouriteArticles));
    } else {
      favouriteArticles.push(favourite);
      localStorage.setItem('favourites', JSON.stringify(favouriteArticles));
    }
    setTimeout(
      function(){
        div.className = div.className.replace("button-like", "button liked");
        addFavourite();
      },
        500
    );
  } else {
    let favourites = JSON.parse(localStorage.getItem('favourites'));
    favourites = favourites.filter(favourite => {return favourite.title !== articles.title});
    localStorage.setItem('favourites',JSON.stringify(favourites));
    setTimeout(
      function(){
        div.className = div.className.replace("button liked", "button-like");
        removeFavourite();
      },
        500
    );
  }

}


export default pop;
