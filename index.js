
let searchResults = []
let watchlist = [];

 document.addEventListener('click', (e)=>{
  if (e.target.id == "searchBtn"){
    searchMovies()
  }
})
    function searchMovies(){
    const searchMovies=document.getElementById("searchMovies").value;
    fetch(`https://www.omdbapi.com/?apikey=a23b5ae7&plot=full&s=${searchMovies}`)
    .then(res=>res.json()).then(data=>{
      if (data.Search) {
        let searchResults = data.Search
            document.getElementById("movieList").innerHTML = ""

        searchResults.forEach(movies => {
          fetch(`https://www.omdbapi.com/?apikey=a23b5ae7&i=${movies.imdbID}`)
          .then(res => {
            return res.json()
        }).then(movies=>{
          
                  document.getElementById("movieList").innerHTML +=`
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
                 <button class ="addToWatchListBtn"  data-movie='${JSON.stringify(movies.imdbID)}'> 
                 <i class="fa-solid fa-circle-plus"></i> Watchlist 
             </button>
             </div>
             <div class="synopsis">
             <p >${movies.Plot}</p> 
             </div>
                </div>
             </div>
                  `
        })
        });
      }
      
      else {
        document.getElementById("movieList").innerHTML = `<div class="not-find">Unable to find what you're looking for. Please try another search</div>`
     }
    })
}
  


document.addEventListener("click", async (e) => {
    const imdbIDForSe = e.target.dataset.movie;
    let imdbID = JSON.parse(imdbIDForSe);
    console.log(imdbID);
    fetch(`https://www.omdbapi.com/?apikey=a23b5ae7&i=${imdbID}`)
      .then((res) => {
        fetch(res.url)
          .then((res) => res.json())
          .then((data) => {
            watchlist.push({
              Poster: data.Poster,
              Title: data.Title,
              imdbRating: data.imdbRating,
              Runtime: data.Runtime,
              Genre: data.Genre,
              Plot: data.Plot,
            });
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
            console.log(watchlist);
            console.log(data);
          });
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  });
