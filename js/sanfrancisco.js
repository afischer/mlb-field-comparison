export default {
  name: 'AT&T Park',
  team: {
    city: 'San Francisco',
    name: 'Giants',
    color: '#FD5A1E',
    league: 'NL',
    division: 'W',
  },
  walls: [
    {
      min: 0,
      max: 15,
      height: -1,
      r: (θ) => -697.339 / (Math.sin(θ) - (2.25676 * Math.cos(θ))),
    },
    {
      min: 15,
      max: 18,
      height: -1,
      r: (θ) => 946.0859 / (Math.sin(θ) + (2.4155 * Math.cos(θ))),
    },
    {
      min: 18,
      max: 26,
      height: -1,
      r: (θ) => -712.5915 / (Math.sin(θ) - (2.3890 * Math.cos(θ))),
    },
    {
      min: 26,
      max: 55,
      height: -1,
      r: (θ) => 564.2712 / (Math.sin(θ) + Math.cos(θ)),
    },
    {
      min: 55,
      max: 86.5,
      height: -1,
      r: (θ) => 347.526 / (Math.sin(θ) + (0.07905 * Math.cos(θ))),
    },
    {
      min: 86.5,
      max: 90,
      height: -1,
      r: (θ) => 335 / (Math.sin(θ) - (0.513097 * Math.cos(θ))),
    },
  ],
};
