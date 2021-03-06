import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage'
import ApplicationFormPage from '../ApplicationFormPage'
import LoginPage from '../LoginPage'
import CreateTripPage from '../CreateTripPage'
import ListTripsPage from '../ListTripsPage'
import TripDetailsPage from '../TripDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/application-form">
            <ApplicationFormPage/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        <Route exact path="/trips/create">
            <CreateTripPage/>
        </Route>

        <Route exact path="/trips/list">
            <ListTripsPage/>
        </Route>

        <Route exact path="/trips/details">
          <TripDetailsPage/>
        </Route>

        <Route path="/">
            Bugou o bagulho, volta aí parça
        </Route>

      </Switch>
      
    </BrowserRouter>
  );
}

export default App;