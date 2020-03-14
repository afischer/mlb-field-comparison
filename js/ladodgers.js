export default {
  name: 'Dodger Stadium',
  team: {
    city: 'Los Angeles',
    name: 'Dodgers',
    color: '#1E90FF',
    league: 'NL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 4.2,
      height: 4,
      r: (θ) => -443.8081 / (Math.sin(θ) - (1.344873 * Math.cos(θ))),
    },
    {
      min: 4.2,
      max: 7.8,
      height: 4,
      r: (θ) => -829.5118 / (Math.sin(θ) - (2.44985 * Math.cos(θ))),
    },
    {
      min: 7.8,
      max: 9.5,
      height: 4,
      r: (θ) => -10942.3745 / (Math.sin(θ) - (30.610819 * Math.cos(θ))),
    },
    {
      min: 9.5,
      max: 25.1,
      height: 8,
      r: (θ) => 1719.756 / (Math.sin(θ) + (4.622957 * Math.cos(θ))),
    },
    {
      min: 25.1,
      max: 31.1,
      height: 8,
      r: (θ) => 1115.073 / (Math.sin(θ) + (2.83277 * Math.cos(θ))),
    },
    {
      min: 31.1,
      max: 42.6,
      height: 8,
      r: (θ) => 928.868 / (Math.sin(θ) + (2.258998 * Math.cos(θ))),
    },
    {
      min: 42.6,
      max: 44,
      height: 8,
      r: (θ) => 742.26267 / (Math.sin(θ) + (1.620443 * Math.cos(θ))),
    },
    {
      min: 44,
      max: 46.3,
      height: 8,
      r: (θ) => 562.6864 / (Math.sin(θ) + (0.9947777 * Math.cos(θ))),
    },
    {
      min: 46.3,
      max: 49.2,
      height: 8,
      r: (θ) => 472.8006 / (Math.sin(θ) + (0.66870534 * Math.cos(θ))),
    },
    {
      min: 49.2,
      max: 55.3,
      height: 8,
      r: (θ) => 423.6147 / (Math.sin(θ) + (0.478618 * Math.cos(θ))),
    },
    {
      min: 55.3,
      max: 59,
      height: 8,
      r: (θ) => 395.1176 / (Math.sin(θ) + (0.349269 * Math.cos(θ))),
    },
    {
      min: 59,
      max: 63.1,
      height: 8,
      r: (θ) => 392.2193 / (Math.sin(θ) + (0.3344991 * Math.cos(θ))),
    },
    {
      min: 63.1,
      max: 69.2,
      height: 8,
      r: (θ) => 381.7462 / (Math.sin(θ) + (0.2729345 * Math.cos(θ))),
    },
    {
      min: 69.2,
      max: 74.7,
      height: 8,
      r: (θ) => 372.8431 / (Math.sin(θ) + (0.2051737 * Math.cos(θ))),
    },
    {
      min: 74.7,
      max: 80.5,
      height: 8,
      r: (θ) => 368.8506 / (Math.sin(θ) + (0.163833 * Math.cos(θ))),
    },
    {
      min: 80.5,
      max: 82.1,
      height: 8,
      r: (θ) => 362.2344 / (Math.sin(θ) + (0.053704 * Math.cos(θ))),
    },
    {
      min: 82.1,
      max: 83.3,
      height: 4,
      r: (θ) => 353.007 / (Math.sin(θ) - (0.131245 * Math.cos(θ))),
    },
    {
      min: 83.3,
      max: 85.6,
      height: 4,
      r: (θ) => 334.774 / (Math.sin(θ) - (0.564136 * Math.cos(θ))),
    },
    {
      min: 85.6,
      max: 87.2,
      height: 4,
      r: (θ) => 333.006 / (Math.sin(θ) - (0.620807 * Math.cos(θ))),
    },
    {
      min: 87.2,
      max: 88.4,
      height: 4,
      r: (θ) => 328.317 / (Math.sin(θ) - (0.90885 * Math.cos(θ))),
    },
    {
      min: 88.4,
      max: 90,
      height: 4,
      r: (θ) => 330 / (Math.sin(θ) - (0.720958 * Math.cos(θ))),
    },
  ],
};