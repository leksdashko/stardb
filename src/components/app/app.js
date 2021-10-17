import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from '../error-boundary/error-boundary';
import Row from '../row';
import ItemDetails, {Record} from '../item-details/item-details';
import ItemList from '../item-list/item-list';

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

    const {getAllPeople, getPerson, getStarship, getPlanet, getPersonImage, getStarshipImage, getPlanetsImage} = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage} >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    );

    return (
      <ErrorBoundary>
      <div className="stardb-app">
        <Header />

        <ItemList
          getData={getAllPeople}
          onItemSelected={() => {}}>

          { ({name}) => <span>{name}</span> }
        </ItemList>
        
        <Row left={personDetails} right={starshipDetails} />
      </div>
      </ErrorBoundary>
    );
  }
}