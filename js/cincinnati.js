export default {
  name: 'Great American Ball Park',
  team: {
    city: 'Cincinnati',
    name: 'Reds',
    color: '#C6011F',
    league: "NL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 44.7,
      height: -1,
      r: (θ) => {
        const d = 41212.25 - (30987.75 * Math.cos((2 * θ) - 3.31613));
        const n1 = (11951552.5 * Math.cos(θ - 0.439823)) - (8986447.5 * Math.cos(θ - 2.8763026))
        const n2 = (19212.09 * Math.sqrt(d - (168200 * (Math.sin(θ - 0.439823) ** 2))))
        return (n1 / d) + (n2 / d);
      },
    },
    {
      min: 44.7,
      max: 60.3,
      height: -1,
      r: (θ) => 436.311 / (Math.sin(θ) + (0.52231577 * Math.cos(θ))),
    },
    {
      min: 60.3,
      max: 86.6,
      height: -1,
      r: (θ) => 336.435 / (Math.sin(θ) + (0.014347 * Math.cos(θ))),
    },
    {
      min: 86.6,
      max: 90,
      height: -1,
      r: (θ) => 326 / (Math.sin(θ) - (0.5206001 * Math.cos(θ))),
    },
  ]
}
