import {US_States} from "../../Global/assets/reference";
import {apiRestaurantsUrl} from '../../Global/assets/config';

export default class SearchQuery {
    constructor() {
        this.query = {
            price: -1,
            name: "",
            address: "",
            state: "",
            city: "",
            zip: "",
            country: "",
            page: 1,
            per_page: 100
        }

        this.setParameter = (key, value) => {
            this.query[key] = value;
            return this;
        }
        this.getValidQueryParams = () => {
            let valid_query = {};

            if (this.query.price > -1 && this.query.price < 4) {
                valid_query.price = this.query.price;
            }
            if (this.query.name.length > 2) {
                valid_query.name = this.query.name;
            }
            if (this.query.address.length > 2) {
                valid_query.address = this.query.address;
            }
            if (this.query.state.length === 2 && this.query.state in US_States) {
                valid_query.state = this.query.state;
            }
            if (this.query.city.length > 2) {
                valid_query.city = this.query.city;
            }
            if (this.query.zip.length === 5) {
                valid_query.zip = this.query.zip;
            }
            if (this.query.country.length > 2) {
                valid_query.country = this.query.country;
            }
            if (this.query.page > 0) {
                valid_query.page = this.query.page;
            }
            if ([5, 10, 15, 25, 50, 100].indexOf(this.query.per_page) !== -1) {
                valid_query.per_page = this.query.per_page;
            }
            return valid_query
        }

        this.executeQuery = async () => {
            let valid_query = this.getValidQueryParams();
            let query = Object.keys(valid_query)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(valid_query[k]))
                .join('&');

            let url = apiRestaurantsUrl + "?" + query;

            try {
                let response = await fetch(url);
                let response_body = await response.json();
                return response_body;
            } catch (e) {
                console.log("Could not fetch results due to: " + e)
            }
        }
    }
}

