

let watchlistRenderHolder = document.getElementById("watchlist")


let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];


watchlist.forEach(movies => {
    watchlistRenderHolder.innerHTML += `
    <div class="movies">
    <div class="every_movies">
    <img src="${movies.Poster}" class="moviePoster">
    </div>  
    <div class="info">             
    <div class="title_info">
    <h4 class="title">${movies.Title}</h4>
    <i class="fa-solid  fa-star star"></i>
    <span class="movie-rating">${movies.imdbRating}</span>
      </div>
      <div class="runtime">
      <p id=${movies.imdbID} class="second-line-movie-desc"></p>
      <p class="run">${movies.Runtime}</p>
      <div class="movie-genre">
          <p>${movies.Genre}</p>
          </div>
          <button class ="remove"  data-movie='${JSON.stringify(movies.imdbID)}'> 
          <i class="fa-solid fa-circle-minus"></i> Remove
      </button>  
          </div>
          <div class="synopsis">
          <p >${movies.Plot}</p> 
          </div>
     </div>
    </div>
    `
});