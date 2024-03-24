

let watchlistRenderHolder = document.getElementById("watchlist")


let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];


watchlist.forEach(movies => {
    watchlistRenderHolder.innerHTML += `
    <div class="movies">
        <img src="${movies.Poster}" class="moviePoster"> 
        <div class="title_info">
        <div class="title">${movies.Title}</div>
        <i class="fa-solid  fa-star star"></i>
        <p class="movie-rating">${movies.imdbRating}</p>
        </div>
        <div class="runtime">
        <div id=${movies.imdbID} class="second-line-movie-desc"></div>
        <p class="run">${movies.Runtime}</p>
        <div class="movie-genre">
            <p>${movies.Genre}</p>
        </div>
        <div class="plot">
        <p >${movies.Plot}</p> 
      </div>
    </div>

    `
});