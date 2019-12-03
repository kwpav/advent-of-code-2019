const calculateDistance = (input) => {
  // get the paths of both of the wires
  const paths = input.split('\n').map(getWirePath);
  // get all the places the wires intersect
  const intersections = getIntersections(paths[0], paths[1]);
  // get the manhattan distance of the closest intersection
  const closestIntersection = getClosestIntersection(intersections);
  return closestIntersection;
};

const getWirePath = (directions) => {
  const path = [];
  let currentPoint = { x: 0, y: 0 };
  parseDirections(directions).forEach((direction) => {
    const nextPoint = getNextPoint(direction, currentPoint);
    path.push({ ...nextPoint });
    currentPoint = nextPoint;
  });
  return path;
};

const getNextPoint = (direction, currentPoint) => {
  const point = currentPoint;
  switch (direction[0]) {
    case 'U':
      point.y += direction[1];
      break;
    case 'D':
      point.y -= direction[1];
      break;
    case 'L':
      point.x -= direction[1];
      break;
    case 'R':
      point.x += direction[1];
      break;
    default:
      break;
  }
  return point;
};

const parseDirections = (directions) => (
  directions.split(',').map((d) => {
    const i = [];
    i[0] = d.slice(0, 1);
    i[1] = parseInt(d.slice(1), 10);
    return i;
  })
);

const getIntersections = (path1, path2) => {
  const intersections = [];

  // go through each of the two paths to see if they intersect
  for (let i = 0; i < path1.length - 1; i += 1) {
    for (let j = 0; j < path2.length - 1; j += 1) {
      const intersection = getIntersection(path1[i], path1[i + 1], path2[j], path2[j + 1]);
      if (intersection) {
        intersections.push({ ...intersection });
      }
    }
  }
  return intersections;
};

// TAKEN FROM:
// http://paulbourke.net/geometry/pointlineplane/javascript.txt
// line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Determine the intersection point of two line segments
// Return FALSE if the lines don't intersect
const getIntersection = (a, b, c, d) => {
  // Check if none of the lines are of length 0
  if ((a.x === b.x && a.y === b.y) || (c.x === d.x && c.y === d.y)) {
    return false;
  }

  const denominator = ((d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y));

  // Lines are parallel
  if (denominator === 0) {
    return false;
  }

  const ua = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / denominator;
  const ub = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / denominator;

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  // Return an object with the x and y coordinates of the intersection
  const x = a.x + ua * (b.x - a.x);
  const y = a.y + ua * (b.y - a.y);

  return { x, y };
};

const getClosestIntersection = (intersections) => {
  const distances = intersections.map((intersection) => (
    Math.abs(intersection.x) + Math.abs(intersection.y)
  ));
  return Math.min(...distances);
};

exports.calculateDistance = calculateDistance;
exports.getNextPoint = getNextPoint;
exports.getWirePath = getWirePath;
exports.parseDirections = parseDirections;
exports.getIntersections = getIntersections;
exports.getIntersection = getIntersection;
exports.getClosestIntersection = getClosestIntersection;
