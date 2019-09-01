export default {
  name: 'Globe Life Park',
  team: {
    city: 'Texas',
    name: 'Rangers',
    color: '#003278',
    league: "AL",
    division: "W",
  },
  walls: [
    {
      min: 0,
      max: 4,
      height: -1,
      r: (θ) => -432.031 / (Math.sin(θ) - (1.3252 * Math.cos(θ))),
    },
    {
      min: 4,
      max: 24,
      height: -1,
      r: (θ) => 343.5 / Math.cos(θ),
    },
    {
      min: 24,
      max: 26.1,
      height: -1,
      r: (θ) => 543.706 / (Math.sin(θ) + (1.1376 * Math.cos(θ))),
    },
    {
      min: 26.1,
      max: 34.3,
      height: -1,
      r: (θ) => 336.22 / Math.cos(θ),
    },
    {
      min: 34.3,
      max: 53.1,
      height: -1,
      r: (θ) => 565.81 / (Math.sin(θ) + Math.cos(θ)),
    },
    {
      min: 53.1,
      max: 64.3,
      height: -1,
      r: (θ) => 416.6997 / (Math.sin(θ) + (0.38598 * Math.cos(θ))),
    },
    {
      min: 64.3,
      max: 84.2,
      height: -1,
      r: (θ) => 349.203 / Math.sin(θ),
    },
    {
      min: 84.2,
      max: 90,
      height: -1,
      r: (θ) => 331 / (Math.sin(θ) - (0.51319 * Math.cos(θ))),
    },
  ]
}
