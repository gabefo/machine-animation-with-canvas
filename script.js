(function () {
  /**
   * @type {HTMLCanvasElement} canvas - The canvas element.
   */
  const canvas = document.getElementById("canvas");

  /**
   * @type {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   */
  const ctx = canvas.getContext("2d");

  /**
   * @type {number} frameRate - The frame rate for the animation.
   */
  const frameRate = 30;

  /**
   * @type {string} basePath - The base path for the images to be preloaded.
   */
  const basePath = "/assets/frames/";

  /**
   * @type {string[]} images - The list of image paths to be preloaded.
   */
  const images = [
    "0001.png",
    "0002.png",
    "0003.png",
    "0004.png",
    "0005.png",
    "0006.png",
    "0007.png",
    "0008.png",
    "0009.png",
    "0010.png",
    "0011.png",
    "0012.png",
    "0013.png",
    "0014.png",
    "0015.png",
    "0016.png",
    "0017.png",
    "0018.png",
    "0019.png",
    "0020.png",
    "0021.png",
    "0022.png",
    "0023.png",
    "0024.png",
    "0025.png",
    "0026.png",
    "0027.png",
    "0028.png",
    "0029.png",
    "0030.png",
    "0031.png",
    "0032.png",
    "0033.png",
    "0034.png",
    "0035.png",
    "0036.png",
    "0037.png",
    "0038.png",
    "0039.png",
    "0040.png",
    "0041.png",
    "0042.png",
    "0043.png",
    "0044.png",
    "0045.png",
    "0046.png",
    "0047.png",
    "0048.png",
    "0049.png",
    "0050.png",
    "0051.png",
    "0052.png",
    "0053.png",
    "0054.png",
    "0055.png",
    "0056.png",
    "0057.png",
    "0058.png",
    "0059.png",
    "0060.png",
    "0061.png",
    "0062.png",
    "0063.png",
    "0064.png",
    "0065.png",
    "0066.png",
    "0067.png",
    "0068.png",
    "0069.png",
    "0070.png",
    "0071.png",
    "0072.png",
    "0073.png",
    "0074.png",
    "0075.png",
    "0076.png",
    "0077.png",
    "0078.png",
    "0079.png",
    "0080.png",
    "0081.png",
    "0082.png",
    "0083.png",
    "0084.png",
    "0085.png",
    "0086.png",
    "0087.png",
    "0088.png",
    "0089.png",
    "0090.png",
    "0091.png",
    "0092.png",
    "0093.png",
    "0094.png",
    "0095.png",
    "0096.png",
    "0097.png",
    "0098.png",
    "0099.png",
    "0100.png",
    "0101.png",
    "0102.png",
    "0103.png",
    "0104.png",
    "0105.png",
    "0106.png",
    "0107.png",
    "0108.png",
  ];

  /**
   * @type {HTMLImageElement[]} imageObjects - The list of preloaded image objects.
   */
  const imageObjects = [];

  /**
   * @type {number[]} frames - The list of frame indices.
   */
  const frames = [...Array(images.length).keys()];

  /**
   * @type {number} previousTimestamp - The previous timestamp for the requestAnimationFrame loop.
   */
  let previousTimestamp;

  /**
   * @type {number} frameIndex - The current frame index.
   */
  let frameIndex = 0;

  /**
   * @type {boolean} isPlaying - A flag to indicate whether the animation is playing.
   */
  let isPlaying = false;

  /**
   * Preloads the images.
   * @returns {Promise<HTMLImageElement[]>} The list of preloaded image objects.
   */
  function preloadImages() {
    const promises = images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = basePath + image;
        img.onload = function () {
          resolve(img);
          imageObjects[index] = img;
        };
      });
    });

    return Promise.all(promises);
  }

  /**
   * Draws the current frame to the canvas.
   * @returns {void}
   */
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const imageIndex = frames[frameIndex];
    ctx.drawImage(imageObjects[imageIndex], 0, 0, canvas.width, canvas.height);
  }

  /**
   * Updates the current frame index.
   * @returns {void}
   */
  function updateFrame() {
    if (isPlaying && frameIndex < frames.length - 1) {
      frameIndex++;
      return;
    }

    isPlaying = false;
    frameIndex = 0;
  }

  /**
   * Plays the animation.
   * @returns {void}
   */
  function playAnimation() {
    if (isPlaying) {
      return;
    }

    isPlaying = true;
    frameIndex = 0;
  }

  /**
   * The requestAnimationFrame loop.
   * @param {number} timestamp - The current timestamp.
   * @returns {void}
   */
  function tick(timestamp) {
    if (previousTimestamp === undefined) {
      previousTimestamp = timestamp;
    }

    const elapsedTime = timestamp - previousTimestamp;

    if (elapsedTime >= 1000 / frameRate) {
      drawFrame();
      updateFrame();
      previousTimestamp = timestamp;
    }

    window.requestAnimationFrame(tick);
  }

  preloadImages().then(() => {
    window.requestAnimationFrame(tick);
  });

  /**
   * Resizes the canvas to fit the window.
   * @returns {void}
   */
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("click", playAnimation);
})();
