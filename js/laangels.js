export default {
  name: 'Angel Stadium',
  team: {
    city: 'Los Angeles',
    name: 'Angels',
    color: '#BA0021',
    league: 'AL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 1.6,
      height: -1,
      r: (θ) => -352.2388 / (Math.sin(θ) - (1.06739 * Math.cos(θ))),
    },
    {
      min: 1.6,
      max: 3.2,
      height: -1,
      r: (θ) => -496.7696 / (Math.sin(θ) - (1.493901 * Math.cos(θ))),
    },
    {
      min: 3.2,
      max: 4.8,
      height: -1,
      r: (θ) => -641.02615 / (Math.sin(θ) - (1.9114787 * Math.cos(θ))),
    },
    {
      min: 4.8,
      max: 6.6,
      height: -1,
      r: (θ) => -1020.3203 / (Math.sin(θ) - (2.9928111 * Math.cos(θ))),
    },
    {
      min: 6.6,
      max: 11.2,
      height: -1,
      r: (θ) => 6919.533 / (Math.sin(θ) + (19.3875915 * Math.cos(θ))),
    },
    {
      min: 11.2,
      max: 42.6,
      height: -1,
      r: (θ) => 1240.50705 / (Math.sin(θ) + (3.314747 * Math.cos(θ))),
    },
    {
      min: 42.6,
      max: 68,
      height: -1,
      r: (θ) => 437.37565 / (Math.sin(θ) + (0.5733725 * Math.cos(θ))),
    },
    {
      min: 68,
      max: 84,
      height: -1,
      r: (θ) => 351.0005 / (Math.sin(θ) - (0.0286525 * Math.cos(θ))),
    },
    {
      min: 84,
      max: 85.6,
      height: -1,
      r: (θ) => 340.789 / (Math.sin(θ) - (0.3046164 * Math.cos(θ))),
    },
    {
      min: 85.6,
      max: 87,
      height: -1,
      r: (θ) => 329.5441 / (Math.sin(θ) - (0.72330506 * Math.cos(θ))),
    },
    {
      min: 87,
      max: 88.4,
      height: -1,
      r: (θ) => 324.50638 / (Math.sin(θ) - (1.0040283 * Math.cos(θ))),
    },
    {
      min: 88.4,
      max: 90,
      height: -1,
      r: (θ) => 328 / (Math.sin(θ) - (0.629411 * Math.cos(θ))),
    },
  ],
};
