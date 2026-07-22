const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer [ACCESS TOKEN]",
  },
};

export async function fetchTrending() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      options,
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
