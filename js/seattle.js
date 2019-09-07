export default {
  name: 'Safeco Field',
  team: {
    city: 'Seattle',
    name: 'Mariners',
    color: '#005C5C',
    league: 'AL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 26.5,
      height: -1,
      r: (θ) => -3502.437 / (Math.sin(θ) - (10.74367 * Math.cos(θ))),
    },
    {
      min: 26.5,
      max: 47,
      height: -1,
      r: (θ) => 825.224 / (Math.sin(θ) + (1.9153 * Math.cos(θ))),
    },
    {
      min: 47,
      max: 59.6,
      height: -1,
      r: (θ) => 414.71 / (Math.sin(θ) + (0.427476 * Math.cos(θ))),
    },
    {
      min: 59.6,
      max: 66.5,
      height: -1,
      r: (θ) => 377.4922 / (Math.sin(θ) + (0.2382 * Math.cos(θ))),
    },
    {
      min: 66.5,
      max: 88.5,
      height: -1,
      r: (θ) => 336.558 / (Math.sin(θ) - (0.037016 * Math.cos(θ))),
    },
    {
      min: 88.5,
      max: 90,
      height: -1,
      r: (θ) => 331 / (Math.sin(θ) - (0.6671 * Math.cos(θ))),
    },
  ],
};
