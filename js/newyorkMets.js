export default {
  name: 'Citi Field',
  team: {
    city: 'New York',
    name: 'Mets',
    color: '#002D72',
    league: "NL",
    division: "E",
  },
  walls: [
    {
      min: 0,
      max: 5.2,
      height: -1,
      r: (θ) => -2766.825 / (Math.sin(θ) - (8.3843195 * Math.cos(θ))),
    },
    {
      min: 5.2,
      max: 7,
      height: -1,
      r: (θ) => -371.523921 / (Math.sin(θ) - (1.204617 * Math.cos(θ))),
    },
    {
      min: 7,
      max: 18.8,
      height: -1,
      r: (θ) => -1855.73071 / (Math.sin(θ) - (5.52645 * Math.cos(θ))),
    },
    {
      min: 18.8,
      max: 23.3,
      height: -1,
      r: (θ) => 682.2307 / (Math.sin(θ) + (1.566132 * Math.cos(θ))),
    },
    {
      min: 23.3,
      max: 29.5,
      height: -1,
      r: (θ) => -40721.387 / (Math.sin(θ) - (119.616683 * Math.cos(θ))),
    },
    {
      min: 29.5,
      max: 38.2,
      height: -1,
      r: (θ) => 1281.67602 / (Math.sin(θ) + (3.1812751 * Math.cos(θ))),
    },
    {
      min: 38.2,
      max: 49.1,
      height: -1,
      r: (θ) => 575.86589 / (Math.sin(θ) + (0.9960149 * Math.cos(θ))),
    },
    {
      min: 49.1,
      max: 82.1,
      height: -1,
      r: (θ) => 358.6125 / (Math.sin(θ) + (0.1847292 * Math.cos(θ))),
    },
    {
      min: 82.1,
      max: 90,
      height: -1,
      r: (θ) => 335 / (Math.sin(θ) - (0.30194697 * Math.cos(θ))),
    },
  ]
}
