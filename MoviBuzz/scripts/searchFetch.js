const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer [ACCESS TOKEN]",
  },
};

async function searchFetch() {
  try {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    document.getElementById("searchPageInp").placeholder = `${query}`;

    document
      .getElementById("searchPageForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const newQuery = document.getElementById("searchPageInp").value.trim();

        if (!query) return;

        window.location.href = `searchPage.html?query=${encodeURIComponent(newQuery)}`;
      });

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
      options,
    );
    const data = await response.json();
    document.querySelector(".topleftResult").innerHTML = `
            <h3>Search Results</h3>
            <p>Found ${data.results.length} results for "${query}"</p>
          </div>`;

    const searchHTML = data.results.map(
      (
        movie,
      ) => `<a href="/detailsPage.html?id=${movie.id}" class="resultMainCard">
            <div class="resultMainLeft">
              <img
                src="https://image.tmdb.org/t/p/w185${movie.poster_path}"
                alt=${movie.original_title}
              />
            </div>
            <div class="resultMainCenter">
              <div class="detRight">
                <div class="detRightTitle">
                  <h1>${movie.original_title}</h1>
                  <div class="ratingStyle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#F19E39"
                    >
                      <g>
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                      </g>
                      <g>
                        <path
                          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                        />
                      </g>
                    </svg>
                    ${movie.vote_average.toFixed(1)}
                  </div>
                </div>
                <div class="detRightStats">

                  <p id="detRightStatsYear" style="display: inline">${movie.release_date}</p>
                </div>

                <p id="detRightDesc">
                  ${movie.overview}
                </p>
              </div>
            </div>
            <div class="resultMainRight">
              <span class="favoriteBtn"
                ><button class="favBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    />
                  </svg></button
              ></span>
            </div>
          </a>`,
    );

    document.querySelector(".ResultMain").innerHTML = searchHTML;
  } catch (err) {
    console.log(err);
  }
}
searchFetch();
