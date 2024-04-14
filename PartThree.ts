interface Country {
    name: string;
    capital: string;
    population: number;
}

const usa: Country = {
    name: 'United States',
    capital: 'Washington, D.C.',
    population: 331002651
  };
  
  const philippines: Country = {
    name: 'Philippines',
    capital: 'Manila',
    population: 109581085
  };
  
function displayCountryInfo(country: Country): void {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
}
  
displayCountryInfo(usa);
displayCountryInfo(philippines);