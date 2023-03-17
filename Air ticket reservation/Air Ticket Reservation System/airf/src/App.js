import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import loginForm from "./components/loginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";
import FlightSearch from "./components/FlightSearch";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import axios from 'axios';
import Flights from "./components/Flights";
import Payment from "./components/Payment";


const API_URL = 'http://127.0.0.1:8000/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      tickets: [],
      flight_id: '',
      passenger_name: '',
      passenger_age: '',
      passenger_gender: '',
      seat_number: '',
      booking_date: '',
      errors: {},
      username: '',
      password: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(API_URL + 'buses')
      .then(response => response.data)
      .then((data) => {
        this.setState({ flights: data });
        console.log(this.state.flights);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(API_URL + 'tickets')
      .then(response => response.data)
      .then((data) => {
        this.setState({ tickets: data });
        console.log(this.state.tickets);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Add new Bus
  handleSubmit(event) {
    event.preventDefault();
    const {
      flight_id,
      passenger_name,
      passenger_age,
      passenger_gender,
      seat_number,
      booking_date,
    } = this.state;

    axios.post(API_URL + 'tickets/', {
      flight: flight_id,
      passenger_name,
      passenger_age,
      passenger_gender,
      seat_number,
      booking_date
    })
      .then((response) => {
        if (response.status === 201) {
          this.setState({ bookSuccess: true })
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          this.setState({ errors: error.response.data, bookSuccess: false });
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/FlightSearch" component={FlightSearch} />
            <Route path="/login" component={loginForm} />
            <Route path="/Payment" component={Payment} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/ContactUs" component={ContactPage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/" exact component={Home} />
            <Route path="/flights" exact component={Flights} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
