export default {
  name: 'Tropicana Field',
  team: {
    city: 'Tampa Bay',
    name: 'Rays',
    color: '#092C5C',
    league: "AL",
    division: "E",
  },
  walls: [
    {
      min: 0,
      max: 1.7,
      height: -1,
      r: (θ) => -357.101 / (Math.sin(θ) - (1.109 * Math.cos(θ))),
    },
    {
      min: 1.7,
      max: 33.75,
      height: -1,
      r: (θ) => 331 / Math.cos(θ),
    },
    {
      min: 33.75,
      max: 36.2,
      height: -1,
      r: (θ) => 1678.156 / (Math.sin(θ) + (4.403 * Math.cos(θ))),
    },
    {
      min: 36.2,
      max: 55,
      height: -1,
      r: (θ) => 596.756 / (Math.sin(θ) + (1.09406 * Math.cos(θ))),
    },
    {
      min: 55,
      max: 56.4,
      height: -1,
      r: (θ) => 275.106 / (Math.sin(θ) - (0.2654 * Math.cos(θ))),
    },
    {
      min: 56.4,
      max: 58,
      height: -1,
      r: (θ) => 477.013 / (Math.sin(θ) + (0.6444 * Math.cos(θ))),
    },
    {
      min: 58,
      max: 86,
      height: -1,
      r: (θ) => 342.4305 / (Math.sin(θ) + (0.011121 * Math.cos(θ))),
    },
    {
      min: 86,
      max: 90,
      height: -1,
      r: (θ) => 315 / (Math.sin(θ) - (1.13533 * Math.cos(θ))),
    },
  ]
}
