import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Flights/?')
            .then(response => {
                setFlights(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-info">Flight Details</h2>
            <table className="table table-bordered table-dark table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>source</th>
                        <th>destination</th>
                        <th>departure_time</th>
                        <th>arrival_time</th>
                        <th>price</th>
                        <th>Book Now</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => (
                        <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.departure_time}</td>
                            <td>{flight.arrival_time}</td>
                            <td>{flight.price}</td>
                            <td><Link to="/payment" className="btn btn-warning">Book Now</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Flights;