export default {
  name: 'Minute Maid Park',
  team: {
    city: 'Houston',
    name: 'Astros',
    color: '#002D62',
    league: 'AL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 23,
      height: -1,
      r: (θ) => -2738.7177 / (Math.sin(θ) - (8.400974 * Math.cos(θ))),
    },
    {
      min: 23,
      max: 24.1,
      height: -1,
      r: (θ) => 315.172 / (Math.sin(θ) + (0.493462 * Math.cos(θ))),
    },
    {
      min: 24.1,
      max: 33.7,
      height: -1,
      r: (θ) => -2943.702 / (Math.sin(θ) - (9.23123 * Math.cos(θ))),
    },
    {
      min: 33.7,
      max: 34,
      height: -1,
      r: (θ) => 310.475 / (Math.sin(θ) + (0.23668 * Math.cos(θ))),
    },
    {
      min: 34,
      max: 49.6,
      height: -1,
      r: (θ) => {
        const d = 10525 - (725 * Math.cos(2 * θ));
        const n1 = (3820575 * Math.cos(θ - 0.7417649)) - (263175 * Math.cos(θ + 0.7417649));
        const n2 = 7424.6 * Math.sqrt(d - (263538 * Math.sin(θ - 0.7417649) ** 2));
        return (n1 / d) + (n2 / d);
      },
    },
    {
      min: 49.6,
      max: 67.7,
      height: -1,
      r: (θ) => 347.579 / (Math.sin(θ) + (0.120385 * Math.cos(θ))),
    },
    {
      min: 67.7,
      max: 67.9,
      height: -1,
      r: (θ) => 42.673422 / (Math.sin(θ) - (2.121119 * Math.cos(θ))),
    },
    {
      min: 67.9,
      max: 90,
      height: -1,
      r: (θ) => 315 / (Math.sin(θ) + (0.0366002 * Math.cos(θ))),
    },
  ],
};
