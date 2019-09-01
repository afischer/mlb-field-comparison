export default {
  name: 'Chase Field',
  team: {
    city: 'Arizona',
    name: 'Diamondbacks',
    color: '#A71930',
    league: "NL",
    division: "W",
  },
  walls: [
    {
      min: 0,
      max: 4.9,
      height: -1,
      r: (θ) => - 389.4197 / (Math.sin(θ) - (1.1624468 * Math.cos(θ))),
    },
    {
      min: 4.9,
      max: 6.6,
      height: -1,
      r: (θ) => 423.5471 / (Math.sin(θ) + (1.085346 * Math.cos(θ))),
    },
    {
      min: 6.6,
      max: 31.7,
      height: -1,
      r: (θ) => 6211.3885 / (Math.sin(θ) + (17.49780 * Math.cos(θ))),
    },
    {
      min: 31.7,
      max: 32.9,
      height: -1,
      r: (θ) => 427.9667 / (Math.sin(θ) + (0.630552 * Math.cos(θ))),
    },
    {
      min: 32.9,
      max: 34,
      height: -1,
      r: (θ) => 1197.8397 / (Math.sin(θ) + (2.9286229 * Math.cos(θ))),
    },
    {
      min: 34,
      max: 38.9,
      height: -1,
      r: (θ) => 559.10919 / (Math.sin(θ) + (1.0073058 * Math.cos(θ))),
    },
    {
      min: 38.9,
      max: 39.1,
      height: -1,
      r: (θ) => -91.557622 / (Math.sin(θ) - (1.10398508 * Math.cos(θ))),
    },
    {
      min: 39.1,
      max: 50.5,
      height: -1,
      r: (θ) => 571.02441 / (Math.sin(θ) + (1.007058 * Math.cos(θ))),
    },
    {
      min: 50.5,
      max: 50.8,
      height: -1,
      r: (θ) => 114.59269 / (Math.sin(θ) - (0.76826977 * Math.cos(θ))),
    },
    {
      min: 50.8,
      max: 55.7,
      height: -1,
      r: (θ) => 557.962 / (Math.sin(θ) + (1.0031979 * Math.cos(θ))),
    },
    {
      min: 55.7,
      max: 56.7,
      height: -1,
      r: (θ) => 403.8808 / (Math.sin(θ) + (0.3213439 * Math.cos(θ))),
    },
    {
      min: 56.7,
      max: 57.7,
      height: -1,
      r: (θ) => 755.17044 / (Math.sin(θ) + (1.924966 * Math.cos(θ))),
    },
    {
      min: 57.7,
      max: 82.5,
      height: -1,
      r: (θ) => 353.793768 / (Math.sin(θ) + (0.06108017 * Math.cos(θ))),
    },
    {
      min: 82.5,
      max: 84.2,
      height: -1,
      r: (θ) => 395.0241 / (Math.sin(θ) + (0.9533913 * Math.cos(θ))),
    },
    {
      min: 84.2,
      max: 90,
      height: -1,
      r: (θ) => 327 / (Math.sin(θ) - (0.9060869 * Math.cos(θ))),
    },
  ]
}
