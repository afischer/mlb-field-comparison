export default {
  name: 'Busch Stadium',
  team: {
    city: 'St. Louis',
    name: 'Cardinals',
    color: '#C41E3A',
    league: 'NL',
    division: 'C',
  },
  walls: [
    {
      min: 0,
      max: 3.3,
      height: -1,
      r: (θ) => -436.689 / (Math.sin(θ) - (1.3173 * Math.cos(θ))),
    },
    {
      min: 3.3,
      max: 25.6,
      height: -1,
      r: (θ) => 346.303 / Math.cos(θ),
    },
    {
      min: 25.6,
      max: 39.9,
      height: -1,
      r: (θ) => 857.076 / (Math.sin(θ) + (1.995805 * Math.cos(θ))),
    },
    {
      min: 39.9,
      max: 50,
      height: -1,
      r: (θ) => 569.534 / (Math.sin(θ) + (1.04571 * Math.cos(θ))),
    },
    {
      min: 50,
      max: 64,
      height: -1,
      r: (θ) => 434.192 / (Math.sin(θ) + (0.514 * Math.cos(θ))),
    },
    {
      min: 64,
      max: 88.4,
      height: -1,
      r: (θ) => 346.76 / Math.sin(θ),
    },
    {
      min: 88.4,
      max: 90,
      height: -1,
      r: (θ) => 330 / (Math.sin(θ) - (1.73033 * Math.cos(θ))),
    },
  ],
};
