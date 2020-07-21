import ResultQuery from "../../RestaurantSearch/models/ResultQuery";

export const US_States = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

export const ratingChoices = [
    {value: 0, label: 'One Star', className: 'one-star-graphic'},
    {value: 1, label: 'Two Star', className: 'two-star-graphic'},
    {value: 2, label: 'Three Star', className: 'three-star-graphic'},
    {value: 3, label: 'Four Star', className: 'four-star-graphic'},
    {value: 4, label: 'Five Star', className: 'five-star-graphic'}

];
export const priceChoices = [
    {value: 1, label: 'Very Cheap', className: 'one-dollar-graphic'},
    {value: 2, label: 'Cheap', className: 'two-dollar-graphic'},
    {value: 3, label: 'Expensive', className: 'three-dollar-graphic'},
    {value: 4, label: 'Very Expensive', className: 'four-dollar-graphic'},

];
export const distanceChoices = [
    {value: 1, label: '1 mile'},
    {value: 5, label: '5 miles'},
    {value: 10, label: '10 miles'},
    {value: 15, label: '15 miles'},
    {value: 25, label: '25 miles'},
    {value: 50, label: '50 miles'},
    {value: 100, label: '100 miles'},
    {value: -1, label: 'Any Distance'},

];

export const exampleList = [
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
    new ResultQuery(),
];


export const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

