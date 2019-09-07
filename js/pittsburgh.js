export default {
  name: 'PNC Park',
  team: {
    city: 'Pittsburgh',
    name: 'Pirates',
    color: '#FDB827',
    league: 'NL',
    division: 'C',
  },
  walls: [
    {
      min: 0,
      max: 22.3,
      height: -1,
      r: (θ) => -1758.947 / (Math.sin(θ) - (5.4827 * Math.cos(θ))),
    },
    {
      min: 22.3,
      max: 34.1,
      height: -1,
      r: (θ) => 1120.146 / (Math.sin(θ) + (2.8184 * Math.cos(θ))),
    },
    {
      min: 34.1,
      max: 44.3,
      height: -1,
      r: (θ) => 716 / (Math.sin(θ) + (1.56 * Math.cos(θ))),
    },
    {
      min: 44.3,
      max: 58.5,
      height: -1,
      r: (θ) => 478.809 / (Math.sin(θ) + (0.71785 * Math.cos(θ))),
    },
    {
      min: 58.5,
      max: 59.6,
      height: -1,
      r: (θ) => -4560.837 / (Math.sin(θ) - (24.0136 * Math.cos(θ))),
    },
    {
      min: 59.6,
      max: 81.5,
      height: -1,
      r: (θ) => 366.846 / (Math.sin(θ) + (0.089958 * Math.cos(θ))),
    },
    {
      min: 81.5,
      max: 90,
      height: -1,
      r: (θ) => 321 / (Math.sin(θ) - (0.75751 * Math.cos(θ))),
    },
  ],
};
