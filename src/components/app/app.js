import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from '../error-boundary/error-boundary';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details';

import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={3}/>
            <StarshipDetails itemId={5}/>

            <PersonList />
            <PlanetList />
            <StarshipList />

          </div>
      </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
