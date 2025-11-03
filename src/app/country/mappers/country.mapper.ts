import { Country } from "../interfaces/country";
import { RESTCountry } from "../interfaces/rest-countrys";

export class CountryMapper {
  static mapRestCountryToCountry = (country: RESTCountry): Country => {
    return {
      cca2: country.cca2,
      capital: country.capital?.join(',') ?? "No capital",
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].common ?? "No spanish name",
      population: country.population,
      region: country.region,
      subRegion: country.subregion ?? "No subregion",
    }
  }

  static mapRestCountryArrayToCountryArray = (countries: RESTCountry[]): Country[] => {
    return countries.map(this.mapRestCountryToCountry)
  }
}
