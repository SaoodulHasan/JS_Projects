import { fetchTrending } from "./fetchTrending.js";
import { fetchPopular } from "./fetchPopular.js";
import { fetchTopRated } from "./fetchTopRated.js";
import { fetchUpcoming } from "./fetchUpcoming.js";
const trendMovies = await fetchTrending();
const popularMovies = await fetchPopular();
const topRatedMovies = await fetchTopRated();
const upcomingMovies = await fetchUpcoming();

const trendHTML = trendMovies.results.map(
  (movie) =>
    `<a href="detailsPage.html?id=${movie.id}" class="Card">
                  <div class="cardRating">
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
                  <img
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    alt="${movie.title}"
                    class="cardImg"
                  />
                </a>`,
);

document.getElementById("trendingCarousel").innerHTML = trendHTML;

const popularHTML = popularMovies.results.map(
  (movie) =>
    `<a href="detailsPage.html?id=${movie.id}" class="Card">
                  <div class="cardRating">
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
                  <img
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    alt="${movie.title}"
                    class="cardImg"
                  />
                </a>`,
);

document.getElementById("popularCarousel").innerHTML = popularHTML;

const topRatedHTML = topRatedMovies.results.map(
  (movie) =>
    `<a href="detailsPage.html?id=${movie.id}" class="Card">
                  <div class="cardRating">
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
                  <img
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    alt="${movie.title}"
                    class="cardImg"
                  />
                </a>`,
);

document.getElementById("topRatedCarousel").innerHTML = topRatedHTML;

const upcomingHTML = upcomingMovies.results.map(
  (movie) =>
    `<a href="detailsPage.html?id=${movie.id}" class="Card">
                  <div class="cardRating">
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
                  <img
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    alt="${movie.title}"
                    class="cardImg"
                  />
                </a>`,
);

document.getElementById("upcomingCarousel").innerHTML = upcomingHTML;
