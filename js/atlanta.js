export default {
  name: 'Turner Field',
  team: {
    city: 'Atlanta',
    name: 'Braves',
    color: '#CE1141',
    league: 'NL',
    division: 'E',
  },
  walls: [
    {
      min: 0,
      max: 18,
      height: -1,
      r: (θ) => -1169.68 / (Math.sin(θ) - (3.541407 * Math.cos(θ))),
    },
    {
      min: 18,
      max: 90,
      height: -1,
      r: (θ) => {
        const d = 101074 - (17024 * Math.cos((2 * θ) + 1.43117));
        const n1 = (19537604.2 * Math.cos(θ - 0.7661995)) - (3290739.2 * Math.cos(θ + 2.1973695));
        const n2 = 70449.05 * Math.sqrt(d - (74729.9 * (Math.sin(θ - 0.7661995) ** 2)));
        return (n1 / d) + (n2 / d);
      },
    },
  ],
};
