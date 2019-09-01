export default {
  name: 'U.S. Cellular Field',
  team: {
    city: 'Chicago',
    name: 'White Sox',
    color: '#27251F',
    league: "AL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 24.1,
      height: -1,
      r: (θ) => -7014.6043 / (Math.sin(θ) - (20.930117 * Math.cos(θ))),
    },
    {
      min: 24.1,
      max: 30.6,
      height: -1,
      r: (θ) => 1495.6997 / (Math.sin(θ) + (3.92207 * Math.cos(θ))),
    },
    {
      min: 30.6,
      max: 36.6,
      height: -1,
      r: (θ) => 820.061 / (Math.sin(θ) + (1.88324 * Math.cos(θ))),
    },
    {
      min: 36.6,
      max: 39.1,
      height: -1,
      r: (θ) => 1969.1459 / (Math.sin(θ) + (5.562717 * Math.cos(θ))),
    },
    {
      min: 39.1,
      max: 50.6,
      height: -1,
      r: (θ) => 561.4969 / (Math.sin(θ) + (1.00525 * Math.cos(θ))),
    },
    {
      min: 50.6,
      max: 54,
      height: -1,
      r: (θ) => 363.2118 / (Math.sin(θ) + (0.2203438 * Math.cos(θ))),
    },
    {
      min: 54,
      max: 58.7,
      height: -1,
      r: (θ) => 426.18439 / (Math.sin(θ) + (0.49718 * Math.cos(θ))),
    },
    {
      min: 58.7,
      max: 63.4,
      height: -1,
      r: (θ) => 378.8179 / (Math.sin(θ) + (0.259128 * Math.cos(θ))),
    },
    {
      min: 63.4,
      max: 79,
      height: -1,
      r: (θ) => 340.82399 / (Math.sin(θ) + (0.03285 * Math.cos(θ))),
    },
    {
      min: 79,
      max: 90,
      height: -1,
      r: (θ) => 327 / (Math.sin(θ) - (0.177146 * Math.cos(θ))),
    },
  ]
}
