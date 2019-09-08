import * as d3 from 'd3';
import fields from './js';

const sluggify = (str) => str.replace(' ', '-');

const toRad = (deg) => (deg * Math.PI) / 180;
const polarToCart = (r, θ) => {
  const x = r * Math.cos(θ);
  const y = r * Math.sin(θ);
  return [x, y];
};

let outfieldGroup;
let wallGroup;

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
};
const svgWidth = (450 - margin.left - margin.right);
const svgHeight = 450 - margin.top - margin.bottom;

function setup() {
  // create group with flipped coordinate system, insets

  const plotSq = (x, y, r, fill = 'black') => outfieldGroup.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', r)
    .attr('height', r)
    .style('fill', fill);

  const plotCirc = (
    cx,
    cy,
    r,
    fill = 'transparent',
    strokeWidth = 0,
    strokeColor = 'black',
  ) => outfieldGroup.append('ellipse')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('rx', r)
    .attr('ry', r)
    .style('fill', fill)
    .attr('stroke-width', strokeWidth)
    .attr('stroke', strokeColor);


  plotCirc(48, 48, 95, '#cfbaa5'); // skinned infield, front of rubber, 95
  plotSq(0, 0, 90, 'green');
  // infield circs
  plotCirc(0, 0, 26, '#cfbaa5'); // batters circle, 26ft
  plotCirc(90, 0, 13, '#cfbaa5'); // 1b, 13ft
  plotCirc(90, 90, 13, '#cfbaa5'); // 2b, 13ft
  plotCirc(0, 90, 13, '#cfbaa5'); // 3b, 13ft

  // look this is approximate ok
  plotCirc(47, 47, 18, '#cfbaa5'); // pitching mound, 59 ft from home, 18ft

  // foul lines
  outfieldGroup.append('line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', 375)
    .attr('stroke-width', 2)
    .attr('stroke', 'grey');

  outfieldGroup.append('line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 375)
    .attr('y2', 0)
    .attr('stroke-width', 2)
    .attr('stroke', 'grey');

  // bases
  const baseWidth = 6; // px width of square bases
  const baseOffset = baseWidth / 2; // to center rects
  // plotSq(0 - baseOffset, 0 - baseOffset, baseWidth, 'white')
  plotSq(90 - baseOffset, 0, baseWidth, 'white');
  plotSq(90 - baseOffset, 90 - baseOffset, baseWidth, 'white');
  plotSq(0, 90 - baseOffset, baseWidth, 'white');

  // The pitching rubber is 18 inches back from the center of the mound

  // lol come back and fix these gross masks later
  plotSq(-181, -50, 180, 'white');
  plotSq(-50, -181, 180, 'white');
  plotSq(0, 90 - baseOffset, baseWidth, 'white');
}

const tupleToPolyline = d3.line()
  .x((d) => d[0])
  .y((d) => d[1]);

const HEIGHT_SCALE_FACTOR = 1.34;

function plotField(fieldData) {
  const lineData = []; // list of [x, y] 'tuples' generated below
  const heightData = [];

  for (let i = -1; i < 90; i += 1) { // wow computers are fast!
    const wallData = fieldData.walls.find((wallSegment) => {
      const { min, max } = wallSegment;
      return i + 1 >= min && i < max;
    });
    const { r, height } = wallData;
    // get cartesian point tuples for each
    const point = polarToCart(r(toRad(i)), toRad(i + 1));
    // push outfield dimension data
    lineData.push(point);
    // push wall height data
    heightData.push([(90 - (i + 1)) ** HEIGHT_SCALE_FACTOR, height ** HEIGHT_SCALE_FACTOR]);
  }

  // graph walls
  const wall = outfieldGroup.append('path')
    .data([lineData])
    .attr('d', tupleToPolyline)
    .attr('stroke', fieldData.team.color)
    .attr('stroke-width', 1)
    .attr('stroke-linejoin', 'round')
    .attr('fill', 'none')
    .attr('opacity', 0.5)
    .attr('data-park-name', fieldData.name)
    .attr('data-team-name', fieldData.team.name);

  // graph heights
  const wallHeight = wallGroup.append('path')
    .data([heightData])
    .attr('d', tupleToPolyline)
    .attr('stroke', fieldData.team.color)
    .attr('stroke-width', 1)
    .attr('stroke-linejoin', 'round')
    .attr('fill', 'none')
    .attr('opacity', 0.5)
    .attr('data-park-name', fieldData.name)
    .attr('data-team-name', fieldData.team.name);

  wall.on('mouseover', () => {
    document.getElementById('info-name').innerHTML = wall.attr('data-park-name');
    document.getElementById('info-team').innerHTML = wall.attr('data-team-name');
    wall.attr('stroke-width', 4)
      .attr('opacity', 1);
  });

  wall.on('mouseleave', () => {
    document.getElementById('info-name').innerHTML = '';
    document.getElementById('info-team').innerHTML = '';
    wall.attr('stroke-width', 1)
      .attr('opacity', 0.5);
  });
}

const updateVisible = () => {
  // eslint-disable-next-line func-names
  d3.selectAll('#team-select input').each(function () {
    const parkName = this.dataset.name;
    const parkPath = d3.select(`path[data-park-name="${parkName}"]`);
    if (this.checked) {
      parkPath.attr('stroke-width', 1);
    } else {
      parkPath.attr('stroke-width', 0); // visually hidden
    }
  });
};

function setAllChecked(isChecked) {
  d3.selectAll('#team-select input').property('checked', isChecked);
  updateVisible();
}

document.addEventListener('DOMContentLoaded', () => {
  const outfieldSvg = d3.select('#diagram')
    .append('svg')
    .attr('width', svgWidth + margin.left + margin.right)
    .attr('height', svgHeight + margin.top + margin.bottom);

  const wallSvg = d3.select('#diagram')
    .append('svg')
    .attr('width', svgWidth + margin.left + margin.right)
    .attr('height', 150 + margin.top + margin.bottom);

  outfieldGroup = outfieldSvg.append('g')
    .attr('transform', `translate(${margin.left},${svgHeight + margin.top}) scale(1,-1)`);

  wallGroup = wallSvg.append('g')
    .attr('transform', `translate(${margin.left},${150 + margin.top}) scale(1,-1)`);

  setup();

  d3.select('#select-all').on('click', () => setAllChecked(true));
  d3.select('#deselect-all').on('click', () => setAllChecked(false));

  Object.values(fields).forEach((field) => {
    plotField(field);

    const { league, division, city } = field.team;

    const teamSelectDiv = d3.select(`#team-select #${league} #${league}-${division}`)
      .append('div');

    teamSelectDiv
      .append('input')
      .attr('data-name', field.name)
      .attr('id', sluggify(field.name))
      .attr('type', 'checkbox')
      .property('checked', true)
      .on('change', updateVisible);
    teamSelectDiv
      .append('label')
      .attr('for', sluggify(field.name))
      .html(`<span class="team">${city} ${field.team.name}</span><span class="field">${field.name}</span>`);
  });


  const xPosSpan = document.getElementById('info-x');
  const yPosSpan = document.getElementById('info-y');
  const distSpan = document.getElementById('info-dist');

  outfieldSvg.on('mousemove', (function () { // eslint-disable-line func-names
    const [mx, my] = d3.mouse(this);
    const xPos = mx - margin.left;
    const yPos = 450 - my - margin.top;
    xPosSpan.innerHTML = xPos;
    yPosSpan.innerHTML = yPos;
    distSpan.innerHTML = Math.sqrt((xPos ** 2) + (yPos ** 2)).toFixed(2);
  }));
});
