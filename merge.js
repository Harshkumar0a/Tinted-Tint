const fs = require('fs');

const codeHtml = fs.readFileSync('code.html', 'utf8');
const indexHtml = fs.readFileSync('scroll-animation/index.html', 'utf8');

// Extract head tags from codeHtml (Tailwind, Fonts, Styles)
const headMatch = codeHtml.match(/<head>([\s\S]*?)<\/head>/);
let headContent = headMatch ? headMatch[1] : '';

// Remove title and charset/viewport from headContent since we have it, just keep the scripts and styles
headContent = headContent.replace(/<meta[^>]*>/g, '').replace(/<title>.*?<\/title>/g, '');

// Extract the body classes from codeHtml
const bodyClassMatch = codeHtml.match(/<body class="([^"]*)">/);
const bodyClass = bodyClassMatch ? bodyClassMatch[1] : '';

// Extract remaining sections: from <section class="py-section-gap px-margin-mobile md:px-margin-page bg-surface-container-low relative overflow-hidden">
// which is the Benefits Section, down to the end of body.
const benefitsSectionIndex = codeHtml.indexOf('<!-- Benefits Section -->');
const mainEndIndex = codeHtml.indexOf('</main>', benefitsSectionIndex);
const restAfterMain = codeHtml.substring(mainEndIndex + 7, codeHtml.indexOf('</body>'));
const remainingSections = codeHtml.substring(benefitsSectionIndex, mainEndIndex) + restAfterMain;

// Now build the new index.html
const newHtml = `<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tinted Tint - Even Tone, Effortless Glow</title>
  ${headContent}
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    .scroll-container {
      height: 500vh;
      position: relative;
      background-color: #000;
    }

    .sticky-wrapper {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    canvas {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
    }

    .scroll-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 500vh;
      z-index: 1;
      color: white;
      text-align: center;
      pointer-events: none;
    }
    
    .scroll-section {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0.8;
    }

    .scroll-section h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      text-shadow: 0 4px 20px rgba(0,0,0,0.8);
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body class="${bodyClass}">

  <!-- Scroll Animation Section -->
  <div class="scroll-container">
    <div class="sticky-wrapper">
      <canvas id="hero-lightpass"></canvas>
    </div>

    <div class="scroll-content">
      <div class="scroll-section">
        <h1>Welcome to Tinted Tint</h1>
      </div>
      <div class="scroll-section">
        <!-- Empty spacing -->
      </div>
      <div class="scroll-section">
        <!-- Empty spacing -->
      </div>
      <div class="scroll-section">
        <!-- Empty spacing -->
      </div>
      <div class="scroll-section">
        <!-- Empty spacing -->
      </div>
    </div>
  </div>

  <main>
    ${remainingSections}
  </main>

  <script>
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 228;
    const currentFrame = index => (
      \`./assets/ezgif-frame-\${index.toString().padStart(3, '0')}.jpg\`
    );

    const images = [];
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
    };

    preloadImages();

    const initialImg = new Image();
    initialImg.src = currentFrame(1);
    
    initialImg.onload = function() {
      canvas.width = initialImg.width;
      canvas.height = initialImg.height;
      context.drawImage(initialImg, 0, 0);
    }

    const updateImage = index => {
      const imgToDraw = images[index - 1] || initialImg;
      if (imgToDraw.complete && imgToDraw.naturalWidth !== 0) {
        context.drawImage(imgToDraw, 0, 0);
      } else {
        imgToDraw.onload = () => {
            context.drawImage(imgToDraw, 0, 0);
        };
      }
    }

    let ticking = false;

    window.addEventListener('scroll', () => {  
      const scrollContainer = document.querySelector('.scroll-container');
      const rect = scrollContainer.getBoundingClientRect();
      
      const maxScroll = scrollContainer.offsetHeight - window.innerHeight;
      let scrollPosition = -rect.top;
      
      if (scrollPosition < 0) scrollPosition = 0;
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      
      const scrollFraction = scrollPosition / maxScroll;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateImage(frameIndex + 1);
          ticking = false;
        });
        ticking = true;
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync('scroll-animation/index.html', newHtml);
console.log('Merge complete!');
