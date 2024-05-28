import React from "react";
// import { LuCloudy } from "react-icons/lu";
import { FiCloudRain } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";
import { GiSpeedometer } from "react-icons/gi";

const Card = ({ data,error,errorMessage }) => {
  if(error){
    return <h1 className="text-center text-danger bg-white my-5">{errorMessage.response.data.message}</h1>
  }
  if (JSON.stringify(data) === "{}") {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="Card container-fluid min-vh-100 ">
        <div className="row bg-light">
          <div className="col-12 col-lg-8">
            <div className="card-container container-fluid bg-dark-subtle text-start rounded-3 p-4">
              <p className="fs-5">Time : {data.timezone}</p>
              <h1>
                {data.name}, {data.sys.country}
              </h1>
              <div className="weather-icon fs-1 text-danger text-start  ">
                <span className="ms-2 ">
                  <img
                    src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`}
                    alt=""
                    style={{ width: "60px", height: "65px" }}
                  />
                </span>
                <span className="fs-4 mx-3 fw-bold ">{data.main.temp}°C</span>
              </div>
              <p className="my-2">
                Feels like {data.main.temp}°C.{" "}
                <span className=" text-capitalize">
                  {data.weather[0].description} .
                </span>
                <span>{data.weather[0].main}</span>
              </p>
              <div className="row i col-sm-6cons-grp p-4 bg-danger-subtle ">
                <div className="col-12 col-sm-6  col-lg-4 fs-4 text-center bg-success ">
                  <FiCloudRain />
                  <span className="fs-6 mx-4 d-block d-lg-inline-block ">
                    {data.main.feels_like} %
                  </span>
                </div>
                <div className="col-12 col-sm-6  col-lg-4 fs-4 text-center bg-info ">
                  <TiLocationArrow />
                  <span className="fs-6 mx-4 d-block d-lg-inline-block">
                    {data.wind.deg} ms/W
                  </span>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 fs-4 text-center bg-warning ">
                  <GiSpeedometer />
                  <span className="fs-6 mx-4 d-block d-lg-inline-block">
                    {data.wind.speed} ms/W
                  </span>
                </div>
              </div>
              <div className="row unit-group">
                <div className=" col-12 offset-lg-1 col-lg-5 p-1 text-center text-lg-start ">
                  Humidity : {data.main.humidity} %
                </div>
                <div className=" col-12 offset-lg-1 col-lg-5 p-1 text-center text-lg-start ">
                  UV : {data.main.temp}
                </div>
                <div className=" col-12 offset-lg-1 col-lg-5 p-1 text-center text-lg-start ">
                  Dew Point : {data.main.humidity / 2} %
                </div>
                <div className=" col-12 offset-lg-1 col-lg-5 p-1 text-center text-lg-start ">
                  Visibility : {data.visibility / 1000} km
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center d-flex flex-column ">
            <div className="container-fluid bg-dark-subtle rounded my-2 shado-sm  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PGn76mNtF1O_cz67Pu6TonhPxXwLaWatSQ&s"
                alt="weather-img"
                className="col-12 img-fluid object-fit-sm-fill rounded-circle my-3 p-3"
              />
              <div>
                <h5 className="my-2 text-center">
                  Feels like {data.main.temp}°C.{" "}
                  <span className=" text-capitalize">
                    {data.weather[0].description}.
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
