import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipPage } from '../pages';

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet/>

            <PeoplePage />

            <PlanetsPage />
            
            <StarshipPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
