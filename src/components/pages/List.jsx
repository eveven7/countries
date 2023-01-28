import React, { useState, useEffect } from 'react';
import Select from '../Select';
import Pagination from '../Pagination';

const itemsPerPage = 10;

const List = () => {
  const [countries, setCountries] = useState([]);
  const [filterParam, setFilterParam] = useState('All Countries');
  const [sortParam, setSortParam] = useState('A-Z');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch(
      "https://restcountries.com/v2/all?fields=name,region,area"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCountries(result);
        }
      )
      .then(() => setLoading(false))
      .catch((error) => setError(error));

    ;

  }, []);


  const search = (countries) => {
    return countries.filter(country => {
      if (filterParam === 'All Countries') {
        return country;
      }
      if (filterParam === 'Countries in Oceania') {
        return country.region === 'Oceania';
      }
      if (filterParam === 'Countries smaller than Lithuania') {
        return country.area < 65300;
      }
    });
  };

  if (loading) return <h2>Country list is loading...</h2>;
  if (error) return <pre>Error 404...</pre>;


  return (
    <div className="Main">
      <div className="Select">
        <div >
          <Select
            onChange={(e) => { setSortParam(e.target.value); }}

            value1='A-Z'
            value2='Z-A'
          /></div>
        <Select
          onChange={(e) => { setFilterParam(e.target.value); }}
          value1='All Countries'
          value2='Countries in Oceania'
          value3='Countries smaller than Lithuania'
        />
      </div>
      <Pagination
        data={(sortParam === 'A-Z') ? search(countries) : search(countries).reverse()}
        itemsPerPage={itemsPerPage}
        totalCount={search(countries).length}
      />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default List;