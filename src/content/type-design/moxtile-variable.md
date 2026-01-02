---
title: "Moxtile Variable"
description: "A variable font inspired by the tiles in hotel rooms at the Moxy Chelsea in NYC."
order: 1
url: "https://github.com/ursooperduper/moxtile"
thumbnail: "./_assets/moxtile/moxtile-thumb.png"
---

Moxtile Variable draws inspiration from the distinctive geometric tile patterns found in the guest rooms the Moxy Chelsea hotel in New York City. 

![Shot of bathroom tiles in the bathroom tiles that reveal the word 'Lust'](./_assets/moxtile/moxy-chealsea-tile-toilet-lust-2.png)

The variable font design captures the playful yet sophisticated aesthetic and then expands it to explore how adding more axes like rotation and slant can add additional playfulness and dynamism to such a fun tile-influenced font.

The variable axes include:
- Width: Condensed to extended letterforms
- Slant: Upright to slanted characters
- Height: Compressed to tall proportions
- Rotation: Rotational character variations

_More information and design details about Moxtile coming soon._

<div class="font-specimen-explorer">
  <h3>Test Your Own Text</h3>
  
  <!-- Custom Text Input -->
  <textarea id="customText" placeholder="Type your text here..." style="font-family: 'Moxtile Variable', sans-serif;">Hamburgefonstiv</textarea>
  
  <!-- Variable Font Controls -->
  <div class="specimen-controls">
    <div class="control-group">
      <label for="widthAxis">Width: <span id="widthValue">0</span></label>
      <input type="range" id="widthAxis" min="-100" max="100" value="0" step="5">
    </div>
    <div class="control-group">
      <label for="slantAxis">Slant: <span id="slantValue">0</span></label>
      <input type="range" id="slantAxis" min="-100" max="100" value="0" step="5">
    </div>
    <div class="control-group">
      <label for="heightAxis">Height: <span id="heightValue">0</span></label>
      <input type="range" id="heightAxis" min="-100" max="100" value="0" step="5">
    </div>
    <div class="control-group">
      <label for="rotationAxis">Rotation: <span id="rotationValue">0</span></label>
      <input type="range" id="rotationAxis" min="-100" max="100" value="0" step="5">
    </div>
    <div class="control-group">
      <label for="fontSize">Size:</label>
      <select id="fontSize">
        <option value="16">16px</option>
        <option value="18">18px</option>
        <option value="24">24px</option>
        <option value="40" selected>40px</option>
        <option value="56">56px</option>
        <option value="64">64px</option>
        <option value="72">72px</option>
        <option value="80">80px</option>
        <option value="128">128px</option>
        <option value="256">256px</option>
      </select>
    </div>
    <div class="control-group">
      <label for="lineHeight">Line Height: <span id="lineHeightValue">1.4</span></label>
      <input type="range" id="lineHeight" min="0.8" max="3" step="0.1" value="1.4">
    </div>
    <div class="control-group">
      <label for="letterSpacing">Letter Spacing: <span id="letterSpacingValue">0em</span></label>
      <input type="range" id="letterSpacing" min="-0.1" max="0.5" step="0.01" value="0">
    </div>
  </div>

  <!-- Preview -->
  <div class="specimen-section">
    <div id="customPreview" class="specimen-preview" style="font-family: 'Moxtile Variable', sans-serif;">Hamburgefonstiv</div>
  </div>



</div>

<style>
.font-specimen-explorer {
  --moxtile-variable: 'Moxtile Variable', sans-serif;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
}

.font-specimen-explorer h3 {
  padding-top: 0;
  margin-top: 0;
}

.specimen-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.control-group input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007acc;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.control-group input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007acc;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.control-group input[type="range"]::-ms-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007acc;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.specimen-section {
  margin-bottom: 2rem;
}

.specimen-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.specimen-preview {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  color: var(--text-primary);
  line-height: 1.4;
}

#customText {
  width: 100%;
  font-size: 16px;
  min-height: 80px;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  color: var(--text-primary);
  resize: vertical;
  line-height: 1.4;
  box-sizing: border-box;
}

.char-group {
  margin-bottom: 1rem;
}

.char-group div {
  margin-top: 0.25rem;
}

.code-sample {
  background: var(--astro-code-background);
  overflow-x: auto;
}

.code-sample pre {
  margin: 0;
  color: var(--astro-code-foreground);
}

@media (max-width: 600px) {
  .specimen-controls {
    grid-template-columns: 1fr;
  }
  
  .font-specimen-explorer {
    padding: 1rem;
  }
}
</style>

<script>
  // Variable font specimen controls
  const widthAxis = document.getElementById('widthAxis');
  const slantAxis = document.getElementById('slantAxis');
  const heightAxis = document.getElementById('heightAxis');
  const rotationAxis = document.getElementById('rotationAxis');
  const fontSize = document.getElementById('fontSize');
  const lineHeight = document.getElementById('lineHeight');
  const letterSpacing = document.getElementById('letterSpacing');
  const customText = document.getElementById('customText');
  const customPreview = document.getElementById('customPreview');
  
  const widthValue = document.getElementById('widthValue');
  const slantValue = document.getElementById('slantValue');
  const heightValue = document.getElementById('heightValue');
  const rotationValue = document.getElementById('rotationValue');
  const lineHeightValue = document.getElementById('lineHeightValue');
  const letterSpacingValue = document.getElementById('letterSpacingValue');
  
  const allPreviews = document.querySelectorAll('.specimen-preview');

  function updatePreviews() {
    const widthVal = widthAxis.value;
    const slantVal = slantAxis.value;
    const heightVal = heightAxis.value;
    const rotationVal = rotationAxis.value;
    const fontSizeVal = fontSize.value + 'px';
    const lineHeightVal = lineHeight.value;
    const letterSpacingVal = letterSpacing.value + 'em';
    
    // Update display values
    widthValue.textContent = widthVal;
    slantValue.textContent = slantVal;
    heightValue.textContent = heightVal;
    rotationValue.textContent = rotationVal;
    lineHeightValue.textContent = lineHeightVal;
    letterSpacingValue.textContent = letterSpacingVal;
    
    // Apply variable font settings
    const fontVariationSettings = `'wdth' ${widthVal}, 'slnt' ${slantVal}, 'HGHT' ${heightVal}, 'HROT' ${rotationVal}`;
    
    allPreviews.forEach(preview => {
      preview.style.fontVariationSettings = fontVariationSettings;
      preview.style.fontSize = fontSizeVal;
      preview.style.lineHeight = lineHeightVal;
      preview.style.letterSpacing = letterSpacingVal;
    });
  }

  function updateCustomPreview() {
    customPreview.textContent = customText.value || 'Type your text above...';
  }

  // Event listeners for all controls
  widthAxis.addEventListener('input', updatePreviews);
  slantAxis.addEventListener('input', updatePreviews);
  heightAxis.addEventListener('input', updatePreviews);
  rotationAxis.addEventListener('input', updatePreviews);
  fontSize.addEventListener('input', updatePreviews);
  lineHeight.addEventListener('input', updatePreviews);
  letterSpacing.addEventListener('input', updatePreviews);
  customText.addEventListener('input', updateCustomPreview);

  // Initialize
  updatePreviews();
  updateCustomPreview();
</script>


