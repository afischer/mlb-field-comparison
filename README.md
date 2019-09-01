# MLB Field Analysis

<img src="https://i.imgur.com/wrFoh3t.png" align="right" width="300px"/>

A tool for comparing the outfields of Major League Baseball.

Why? After hearing my dad complain that "that wouldn't have been a home run in `<stadium_name>`" enough times, I went looking for some data to find out how often he was actually right. I also wanted to learn D3.

There is surprisingly little easily-available highly-detailed information on ballpark dimensions. I really liked [this diagram of all ballpark dimensions](https://www.mlb.com/cut4/the-dimensions-of-every-big-league-ballpark-in-this-cool-infographic/c-73642276) (which is very similar to diagrams found in [the Baseball Prospectus](https://d188rgcu4zozwl.cloudfront.net/content/B07NS6NCWV/resources/17632797)), and wanted to create an interactive version with open data.

## Installation

1. Install parcel: `npm install -g parcel-bundler`
2. Install dependencies: `npm i`
3. Run `parcel index.js`
4. Visit `localhost:1234`

## About

### Sources

Where did this data come from?

- This incredible [2015 Fangraphs post by Andrew Fox](https://community.fangraphs.com/complete-outfield-dimensions/), where he provides piecewise functions for polar coordinates _(!!)_ for each ballpark. I have no idea how he did this so accurately.
- [Wikipedia](https://en.wikipedia.org/wiki/List_of_current_Major_League_Baseball_stadiums)

### Data Entry

Since the original LaTeX wasn't provided, I used [OCRmyPDF](https://github.com/jbarlow83/OCRmyPDF) on the images.
Then, lots of copy-pasting.

There are likely errors introduced here due to OCR issues and/or human error.

### Accuracy

Beside the aforementioned data-entry issues, these equations seem fairly accurate when spot-checked against official dimensions (most within about a foot).

Additionally, this data is from 2015, so some fields may be outdated. Need to fix some renamed stadiums too.

### Future directions

I'd love to get playable foul territory, but that would be a massive job.

Wall-height data is also something I'd like to explore.

Some type of input allowing you to give launch angle/velocity and direction to determine which stadiums hits would be home runs in would be cool, too.

Also, some real UI...

## Contributing

TKTK but could really use checks, and a way to figure out wall height and playable foul territory.

### Code Style

I know, I'm using unicode theta, and I really shouldn't.
