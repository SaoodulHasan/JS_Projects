const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer [ACCESS TOKEN]",
  },
};
const params = new URLSearchParams(window.location.search);
const movieID = params.get("id");

async function getDetails() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}`,
      options,
    );
    const crew = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits`,
      options,
    );
    const simMov = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/similar`,
      options,
    );

    const similarMov = await simMov.json();
    const data = await response.json();
    const crewDat = await crew.json();

    document.querySelector("title").textContent =
      `${data.original_title} - MoviBuzz`;
    document.querySelector(".detailsBlock").innerHTML = `<div class="detLeft">
                <span></span
                ><img
                  id="detPageImg"
                  style="width: 250px"
                  src="https://image.tmdb.org/t/p/w500${data.poster_path}"
                  alt=""
                />
              </div>
              <div class="detRight">
                <div class="detRightTitle">
                  <h1>${data.original_title}</h1>
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
                    ${data.vote_average.toFixed(1)}
                  </div>
                </div>
                <div class="detRightStats">
                  <!-- 2022 0 2h 56m 0 PG-13 0 Action,Crime,Drama -->
                  <p id="detRightStatsYear" style="display: inline">${data.release_date}</p>
                  <p style="display: inline">&nbsp;&bull;&nbsp;</p>
                  <p id="detRightStatsDur" style="display: inline">${data.runtime}m</p>
                  <p style="display: inline">&nbsp;&bull;&nbsp;</p>
                  <p id="detRightStatsCat" style="display: inline">
                    ${data.genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
                <div>
                  <button
                    class="trailerBtn detBtnStyle"
                    style="background: var(--primary-hover)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="var(--text)"
                    >
                      <path
                        d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Zm80-207Zm0 134 210-134-210-134v268Z"
                      /></svg
                    >Watch Trailer</button
                  ><button class="addFav detBtnStyle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="var(--text)"
                    >
                      <path
                        d="M451.5-152q-14.5-5-25.5-16l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5q-14 0-28.5-5ZM442-690q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z"
                      /></svg
                    >Add to Favorites
                  </button>
                  <button class="shareBtn detBtnStyle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="var(--text)"
                    >
                      <path
                        d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"
                      /></svg
                    >Share
                  </button>
                </div>
                <p id="detRightDesc">
                  ${data.overview}
                </p>
              </div>`;

    const director = crewDat.crew.find((person) => person.job === "Director");
    const writers = crewDat.crew.filter(
      (person) => person.job === "Writer" || person.job === "Screenplay",
    );
    const writerNames = writers.map((writer) => writer.name).join(", ");

    document.querySelector(".detContRight").innerHTML = `<div class="detCard">
              <ul>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Release Date</span
                    ><span class="detRelDate">${data.release_date}</span></span
                  >
                </li>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="M360-280h160q17 0 28.5-11.5T560-320v-40l80 42v-164l-80 42v-40q0-17-11.5-28.5T520-520H360q-17 0-28.5 11.5T320-480v160q0 17 11.5 28.5T360-280ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Director</span
                    ><span class="detRelDate">${director.name}</span></span
                  >
                </li>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="m490-527 37 37 217-217-37-37-217 217ZM200-200h37l233-233-37-37-233 233v37Zm355-205L405-555l167-167-29-29-219 219-56-56 218-219q24-24 56.5-24t56.5 24l29 29 50-50q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828-678L555-405ZM270-120H120v-150l285-285 150 150-285 285Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Writers</span
                    ><span class="detRelDate"
                      >${writerNames}</span
                    ></span
                  >
                </li>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Language</span
                    ><span class="detRelDate">${data.original_language}</span></span
                  >
                </li>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Budget</span
                    ><span class="detRelDate">$${data.budget}</span></span
                  >
                </li>
                <li>
                  <span class="detCardIcon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="var(--primary)"
                    >
                      <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"
                      /></svg></span
                  ><span class="detCardDetails"
                    ><span>Revenue</span
                    ><span class="detRelDate">$${data.revenue}</span></span
                  >
                </li>
              </ul>
            </div>
            <div class="ratingDetCard">
              <span class="ratingDetCardInner"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#F19E39"
                >
                  <path
                    d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"
                  />
                </svg>
                <span class="ratingDetCardInnerInner">
                  <span
                    ><span id="ratingSpan">${data.vote_average.toFixed(1)}</span
                    ><span class="ratingDetCardInnerUnit">/10</span></span
                  ><span class="ratingDetCardTitle">IMDb Rating</span>
                </span>
              </span>
              <span class="ratingDetCardInner"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#ff4242"
                >
                  <path
                    d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                  />
                </svg>
                <span class="ratingDetCardInnerInner">
                  <span
                    ><span id="tomatoSpan">81</span
                    ><span class="ratingDetCardInnerUnit">%</span></span
                  ><span class="ratingDetCardTitle">Tomatometer</span>
                </span>
              </span>
            </div>`;

    const castHTML = crewDat.cast.map(
      (actor) => `<div class="castCard">
                    <img
                      src="https://image.tmdb.org/t/p/w185${actor.profile_path}"
                      alt=${actor.original_name}
                      class="castcardImg"
                    />
                    <h3>${actor.original_name}</h3>
                    <h4>${actor.character}</h4>
                  </div>`,
    );
    document.querySelector(".cardsCarousel").innerHTML = castHTML;

    const simiHTML = similarMov.results.map(
      (movie) => `<a href="detailsPage.html?id=${movie.id}" class="Card">
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
                      src="https://image.tmdb.org/t/p/w185${movie.poster_path}"
                      alt=${movie.original_title}
                      class="cardImg"
                    />
                  </a>`,
    );
    document.querySelector("#similarMovCarousel").innerHTML = simiHTML;
  } catch (error) {
    console.log(error);
  }
}

getDetails();
