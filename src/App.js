import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Calendar from './components/calendar/calendar/Calendar';

function App() {
  const [data, setData] = useState({ calendar: []});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          'https://interview-calendar-backend.herokuapp.com/api/calendar',
        );

        setData(result.data);
      } catch(error) {
        setIsError(true)
      }

      setIsLoading(false);
     
    };
    fetchData();
    
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="App">
          <Calendar data={data} />
        </div>
      )}
    </Fragment>
  );
}

export default App;
