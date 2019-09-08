export default {
  name: 'Fenway Park',
  team: {
    city: 'Boston',
    name: 'Red Sox',
    color: '#BD3039',
    league: 'AL',
    division: 'E',
  },
  walls: [
    {
      min: 0,
      max: 3.8,
      height: 5, // COMBAK this is actually a slope
      r: (θ) => -119.0423 / (Math.sin(θ) - (0.3941798 * Math.cos(θ))),
    },
    {
      min: 3.8,
      max: 4.9,
      height: 5,
      r: (θ) => -402.289 / (Math.sin(θ) - (1.17404 * Math.cos(θ))),
    },
    {
      min: 4.9,
      max: 6,
      height: 5,
      r: (θ) => -808.953 / (Math.sin(θ) - (2.274195 * Math.cos(θ))),
    },
    {
      min: 6,
      max: 7.1,
      height: 3,
      r: (θ) => -2332.79083 / (Math.sin(θ) - (6.3601456 * Math.cos(θ))),
    },
    {
      min: 7.1,
      max: 8.1,
      height: 3,
      r: (θ) => -20759.85313 / (Math.sin(θ) - (55.616 * Math.cos(θ))),
    },
    {
      min: 8.1,
      max: 31,
      height: 5,
      r: (θ) => 1129.33168 / (Math.sin(θ) + (2.875435 * Math.cos(θ))),
    },
    {
      min: 31,
      max: 33.8,
      height: 5,
      r: (θ) => -417.143116 / (Math.sin(θ) - (1.8849057 * Math.cos(θ))),
    },
    {
      min: 33.8,
      max: 52.2,
      height: 17,
      r: (θ) => 431.2604 / (Math.sin(θ) + (0.587157 * Math.cos(θ))),
    },
    {
      min: 52.2,
      max: 53.1,
      height: 37,
      r: (θ) => 2077.8716 / (Math.sin(θ) + (7.7513156 * Math.cos(θ))),
    },
    {
      min: 53.1,
      max: 90,
      height: 37,
      r: (θ) => 306 / (Math.sin(θ) + (0.00577087 * Math.cos(θ))),
    },
  ],
};
