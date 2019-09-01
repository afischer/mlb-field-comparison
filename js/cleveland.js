export default {
  name: 'Progressive Field',
  team: {
    city: 'Cleveland',
    name: 'Indians',
    color: '#E31937',
    league: "AL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 20.3,
      height: 9,
      r: (θ) => -1609.844 / (Math.sin(θ) - (4.98404 * Math.cos(θ)))
    },
    {
      min: 20.3,
      max: 48.25,
      height: 9,
      r: (θ) => 906.183 / (Math.sin(θ) + (2.2274 * Math.cos(θ)))
    },
    {
      min: 48.25,
      max: 78.25,
      height: 19,
      r: (θ) => 356.7465 / (Math.sin(θ) + (0.197554 * Math.cos(θ)))
    },
    {
      min: 78.25,
      max: 90,
      height: 19,
      r: (θ) => 321 / (Math.sin(θ) - (0.303978 * Math.cos(θ)))
    },
  ]
}
