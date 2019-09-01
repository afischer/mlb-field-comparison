export default {
  name: 'Wrigley Field',
  team: {
    city: 'Chicago',
    name: 'Cubs',
    color: '#0C2340',
    league: "NL",
    division: "C",
  },
  walls: [
    {
      min: 0,
      max: 10.9,
      height: -1,
      r: (θ) => -4499.412 / (Math.sin(θ) - (12.7462 * Math.cos(θ))),
    },
    {
      min: 10.9,
      max: 13.1,
      height: -1,
      r: (θ) => 297.1748 / (Math.sin(θ) + (0.636566 * Math.cos(θ))),
    },
    {
      min: 13.1,
      max: 29.4,
      height: -1,
      r: (θ) => 18363.859 / (Math.sin(θ) + (53.4839 * Math.cos(θ))),
    },
    {
      min: 29.4,
      max: 49.2,
      height: -1,
      r: (θ) => {
        const d = 33526.25 - 9105.75 * Math.cos((2 * θ) - Math.PI);
        const n1 = (9353823.75 * Math.cos(θ - 0.561996)) - (2540504.25 * Math.cos(θ - 2.5621433));
        const n2 = 22815.51 * (Math.sqrt(d - (155682 * (Math.sin(θ - 0.561996) ** 2))));
        return (n1 / d) + (n2 / d);
      }
    },
    {
      min: 49.2,
      max: 73.2,
      height: -1,
      r: (θ) => 357.8732 / (Math.sin(θ) + (0.245827 * Math.cos(θ))),
    },
    {
      min: 73.2,
      max: 74.8,
      height: -1,
      r: (θ) => 496.86435 / (Math.sin(θ) + (1.62768 * Math.cos(θ))),
    },
    {
      min: 74.8,
      max: 90,
      height: -1,
      r: (θ) => 355 / (Math.sin(θ) + (0.112061 * Math.cos(θ))),
    },
  ]
}
