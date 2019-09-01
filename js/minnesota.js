export default {
  name: 'Target Field',
  team: {
    city: 'Minnesota',
    name: 'Twins',
    color: '#002B5C',
    league: "AL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 20,
      height: -1,
      r: (θ) => -2731.998 / (Math.sin(θ) - (8.3292 * Math.cos(θ))),
    },
    {
      min: 20,
      max: 38.5,
      height: -1,
      r: (θ) => 1691.285 / (Math.sin(θ) + (4.5671 * Math.cos(θ))),
    },
    {
      min: 38.5,
      max: 51.2,
      height: -1,
      r: (θ) => 629.3765 / (Math.sin(θ) + (1.2001 * Math.cos(θ))),
    },
    {
      min: 51.2,
      max: 67,
      height: -1,
      r: (θ) => 382.741 / (Math.sin(θ) + (0.24243 * Math.cos(θ))),
    },
    {
      min: 67,
      max: 90,
      height: -1,
      r: (θ) => 339 / (Math.sin(θ) - (0.05451 * Math.cos(θ))),
    },
  ]
}
