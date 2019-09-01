export default {
  name: 'Miller Park',
  team: {
    city: 'Milwaukee',
    name: 'Brewers',
    color: '#B6922E',
    league: "NL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 16.5,
      height: -1,
      r: (θ) => 4068.1011 / (Math.sin(θ) + (11.7916 * Math.cos(θ))),
    },
    {
      min: 16.5,
      max: 16.8,
      height: -1,
      r: (θ) => -60.8626 / (Math.sin(θ) - (0.47706 * Math.cos(θ))),
    },
    {
      min: 16.8,
      max: 23.3,
      height: -1,
      r: (θ) => 3834.475 / (Math.sin(θ) + (10.73232 * Math.cos(θ))),
    },
    {
      min: 23.3,
      max: 35.5,
      height: -1,
      r: (θ) => 1042.985 / (Math.sin(θ) + (2.60569 * Math.cos(θ))),
    },
    {
      min: 35.5,
      max: 37.7,
      height: -1,
      r: (θ) => -1107.4106 / (Math.sin(θ) - (4.237288 * Math.cos(θ))),
    },
    {
      min: 37.7,
      max: 52.3,
      height: -1,
      r: (θ) => 566.7112 / (Math.sin(θ) + Math.cos(θ)),
    },
    {
      min: 52.3,
      max: 56.2,
      height: -1,
      r: (θ) => 287.52 / (Math.sin(θ) - (0.130068 * Math.cos(θ))),
    },
    {
      min: 56.2,
      max: 74,
      height: -1,
      r: (θ) => 393.8230 / (Math.sin(θ) + (0.374126 * Math.cos(θ))),
    },
    {
      min: 74,
      max: 85,
      height: -1,
      r: (θ) => 358.50448 / (Math.sin(θ) + (0.027824 * Math.cos(θ))),
    },
    {
      min: 85,
      max: 90,
      height: -1,
      r: (θ) => 334 / (Math.sin(θ) - (0.435742 * Math.cos(θ))),
    },
  ]
}
