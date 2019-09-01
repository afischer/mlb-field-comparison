export default {
  name: 'Yankee Stadium',
  team: {
    city: 'New York',
    name: 'Yankees',
    color: '#003087',
    league: "AL",
    division: "E",
  },
  walls: [
    {
      min: 0,
      max: 3.2,
      height: -1,
      r: (θ) => -752.7415 / (Math.sin(θ) - (2.397266 * Math.cos(θ))),
    },
    {
      min: 3.2,
      max: 4.9,
      height: -1,
      r: (θ) => -1341.4764 / (Math.sin(θ) - (4.22849 * Math.cos(θ))),
    },
    {
      min: 4.9,
      max: 30.6,
      height: -1,
      r: (θ) => 323.639 /  Math.cos(θ),
    },
    {
      min: 30.6,
      max: 36.1,
      height: -1,
      r: (θ) => 2683.6147 / (Math.sin(θ) + (7.70062 * Math.cos(θ))),
    },
    {
      min: 36.1,
      max: 40.4,
      height: -1,
      r: (θ) => 913.27186 / (Math.sin(θ) + (2.139572 * Math.cos(θ))),
    },
    {
      min: 40.4,
      max: 44.4,
      height: -1,
      r: (θ) => 707.36801 / (Math.sin(θ) + (1.4653105 * Math.cos(θ))),
    },
    {
      min: 44.4,
      max: 48.4,
      height: -1,
      r: (θ) => 600.6388 / (Math.sin(θ) + (1.096466 * Math.cos(θ))),
    },
    {
      min: 48.4,
      max: 52.1,
      height: -1,
      r: (θ) => 496.311752 / (Math.sin(θ) + (0.7103818 * Math.cos(θ))),
    },
    {
      min: 52.1,
      max: 56.7,
      height: -1,
      r: (θ) => 445.2994 / (Math.sin(θ) + (0.5053365 * Math.cos(θ))),
    },
    {
      min: 56.7,
      max: 62.8,
      height: -1,
      r: (θ) => 390.30014 / (Math.sin(θ) + (0.2548946 * Math.cos(θ))),
    },
    {
      min: 62.8,
      max: 80.6,
      height: -1,
      r: (θ) => 345.39856 / (Math.sin(θ) + (0.001719809 * Math.cos(θ))),
    },
    {
      min: 80.6,
      max: 84.8,
      height: -1,
      r: (θ) => 324.4985 / (Math.sin(θ) - (0.3638949 * Math.cos(θ))),
    },
    {
      min: 84.8,
      max: 90,
      height: -1,
      r: (θ) => 316 / (Math.sin(θ) - (0.6421415 * Math.cos(θ))),
    },
  ]
}
