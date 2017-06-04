export const addFavourite = (articles) => {
    const x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};

export const removeFavourite = () => {
    const x = document.getElementById("unFavourite")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};
