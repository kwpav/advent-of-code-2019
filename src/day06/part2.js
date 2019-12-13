import { generateOrbits } from './part1';

const calculateOrbitalTransfers = (orbitMap) => {
  const orbits = generateOrbits(orbitMap.split('\n').filter(Boolean));
  return findShortestPath(orbits.YOU.parent, orbits).length;
};

const findShortestPath = (planet, orbitMap, origin = 'YOU', path = []) => {
  const nextPlanets = [orbitMap[planet].parent].concat(orbitMap[planet].children).filter(Boolean);

  for (let idx = 0; idx < nextPlanets.length; idx += 1) {
    const currentPlanet = nextPlanets[idx];

    if (currentPlanet === 'SAN') {
      return path;
    }

    if (currentPlanet !== origin) {
      const isValidPath = findShortestPath(currentPlanet, orbitMap, planet, path);
      if (isValidPath) {
        path.push(currentPlanet);
        return isValidPath;
      }
    }
  }
  return null;
};

export { calculateOrbitalTransfers, findShortestPath };
