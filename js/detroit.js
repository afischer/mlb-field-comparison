export default {
  name: 'Comerica Park',
  team: {
    city: 'Detroit',
    name: 'Tigers',
    color: '#FA4616',
    league: 'AL',
    division: 'C',
  },
  walls: [
    {
      min: 0,
      max: 1.25,
      height: -1,
      r: (θ) => -405.584 / (Math.sin(θ) - (1.23813 * Math.cos(θ))),
    },
    {
      min: 1.25,
      max: 22.5,
      height: -1,
      r: (θ) => 337.21 / Math.cos(θ),
    },
    {
      min: 22.5,
      max: 24.6,
      height: -1,
      r: (θ) => -430.4868 / (Math.sin(θ) - (1.6908 * Math.cos(θ))),
    },
    {
      min: 24.6,
      max: 35.3,
      height: -1,
      r: (θ) => 347.675 / Math.cos(θ),
    },
    {
      min: 35.3,
      max: 54,
      height: -1,
      r: (θ) => 593.97 / (Math.sin(θ) + Math.cos(θ)),
    },
    {
      min: 54,
      max: 90,
      height: -1,
      r: (θ) => 345 / Math.sin(θ),
    },
  ],
};
