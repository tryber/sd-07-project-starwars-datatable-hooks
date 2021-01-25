export default function sortPlanets(planets, key, crescent = true) {
  return planets.sort((planet, otherPlanet) => {
    const one = 1;
    const zero = 0;
    if (planet[key] === 'unknown' && otherPlanet[key] === 'unknown') return zero;
    if (!(Number.isNaN(planet[key]) && Number.isNaN(otherPlanet[key]))) {
      if (+planet[key] > +otherPlanet[key]) return crescent ? one : -one;
      if (+otherPlanet[key] > +planet[key]) return crescent ? -one : one;
    }
    if (planet[key] > otherPlanet[key]) return crescent ? one : -one;
    if (otherPlanet[key] > planet[key]) return crescent ? -one : one;
    return zero;
  });
}
