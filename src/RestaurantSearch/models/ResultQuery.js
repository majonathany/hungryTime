export default class ResultQuery {
    constructor() {
        this.query = {
            "id": 107257,
            "name": "Las Tablas Colombian Steak House",
            "address": "2942 N Lincoln Ave",
            "city": "Chicago",
            "state": "IL",
            "area": "Chicago / Illinois",
            "postal_code": "60657",
            "country": "US",
            "phone": "7738712414",
            "lat": 41.935137,
            "lng": -87.662815,
            "price": 2,
            "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
            "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
            "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
        }

        this.setQueryParameters = (item_json) => {
            this.query.id = item_json.id;
            this.query.name = item_json.name;
            this.query.address = item_json.address;
            this.query.city = item_json.city;
            this.query.state = item_json.state;
            this.query.area = item_json.area;
            this.query.postal_code = item_json.postal_code;
            this.query.country = item_json.country;
            this.query.phone = item_json.phone;
            this.query.lat = parseFloat(item_json.lat);
            this.query.lng = parseFloat(item_json.lng);
            this.query.price = item_json.price;
            this.query.reserve_url = item_json.reserve_url;
            this.query.mobile_reserve_url = item_json.mobile_reserve_url;
            this.query.image_url = item_json.image_url;
        }

        this.isMoreExpensiveThan = (other_query) => {
            return this.query.price > other_query.price;
        }

        this.getDistance = (position) => {

            if (position == null)
            {
                return 0;
            }

            let distance = 0;
            let lat1 = position.lat, lon1 = position.lng;

            let lat2 = this.query.lat;
            let lon2 = this.query.lng;

            const R = 6371e3; // metres
            const psi1 = lat1 * Math.PI/180; // φ, λ in radians
            const psi2 = lat2 * Math.PI/180;
            const deltapsi = (lat2-lat1) * Math.PI/180;
            const deltalam = (lon2-lon1) * Math.PI/180;

            const a = Math.sin(deltapsi/2) * Math.sin(deltapsi/2) +
                Math.cos(psi1) * Math.cos(psi2) *
                Math.sin(deltalam/2) * Math.sin(deltalam/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

            const d = R * c * 0.000621371;

            return d;
        }
    }
}