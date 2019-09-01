export default {
  name: 'Citizens Bank Park',
  team: {
    city: 'Philadelphia',
    name: 'Phillies',
    color: '#e81828',
    league: "NL",
    division: "E",
  },
  walls: [
    {
      min: 0,
      max: 34.3,
      height: -1,
      r: (θ) => 330 / Math.cos(θ),
    },
    {
      min: 34.3,
      max: 50.7,
      height: -1,
      r: (θ) => 644.15 / (Math.sin(θ) + (1.277017 * Math.cos(θ))),
    },
    {
      min: 50.7,
      max: 55.9,
      height: -1,
      r: (θ) => 308.591 / (Math.sin(θ) - (0.02468 * Math.cos(θ))),
    },
    {
      min: 55.9,
      max: 59.3,
      height: -1,
      r: (θ) => 543.4657 / (Math.sin(θ) + (1.08071 * Math.cos(θ))),
    },
    {
      min: 59.3,
      max: 88.3,
      height: -1,
      r: (θ) => 331 / Math.sin(θ),
    },
    {
      min: 88.3,
      max: 90,
      height: -1,
      r: (θ) => 325 / (Math.sin(θ) - (0.596191 * Math.cos(θ))),
    },
  ]
}
