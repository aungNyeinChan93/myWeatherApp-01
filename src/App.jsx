/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";
import { weatherApi, weather_ApiKey } from "./api/weatherApi";
import { useEffect, useState } from "react";

function App() {
  let [search, setSearch] = useState("yangon");
  const [data, setData] = useState({});
  const [error,setError] =useState(false);
  const [errorMessage,setErroeMessage]= useState({})

  const fetchingWeather = async (countryName) => {
    console.log(countryName);
    if (countryName !== undefined) {
      setSearch(countryName);
    }
    try {
      setError(false)
      const responce = await weatherApi.get(
        `/weather?q=${search}&appid=${weather_ApiKey}`
      );
      setData(responce.data);
    } catch (error) {
      setError(true);
      // console.log("Error=== " ,error);
      setErroeMessage(error)
      // console.log(errorMessage.message);
    }
  };

  useEffect(() => {
    fetchingWeather();
  }, [search]);

  return (
    <div className="App">
      <h4 className="bg-danger p-1 text-uppercase text-white text-center ">
        Weather App
      </h4>
      <SearchForm fetchingWeather={fetchingWeather} />
      <Card data={data}  error={error} errorMessage={errorMessage} />
    </div>
  );
}

export default App;
