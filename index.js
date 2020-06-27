const input = document.querySelector("#searchtext");

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "9b951bc5",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

input.addEventListener("input", (event) => {
    fetchData(event.target.value);
  });
