export default {
  name: 'Kauffman Stadium',
  team: {
    city: 'Kansas City',
    name: 'Royals',
    color: '#004687',
    league: 'AL',
    division: 'C',
  },
  walls: [
    {
      min: 0,
      max: 5.9,
      height: -1,
      r: (θ) => {
        // something's wrong here
        const d = 5417 - (1545 * Math.cos((2 * θ) - 3.14159));
        const n1 = (1738857 * Math.cos(θ - 0.1762783)) - (495945 * Math.cos(θ - 2.9653144));
        const n2 = 3671.3 * Math.sqrt(d - (206082 * (Math.sin(θ - 0.1762783) ** 2))) || 0;
        return (n1 / d) + (n2 / d);
      },
    },
    {
      min: 5.9,
      max: 22.1,
      height: -1,
      r: (θ) => 25784.376 / (Math.sin(θ) + (71.503534 * Math.cos(θ))),
    },
    {
      min: 22.1,
      max: 59,
      height: -1,
      r: (θ) => {
        const d = 111634 - (10384 * Math.cos((2 * θ) + 0.453786));
        const n1 = (19759218 * Math.cos(θ - 0.8883726)) - (1837968 * Math.cos(θ + 1.342158));
        const n2 = 78594.9 * Math.sqrt(d - (62658 * (Math.sin(θ - 0.8883726) ** 2)));
        return (n1 / d) + (n2 / d);
      },
    },
    {
      min: 59,
      max: 76.9,
      height: -1,
      r: (θ) => {
        const d = 16218 - (14040 * Math.cos((2 * θ) + 0.20944));
        const n1 = (5643864 * Math.cos(θ - 1.199041)) - (4885920 * Math.cos(θ + 1.408481));
        const n2 = 5740.3 * Math.sqrt(d - (242208 * (Math.sin(θ - 1.199041) ** 2)));
        return (n1 / d) + (n2 / d);
      },
    },
    {
      min: 76.9,
      max: 82.7,
      height: -1,
      r: (θ) => 361.884 / (Math.sin(θ) + (0.01803985 * Math.cos(θ))),
    },
    {
      min: 82.7,
      max: 90,
      height: -1,
      r: (θ) => {
        const d = 2897 - (975 * Math.cos((2 * θ) - 0.663225));
        const n1 = (958907 * Math.cos(θ - 1.441642)) - (322725 * Math.cos(θ + 0.7784168));
        const n2 = 1929 * Math.sqrt(d - (219122 * (Math.sin(θ - 1.441642) ** 2)));
        return (n1 / d) + (n2 / d);
      },
    },
  ],
};
