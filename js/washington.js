export default {
  name: 'Nationals Park',
  team: {
    city: 'Washington',
    name: 'Nationals',
    color: '#AB0003',
    league: 'NL',
    division: 'E',
  },
  walls: [
    {
      min: 0,
      max: 13.1,
      height: -1,
      r: (θ) => -1192.9 / (Math.sin(θ) - (3.56091 * Math.cos(θ))),
    },
    {
      min: 13.1,
      max: 46.5,
      height: -1,
      r: (θ) => 1018.837 / (Math.sin(θ) + (2.609847 * Math.cos(θ))),
    },
    {
      min: 46.5,
      max: 57.9,
      height: -1,
      r: (θ) => 372.8599 / (Math.sin(θ) + (0.286983 * Math.cos(θ))),
    },
    {
      min: 57.9,
      max: 59,
      height: -1,
      r: (θ) => 1089.6378 / (Math.sin(θ) + (3.903208 * Math.cos(θ))),
    },
    {
      min: 59,
      max: 74.1,
      height: -1,
      r: (θ) => 383.87617 / (Math.sin(θ) + (0.297133 * Math.cos(θ))),
    },
    {
      min: 74.1,
      max: 74.2,
      height: -1,
      r: (θ) => 163.401 / (Math.sin(θ) - (1.88975 * Math.cos(θ))),
    },
    {
      min: 74.2,
      max: 76.5,
      height: -1,
      r: (θ) => 377.1893 / (Math.sin(θ) + (0.261412 * Math.cos(θ))),
    },
    {
      min: 76.5,
      max: 90,
      height: -1,
      r: (θ) => 336 / (Math.sin(θ) - (0.221987 * Math.cos(θ))),
    },
  ],
};
