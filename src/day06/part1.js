const calculateTotalOrbits = (orbitMap) => {
  const orbits = generateOrbits(orbitMap.split('\n').filter(Boolean));
  const orbitSizes = Object.keys(orbits)
    .map((planet) => calculateOrbitSize(planet, orbits))
    .reduce(sum, 0);
  return orbitSizes;
};

const generateOrbits = (orbitMap) => {
  const orbits = {};
  orbitMap.forEach((orbit) => {
    const [center, orbiter] = orbit.split(')');
    if (!orbits[center]) {
      orbits[center] = {
        children: [orbiter],
        parent: null,
      };
    } else if (orbits[center]) {
      orbits[center].children.push(orbiter);
    }
    if (!orbits[orbiter]) {
      orbits[orbiter] = {
        children: [],
        parent: center,
      };
    } else if (orbits[orbiter]) {
      orbits[orbiter].parent = center;
    }
  });
  return orbits;
};

const calculateOrbitSize = (planet, orbitMap, size = 0) => {
  const incsize = size + 1;
  return orbitMap[planet].parent !== null
    ? calculateOrbitSize(orbitMap[planet].parent, orbitMap, incsize)
    : size;
};

const sum = (a, b) => a + b;

export { calculateTotalOrbits, calculateOrbitSize, generateOrbits };
