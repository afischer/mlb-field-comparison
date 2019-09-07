export default {
  name: 'Camden Yards',
  team: {
    city: 'Baltimore',
    name: 'Orioles',
    color: '#DF4601',
    league: 'AL',
    division: 'E',
  },
  walls: [
    {
      min: 0,
      max: 25.5,
      height: -1,
      r: (θ) => -1786.977 / (Math.sin(θ) - (5.61942 * Math.cos(θ))),
    },
    {
      min: 25.5,
      max: 49,
      height: -1,
      r: (θ) => 801.702 / (Math.sin(θ) + (1.830 * Math.cos(θ))),
    },
    {
      min: 49,
      max: 82,
      height: -1,
      r: (θ) => 359.7761 / (Math.sin(θ) + (0.187168 * Math.cos(θ))),
    },
    {
      min: 82,
      max: 90,
      height: -1,
      r: (θ) => 331 / (Math.sin(θ) - (0.396914 * Math.cos(θ))),
    },
  ],
};
