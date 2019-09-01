export default {
  name: 'Rogers Centre',
  team: {
    city: 'Toronto',
    name: 'Blue Jays',
    color: '#134A8E',
    league: "AL",
    division: "E",
  },
  walls: [
    {
      min: 0,
      max: 20,
      height: -1,
      r: (θ) => -1725.1974 / (Math.sin(θ) - (5.2597 * Math.cos(θ))),
    },
    {
      min: 20,
      max: 32.5,
      height: -1,
      r: (θ) => 2160.354 / (Math.sin(θ) + (5.7667 * Math.cos(θ))),
    },
    {
      min: 32.5,
      max: 57.5,
      height: -1,
      r: (θ) => 400,
    },
    {
      min: 57.5,
      max: 70,
      height: -1,
      r: (θ) => 374.6529 / (Math.sin(θ) + (0.17341 * Math.cos(θ))),
    },
    {
      min: 70,
      max: 90,
      height: -1,
      r: (θ) => 328 / (Math.sin(θ) - (0.19012 * Math.cos(θ))),
    },
  ]
}
