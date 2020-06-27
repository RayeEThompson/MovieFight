const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "9b951bc5",
      s: "avengers",
    },
  });
  console.log(response.data);
};
fetchData();
