import React from "react";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetsImage, getStarshipImage } = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage} >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetsImage}>
            <Record field="name" label="Name"/>
            <Record field="population" label="Population"/>
        </ItemDetails>
    );
};

const StarshipDetails = ({ itemId }) => {
    return(
        <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};