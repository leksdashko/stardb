import SwapiService from "../../services/swapi-service";
import withDetails from "../hoc-helpers/with-details";
import ItemDetails from "../item-details/item-details";

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetsImage, getStarshipImage } = swapiService;

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage);
const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetsImage);
const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};