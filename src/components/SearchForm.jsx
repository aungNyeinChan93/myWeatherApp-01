import React, { useRef } from "react";

const SearchForm = ({fetchingWeather}) => {
const country = useRef("")
  // country.current.focus(); 
  return (
    <div className="SearchForm container-fluid">
      <div action="" className="my-3 mx-auto bg-dark-subtle p-1 rounded shadow-sm ">
        <div className="row p-2 ">
          <div className="col-12 col-md-8 offset-md-1 my-1 my-md-0">
            <input ref={country}  type="text" className="form-control form-control-md " />
          </div>
          <div className="col-12 offset-0 col-md-2 offset-md-1  my-1 my-md-0 ">
            <button onClick={()=>fetchingWeather(country.current.value)} type="button" className=" btn btn-danger btn-md rounded-2 col-12 col-sm-12 col-md-11 col-lg-8  ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
