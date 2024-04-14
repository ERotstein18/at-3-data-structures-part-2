

// ARRAY
const timbuktuCoordinates: number[] = [16.7666, -3.0026];

// TUPLE
const timbuktuCoordinates: [number, number] = [16.7666, -3.0026];

// ENUM
enum Coordinates {
    LATITUDE = 16.7666,
    LONGITUDE = -3.0026,
  }
const timbuktuCoordinates = Coordinates;
  
// OBJECT
const timbuktuCoordinates = {
    lat: 16.7666,
    long: -3.0026,
};
  

// INTERFACE
interface Coordinates {
    lat: number;
    long: number;
  }
  const timbuktuCoordinates: Coordinates = {
    lat: 16.7666,
    long: -3.0026,
};
  
//ALIAS
type Coordinates = {
    lat: number;
    long: number;
}
const timbuktuCoordinates: Coordinates = {
    lat: 16.7666,
    long: -3.0026,
}