import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import Row from '../row';
import PersonDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundary from '../error-boundary/error-boundary';

import './people-page.css';
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  renderItem = (item) => {
      return `${item.name} (${item.birthYear})`;
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} >
              {this.renderItem}
      </ItemList>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
