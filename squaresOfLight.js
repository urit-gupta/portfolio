// did u duplicate this?

let canvSize;
let origin;

// declare variables

let gridSize;
let resolution;
let padding;
let paddingFactor;
let vectors;
let innerShades;
let outerShades;
let frequencies;
let offset;

function setup() {
  canvSize = max(windowWidth, windowHeight);
  origin = createVector(0, 0);
  
  randomSeed(42);
  // noiseSeed(42);
  frameRate(60);
  
  // initialize variables
  
  gridSize = 10;
  resolution = canvSize / gridSize;
  padding = 0.1;
  paddingFactor = 1 - padding * 2;
  vectors = [];
  innerShades = [];
  outerShades = [];
  frequencies = [];
  offset = 0;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      vectors.push(createVector(i * resolution, j * resolution));
      
      let r = random(-100, 100) + 127.5;
      let g = random(-100, 100) + 127.5;
      let b = random(-100, 100) + 127.5;
      
      innerShades.push(color(r, g, b));
      
      let isItLight = (r + g + b) > 383;
      let outerShade = generateOKLABColorPalette(r, g, b, 8, isItLight ? -1 : 1, 0)[1];
      outerShade = OKLAB.OKLABToRGB(outerShade.L, outerShade.A, outerShade.B);
      outerShade = color(outerShade[0], outerShade[1], outerShade[2]);
      
      outerShades.push(outerShade);
      frequencies.push(floor(random(2, 5)));
    }
  }
  
  createCanvas(canvSize, canvSize);
  background(0);
  
  setParallax();
  
  // createLoop({
  //   duration: TWO_PI,
  //   gif: {
  //     download: true,
  //     fileName: 'squares_' + (year() % 100) + '-' + month() + '-' + day() + '-' + hour() + '-' + minute() + '-' + second() + '.gif',
  //     options: {
  //       quality: 1
  //     }
  //   }
  // });
}

function draw() {
  push();
  
  // background(0);
  translate(origin.x, origin.y);
  
  // draw stuff
  
  strokeWeight(2);
  
  for (let i = 0; i < vectors.length; i++) {
    stroke(0);
    fill(outerShades[i]);
    rect(vectors[i].x, vectors[i].y, resolution);
    noStroke();
    fill(innerShades[i]);
    let realOffset = sin(offset * frequencies[i]) * resolution * paddingFactor * 0.2;
    rect(vectors[i].x + (resolution * padding) + realOffset * 0.5, vectors[i].y + (resolution * padding) + realOffset * 0.5, resolution * paddingFactor - realOffset, resolution * paddingFactor - realOffset, resolution * paddingFactor * 0.09);
  }
  
  pop();
  
  // noLoop();
  
  // update stuff
  
  offset = millis() * 0.001;
}

// functions

// HTML and Parallax functions

function setParallax() {
  window.addEventListener('scroll', parallax);
  window.addEventListener('fullscreenchange', windowResized);
}

function parallax() {
  let body = document.body;
  let html_ = document.documentElement;

  let pageHeight = max(body.scrollHeight, body.offsetHeight, html_.clientHeight, html_.scrollHeight, html_.offsetHeight);
  
  let { scrollY } = window;
  origin.y = -((scrollY / (pageHeight - html_.scrollHeight)) * canvSize * 0.5);
}

function windowResized() {
  canvSize = max(windowWidth, windowHeight);
  resizeCanvas(canvSize, canvSize);
  parallax();
}

// OKLAB COLORS - DO NOT ALTER UNLESS U KNOW WHAT UR DOIN

class OKLAB {
  constructor(L, A, B) {
    this.L = L;
    this.A = A;
    this.B = B;
  }
  
  static RGBToOKLAB(r, g, b) {
    let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
	let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
	let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

    let l_ = Math.pow(l, 1/3);
    let m_ = Math.pow(m, 1/3);
    let s_ = Math.pow(s, 1/3);
    
    let OKLABArray = [];
    
    OKLABArray.push(0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_,
                    1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_,
                    0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_);

    return OKLABArray;
  }
  
  static OKLABToRGB(L, A, B) {
    let l_ = L + 0.3963377774 * A + 0.2158037573 * B;
    let m_ = L - 0.1055613458 * A - 0.0638541728 * B;
    let s_ = L - 0.0894841775 * A - 1.2914855480 * B;

    let l = l_*l_*l_;
    let m = m_*m_*m_;
    let s = s_*s_*s_;
    
    let RGBArray = [];
    
    RGBArray.push(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
                  -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
                  -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);

    return RGBArray;
  }
  
  static lerpOKLAB(start, stop, amt) {
    if (!(start instanceof OKLAB && stop instanceof OKLAB)) throw new Error("Invalid argument types. Expected: (OKLAB, OKLAB) Got: (" + typeof start + ", " + typeof stop + ")");
    return new OKLAB(start.L + (amt * (stop.L - start.L)), start.A + (amt * (stop.A - start.A)), start.B + (amt * (stop.B - start.B)));
  }
}

function generateOKLABColorPalette(rA=random(30), gA=random(30), bA=random(30), n=5, dir=1, constant=0) {
  let colorPalette = [];
  
  let oklabColorArray = OKLAB.RGBToOKLAB(rA, gA, bA);
  
  let L = oklabColorArray[0];
  let A = oklabColorArray[1];
  let B = oklabColorArray[2];
  
  let lerpL = ((dir > 0 ? (6.341325663998627 - L) : -(L)) / n);
  let lerpA = ((dir > 0 ? (1.7515803991801313 - A) : -(A + 1.4831572863679217)) / n);
  let lerpB = ((dir > 0 ? (1.2591954894854207 - B) : -(B + 1.9755014508238538)) / n);
  
  for (let i = 0; i < n; i++) {
    colorPalette.push(new OKLAB(L, A, B));
    
    if (constant == 0) {
      L += lerpL;
    } else if (constant == 1) {
      A += lerpA;
      B += lerpB;
    } else if (constant == 2) {
      L += lerpL;
      A += lerpA;
      B += lerpB;
    } else {
      throw new Error("Invalid constant specified. Expected: 0 for Lightness, 1 for Hue, 2 for neither. Got: " + constant);
    }
  }
  
  return colorPalette;
}
