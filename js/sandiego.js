export default {
  name: 'PETCO Park',
  team: {
    city: 'San Diego',
    name: 'Padres',
    color: '#002D62',
    league: 'NL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 3.4,
      height: -1,
      r: (θ) => 321.433 / Math.cos(θ),
    },
    {
      min: 3.4,
      max: 7.2,
      height: -1,
      r: (θ) => -311.7359 / (Math.sin(θ) - (1.020242 * Math.cos(θ))),
    },
    {
      min: 7.2,
      max: 27.8,
      height: -1,
      r: (θ) => 345.8716 / Math.cos(θ),
    },
    {
      min: 27.8,
      max: 31.8,
      height: -1,
      r: (θ) => 1425.7353 / (Math.sin(θ) + (3.59492 * Math.cos(θ))),
    },
    {
      min: 31.8,
      max: 38.3,
      height: -1,
      r: (θ) => 740.2202 / (Math.sin(θ) + (1.568308 * Math.cos(θ))),
    },
    {
      min: 38.3,
      max: 49.2,
      height: -1,
      r: (θ) => 543.05468 / (Math.sin(θ) + (0.9402139 * Math.cos(θ))),
    },
    {
      min: 49.2,
      max: 50.4,
      height: -1,
      r: (θ) => 318.3662 / (Math.sin(θ) + (0.0718681 * Math.cos(θ))),
    },
    {
      min: 50.4,
      max: 56.2,
      height: -1,
      r: (θ) => 530.44852 / (Math.sin(θ) + (0.9611939 * Math.cos(θ))),
    },
    {
      min: 56.2,
      max: 63.5,
      height: -1,
      r: (θ) => 393.566469 / (Math.sin(θ) + (0.2972994 * Math.cos(θ))),
    },
    {
      min: 63.5,
      max: 83.8,
      height: -1,
      r: (θ) => 344.316 / (Math.sin(θ) + (0.0091096 * Math.cos(θ))),
    },
    {
      min: 83.8,
      max: 90,
      height: -1,
      r: (θ) => 336 / (Math.sin(θ) - (0.2134522 * Math.cos(θ))),
    },
  ],
};
