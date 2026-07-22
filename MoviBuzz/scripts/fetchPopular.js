const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer [ACCESS TOKEN]",
  },
};

export async function fetchPopular() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options,
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
