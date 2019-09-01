export default {
  name: 'O.co Coliseum',
  team: {
    city: 'Oakland',
    name: 'Athletics',
    color: '#003831',
    league: "AL",
    division: "W",
  },
  walls: [
    {
      min: 0,
      max: 12,
      height: -1,
      r: (θ) => -868.87638 / (Math.sin(θ) - (2.632959 * Math.cos(θ))),
    },
    {
      min: 12,
      max: 22.3,
      height: -1,
      r: (θ) => 911.9339 / (Math.sin(θ) + (2.32779 * Math.cos(θ))),
    },
    {
      min: 22.3,
      max: 33.8,
      height: -1,
      r: (θ) => 1753.07386 / (Math.sin(θ) + (4.853163 * Math.cos(θ))),
    },
    {
      min: 33.8,
      max: 40.8,
      height: -1,
      r: (θ) => 1043.5522 / (Math.sin(θ) + (2.617999 * Math.cos(θ))),
    },
    {
      min: 40.8,
      max: 49.2,
      height: -1,
      r: (θ) => 558.5246 / (Math.sin(θ) + Math.cos(θ)),
    },
    {
      min: 49.2,
      max: 56.2,
      height: -1,
      r: (θ) => 398.6068 / (Math.sin(θ) + (0.381972 * Math.cos(θ))),
    },
    {
      min: 56.2,
      max: 67.7,
      height: -1,
      r: (θ) => 361.22296 / (Math.sin(θ) + (0.2060512 * Math.cos(θ))),
    },
    {
      min: 67.7,
      max: 78,
      height: -1,
      r: (θ) => 391.759586 / (Math.sin(θ) + (0.429592 * Math.cos(θ))),
    },
    {
      min: 78,
      max: 90,
      height: -1,
      r: (θ) => 330 / (Math.sin(θ) - (0.3798 * Math.cos(θ))),
    },
  ]
}
