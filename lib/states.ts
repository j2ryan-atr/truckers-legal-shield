export type StateInfo = {
  name: string;
  slug: string;
  abbr: string;
  capital: string;
  // Major interstate corridors crossing the state (used for content + map linking)
  corridors: string[];
  // A few large metros / courts where CDL drivers commonly get cited
  cities: string[];
};

export const STATES: StateInfo[] = [
  { name: "Alabama", slug: "alabama", abbr: "AL", capital: "Montgomery", corridors: ["I-10", "I-20", "I-65", "I-85", "I-59"], cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville"] },
  { name: "Alaska", slug: "alaska", abbr: "AK", capital: "Juneau", corridors: ["AK-1", "AK-3"], cities: ["Anchorage", "Fairbanks", "Juneau"] },
  { name: "Arizona", slug: "arizona", abbr: "AZ", capital: "Phoenix", corridors: ["I-10", "I-8", "I-17", "I-40"], cities: ["Phoenix", "Tucson", "Flagstaff", "Yuma"] },
  { name: "Arkansas", slug: "arkansas", abbr: "AR", capital: "Little Rock", corridors: ["I-30", "I-40", "I-55"], cities: ["Little Rock", "Fort Smith", "Fayetteville", "Texarkana"] },
  { name: "California", slug: "california", abbr: "CA", capital: "Sacramento", corridors: ["I-5", "I-10", "I-15", "I-40", "I-80"], cities: ["Los Angeles", "Sacramento", "Bakersfield", "Barstow", "Fresno"] },
  { name: "Colorado", slug: "colorado", abbr: "CO", capital: "Denver", corridors: ["I-25", "I-70", "I-76"], cities: ["Denver", "Colorado Springs", "Grand Junction", "Pueblo"] },
  { name: "Connecticut", slug: "connecticut", abbr: "CT", capital: "Hartford", corridors: ["I-95", "I-84", "I-91"], cities: ["Hartford", "New Haven", "Bridgeport", "Stamford"] },
  { name: "Delaware", slug: "delaware", abbr: "DE", capital: "Dover", corridors: ["I-95", "I-495"], cities: ["Wilmington", "Dover", "Newark"] },
  { name: "District of Columbia", slug: "district-of-columbia", abbr: "DC", capital: "Washington", corridors: ["I-95", "I-395", "I-295"], cities: ["Washington"] },
  { name: "Florida", slug: "florida", abbr: "FL", capital: "Tallahassee", corridors: ["I-10", "I-75", "I-95", "I-4"], cities: ["Jacksonville", "Orlando", "Tampa", "Miami", "Tallahassee"] },
  { name: "Georgia", slug: "georgia", abbr: "GA", capital: "Atlanta", corridors: ["I-20", "I-75", "I-85", "I-95", "I-16"], cities: ["Atlanta", "Savannah", "Macon", "Augusta", "Valdosta"] },
  { name: "Hawaii", slug: "hawaii", abbr: "HI", capital: "Honolulu", corridors: ["H-1", "H-2", "H-3"], cities: ["Honolulu", "Hilo", "Kailua"] },
  { name: "Idaho", slug: "idaho", abbr: "ID", capital: "Boise", corridors: ["I-84", "I-86", "I-90", "I-15"], cities: ["Boise", "Idaho Falls", "Twin Falls", "Coeur d'Alene"] },
  { name: "Illinois", slug: "illinois", abbr: "IL", capital: "Springfield", corridors: ["I-55", "I-57", "I-70", "I-80", "I-90", "I-94"], cities: ["Chicago", "Springfield", "Rockford", "Effingham"] },
  { name: "Indiana", slug: "indiana", abbr: "IN", capital: "Indianapolis", corridors: ["I-65", "I-69", "I-70", "I-74", "I-80", "I-90", "I-94"], cities: ["Indianapolis", "Fort Wayne", "Gary", "Evansville"] },
  { name: "Iowa", slug: "iowa", abbr: "IA", capital: "Des Moines", corridors: ["I-35", "I-80", "I-29", "I-380"], cities: ["Des Moines", "Cedar Rapids", "Davenport", "Council Bluffs"] },
  { name: "Kansas", slug: "kansas", abbr: "KS", capital: "Topeka", corridors: ["I-70", "I-35", "I-135"], cities: ["Wichita", "Topeka", "Kansas City", "Salina"] },
  { name: "Kentucky", slug: "kentucky", abbr: "KY", capital: "Frankfort", corridors: ["I-64", "I-65", "I-71", "I-75", "I-24"], cities: ["Louisville", "Lexington", "Bowling Green", "Elizabethtown"] },
  { name: "Louisiana", slug: "louisiana", abbr: "LA", capital: "Baton Rouge", corridors: ["I-10", "I-12", "I-20", "I-49", "I-55"], cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"] },
  { name: "Maine", slug: "maine", abbr: "ME", capital: "Augusta", corridors: ["I-95", "I-295"], cities: ["Portland", "Bangor", "Augusta", "Lewiston"] },
  { name: "Maryland", slug: "maryland", abbr: "MD", capital: "Annapolis", corridors: ["I-95", "I-70", "I-68", "I-83", "I-81"], cities: ["Baltimore", "Hagerstown", "Frederick", "Annapolis"] },
  { name: "Massachusetts", slug: "massachusetts", abbr: "MA", capital: "Boston", corridors: ["I-90", "I-95", "I-91", "I-84"], cities: ["Boston", "Worcester", "Springfield", "Sturbridge"] },
  { name: "Michigan", slug: "michigan", abbr: "MI", capital: "Lansing", corridors: ["I-75", "I-94", "I-96", "I-69"], cities: ["Detroit", "Grand Rapids", "Lansing", "Flint"] },
  { name: "Minnesota", slug: "minnesota", abbr: "MN", capital: "Saint Paul", corridors: ["I-35", "I-90", "I-94"], cities: ["Minneapolis", "Saint Paul", "Duluth", "Rochester"] },
  { name: "Mississippi", slug: "mississippi", abbr: "MS", capital: "Jackson", corridors: ["I-10", "I-20", "I-55", "I-59"], cities: ["Jackson", "Gulfport", "Hattiesburg", "Meridian"] },
  { name: "Missouri", slug: "missouri", abbr: "MO", capital: "Jefferson City", corridors: ["I-44", "I-55", "I-70", "I-29", "I-35"], cities: ["St. Louis", "Kansas City", "Springfield", "Columbia"] },
  { name: "Montana", slug: "montana", abbr: "MT", capital: "Helena", corridors: ["I-90", "I-94", "I-15"], cities: ["Billings", "Missoula", "Great Falls", "Bozeman"] },
  { name: "Nebraska", slug: "nebraska", abbr: "NE", capital: "Lincoln", corridors: ["I-80", "I-29", "I-76"], cities: ["Omaha", "Lincoln", "Grand Island", "North Platte"] },
  { name: "Nevada", slug: "nevada", abbr: "NV", capital: "Carson City", corridors: ["I-15", "I-80", "I-580"], cities: ["Las Vegas", "Reno", "Elko", "Carson City"] },
  { name: "New Hampshire", slug: "new-hampshire", abbr: "NH", capital: "Concord", corridors: ["I-93", "I-95", "I-89"], cities: ["Manchester", "Nashua", "Concord", "Portsmouth"] },
  { name: "New Jersey", slug: "new-jersey", abbr: "NJ", capital: "Trenton", corridors: ["I-95", "I-78", "I-80", "I-287"], cities: ["Newark", "Jersey City", "Trenton", "Camden"] },
  { name: "New Mexico", slug: "new-mexico", abbr: "NM", capital: "Santa Fe", corridors: ["I-10", "I-25", "I-40"], cities: ["Albuquerque", "Las Cruces", "Santa Fe", "Gallup"] },
  { name: "New York", slug: "new-york", abbr: "NY", capital: "Albany", corridors: ["I-87", "I-90", "I-95", "I-81", "I-86"], cities: ["New York City", "Buffalo", "Albany", "Syracuse"] },
  { name: "North Carolina", slug: "north-carolina", abbr: "NC", capital: "Raleigh", corridors: ["I-40", "I-85", "I-95", "I-77", "I-26"], cities: ["Charlotte", "Raleigh", "Greensboro", "Fayetteville"] },
  { name: "North Dakota", slug: "north-dakota", abbr: "ND", capital: "Bismarck", corridors: ["I-94", "I-29"], cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"] },
  { name: "Ohio", slug: "ohio", abbr: "OH", capital: "Columbus", corridors: ["I-70", "I-71", "I-75", "I-80", "I-90", "I-76"], cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"] },
  { name: "Oklahoma", slug: "oklahoma", abbr: "OK", capital: "Oklahoma City", corridors: ["I-35", "I-40", "I-44"], cities: ["Oklahoma City", "Tulsa", "Norman", "Lawton"] },
  { name: "Oregon", slug: "oregon", abbr: "OR", capital: "Salem", corridors: ["I-5", "I-84", "I-205"], cities: ["Portland", "Salem", "Eugene", "Medford"] },
  { name: "Pennsylvania", slug: "pennsylvania", abbr: "PA", capital: "Harrisburg", corridors: ["I-76", "I-78", "I-80", "I-81", "I-95", "I-70"], cities: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"] },
  { name: "Rhode Island", slug: "rhode-island", abbr: "RI", capital: "Providence", corridors: ["I-95", "I-195"], cities: ["Providence", "Warwick", "Cranston"] },
  { name: "South Carolina", slug: "south-carolina", abbr: "SC", capital: "Columbia", corridors: ["I-20", "I-26", "I-77", "I-85", "I-95"], cities: ["Columbia", "Charleston", "Greenville", "Florence"] },
  { name: "South Dakota", slug: "south-dakota", abbr: "SD", capital: "Pierre", corridors: ["I-90", "I-29", "I-229"], cities: ["Sioux Falls", "Rapid City", "Pierre", "Mitchell"] },
  { name: "Tennessee", slug: "tennessee", abbr: "TN", capital: "Nashville", corridors: ["I-40", "I-24", "I-55", "I-65", "I-75", "I-81"], cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"] },
  { name: "Texas", slug: "texas", abbr: "TX", capital: "Austin", corridors: ["I-10", "I-20", "I-35", "I-40", "I-45", "I-30"], cities: ["Houston", "Dallas", "San Antonio", "Austin", "El Paso"] },
  { name: "Utah", slug: "utah", abbr: "UT", capital: "Salt Lake City", corridors: ["I-15", "I-70", "I-80", "I-84"], cities: ["Salt Lake City", "Provo", "Ogden", "St. George"] },
  { name: "Vermont", slug: "vermont", abbr: "VT", capital: "Montpelier", corridors: ["I-89", "I-91"], cities: ["Burlington", "Montpelier", "Rutland"] },
  { name: "Virginia", slug: "virginia", abbr: "VA", capital: "Richmond", corridors: ["I-95", "I-81", "I-64", "I-66", "I-77"], cities: ["Richmond", "Virginia Beach", "Roanoke", "Bristol"] },
  { name: "Washington", slug: "washington", abbr: "WA", capital: "Olympia", corridors: ["I-5", "I-90", "I-82", "I-405"], cities: ["Seattle", "Spokane", "Tacoma", "Yakima"] },
  { name: "West Virginia", slug: "west-virginia", abbr: "WV", capital: "Charleston", corridors: ["I-64", "I-77", "I-79", "I-81", "I-70"], cities: ["Charleston", "Huntington", "Morgantown", "Beckley"] },
  { name: "Wisconsin", slug: "wisconsin", abbr: "WI", capital: "Madison", corridors: ["I-90", "I-94", "I-43", "I-39"], cities: ["Milwaukee", "Madison", "Green Bay", "Eau Claire"] },
  { name: "Wyoming", slug: "wyoming", abbr: "WY", capital: "Cheyenne", corridors: ["I-80", "I-25", "I-90"], cities: ["Cheyenne", "Casper", "Laramie", "Rock Springs"] }
];

export function getState(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

export const STATE_SLUGS = STATES.map((s) => s.slug);
