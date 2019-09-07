export default {
  name: 'Coors Field',
  team: {
    city: 'Colorado',
    name: 'Rockies',
    color: '#33006F',
    league: 'NL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 1.25,
      height: -1,
      r: (θ) => -551.417 / (Math.sin(θ) - (1.57548 * Math.cos(θ))),
    },
    {
      min: 1.25,
      max: 37.5,
      height: -1,
      r: (θ) => 4061.537 / (Math.sin(θ) + (11.422 * Math.cos(θ))),
    },
    {
      min: 37.5,
      max: 60.2,
      height: -1,
      r: (θ) => 536.536 / (Math.sin(θ) + (0.84228 * Math.cos(θ))),
    },
    {
      min: 60.2,
      max: 90,
      height: -1,
      r: (θ) => 345 / (Math.sin(θ) - (0.08135 * Math.cos(θ))),
    },
  ],
};
