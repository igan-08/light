import React, { useState } from 'react';
import { Link } from "react-router-dom";


function FlightSearch() {
  const [source, setSource] = useState('');
  const [destination,setDestination] = useState('');
  const [date, setDate] = useState('');
  const [flights,setFlights] = useState('');



  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };



  const handleSearch = async (e) => {
    e.preventDefault();
    // Do something with search parameters
    
    fetch(`http://127.0.0.1:8000/api/Flights/?source=${source}&destination=${destination}&date=${date}`)
    .then(response => {
      // handle the response from the server
      
      return response.json();
    })
    .then(data => {
      // handle the JSON data returned by the server
      console.log("Success:", data);
      window.location.href = '/flights';
      
    })
    .catch(error => {
      // handle any errors that occur
      console.error(error);
    });

  };

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh' ,
        backgroundImage:'url(https://img.freepik.com/premium-photo/passport-airplane-air-ticket-travel-concept-copy-space_130265-5542.jpg?size=626&ext=jpg&ga=GA1.2.955878982.1678699792&semt=ais)',
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem' 
        }}
      >
        Flight Search
      </h1>
      <form onSubmit={handleSearch} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <label htmlFor="source-drpdown" style={{ 
            fontSize: '1.2rem', 
            marginBottom: '0.5rem' 
          }}
        >
          Source:
        </label>
        
      <select 
      id="source-dropdown" 
      value={source} 
      onChange={handleSourceChange}
       style={{ 
        fontSize: '1.2rem', 
        padding: '0.5rem', 
        marginBottom: '1rem' 
      }}>
        <option value="placeholder">choose source</option>
        <option value="source1">Hyderabad</option>
        <option value="source2">Mumbai</option>
        <option value="source3">Chennai</option>
       
      </select>
      <label htmlFor="source-drpdown" style={{ 
            fontSize: '1.2rem', 
            marginBottom: '0.5rem' 
          }}
        >
          Source:
        </label>
        
      <select 
      id="destination-dropdown" 
      value={destination} 
      onChange={handleDestinationChange}
       style={{ 
        fontSize: '1.2rem', 
        padding: '0.5rem', 
        marginBottom: '1rem' 
      }}>
        <option value="destination1">choose source</option>
        <option value="destination2">Hyderabad</option>
        <option value="destination3">Mumbai</option>
        <option value="destination4">Chennai</option>
       
      </select>
        

        <label htmlFor="date" style={{ 
            fontSize: '1.2rem', 
            marginBottom: '0.5rem' 
          }}
        >
          Date:
        </label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ 
            fontSize: '1.2rem', 
            padding: '0.5rem', 
            marginBottom: '1rem' 
          }}
        />
        <Link to="/flights" className="btn btn-warning">Search</Link>
      </form>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={`${flight.airline}${flight.id}`}>
              {flight.airline} {flight.flight_number} -{" "}
              {new Date(flight.departure_time).toLocaleString()} to{" "}
              {new Date(flight.arrival_time).toLocaleString()} for {flight.price}
            </li>
          ))}
        </ul>
      ) : null}

    </div>
  );
}

export default FlightSearch;


