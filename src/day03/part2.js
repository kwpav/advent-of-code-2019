const part1 = require('./part1');

const calculateShortestSteps = (input) => {
  // get the paths of both of the wires
  const paths = input.split('\n').map(part1.getWirePath);
  // get all the places the wires intersect
  const intersections = part1.getIntersections(paths[0], paths[1]);
  // get the amount of steps needed by each path for each intersection
  // the first paths steps
  const steps1 = intersections.map((intersection) => (
    pathStepsUntilIntersection(paths[0], intersection)));
  // the next paths steps
  const steps2 = intersections.map((intersection) => (
    pathStepsUntilIntersection(paths[1], intersection)));
  // now add them all together to get the total number, and return the min for the answer
  const steps = steps1.map((num, idx) => (
    num + steps2[idx]
  ));
  return Math.min(...steps);
};

const pathStepsUntilIntersection = (path, intersection) => {
  let steps = calculateManhattanDistance({ x: 0, y: 0 }, path[0]);
  for (let i = 0; i < path.length - 1; i += 1) {
    if (isPointInLine(path[i], path[i + 1], intersection)) {
      steps += calculateManhattanDistance(path[i], intersection);
      return steps;
    }
    steps += calculateManhattanDistance(path[i], path[i + 1]);
  }
  return steps;
};

// a and b are a line segment, c is the point we are looking for
const isPointInLine = (a, b, c) => {
  let intersects = false;
  if (a.x === c.x || b.x === c.x) {
    intersects = c.y > Math.min(a.y, b.y, c.y) && c.y < Math.max(a.y, b.y, c.y);
  } else if (a.y === c.y || b.y === c.y) {
    intersects = c.x > Math.min(a.x, b.x, c.x) && c.x < Math.max(a.x, b.x, c.x);
  }
  return intersects;
};

const calculateManhattanDistance = (point1, point2) => (
  Math.abs(point2.x - point1.x) + Math.abs(point2.y - point1.y)
);

exports.calculateShortestSteps = calculateShortestSteps;
exports.calculateManhattanDistance = calculateManhattanDistance;
exports.pathStepsUntilIntersection = pathStepsUntilIntersection;
exports.isPointInLine = isPointInLine;
