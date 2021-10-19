import React from "react";
import SwapiService from "../../services/swapi-service";
import withDetails from "../hoc-helpers/with-details";
import ItemDetails from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const swapiService = new SwapiService();

const {getPlanet, getStarship, getPlanetsImage, getStarshipImage } = swapiService;

const PersonDetails = () => {
    return (<SwapiServiceConsumer>
            {
              ({ getPerson, getPersonImage }) => {
                return withDetails(ItemDetails, getPerson, getPersonImage);
              }
            }
    </SwapiServiceConsumer>);
};
const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetsImage);
const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};