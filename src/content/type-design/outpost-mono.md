---
title: "Outpost Mono"
description: "A futuristic monospaced font designed for martian outposts. Free and opensource."
order: 2
url: "https://github.com/ursooperduper/outpost-mono"
thumbnail: "./_assets/outpost-mono/outpostmono-thumb.png"
---

Outpost Mono is a technical monospaced typeface designed with space exploration themes in mind. It's a futuristic monospace font designed for the terminals of martian outposts, but ready for earth's terminals and editors today.

![Outpost Mono promotional image](./_assets/outpost-mono/om-01.png)

Key features:
- Open source (SIL Open Font License)
- Available in three weights Light, Regular, and Bold
- Support for Latin, Cyrillic, and basic Greek languages

![Outpost Mono promotional image](./_assets/outpost-mono/om-03.png)

Outpost Mono was 

Outpost Mono is open source, you can clone, modify, and make Outpost Mono your own. Or just download the font itself and use it in your terminal, editor, or next orbital communiqué. Go check it out on <a href="https://github.com/ursooperduper/outpost-mono" target="_blank">Github</a>.


<div class="font-specimen-explorer">
  <h3>Test Your Own Text</h3>
  
  <!-- Custom Text Input -->
  <textarea id="customText" placeholder="Type your text here..." style="font-family: 'Outpost Mono', monospace;">Hamburgefonstiv</textarea>
  
  <!-- Font Controls -->
  <div class="specimen-controls">
    <div class="control-group">
      <label for="fontWeight">Weight:</label>
      <select id="fontWeight">
        <option value="300">Light</option>
        <option value="400" selected>Regular</option>
        <option value="700">Bold</option>
      </select>
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
    <div id="customPreview" class="specimen-preview" style="font-family: 'Outpost Mono', monospace;">Hamburgefonstiv</div>
  </div>

</div>

![Outpost Mono promotional image](./_assets/outpost-mono/om-04.png)

![Outpost Mono promotional image](./_assets/outpost-mono/om-05.png)

<style>
.font-specimen-explorer {
  margin: 2rem 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--astro-code-background);
}

.font-specimen-explorer h3 {
  padding-top: 0;
  margin-top: 0;
}

.specimen-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(13, 15, 16, 0.02);
  border-radius: 4px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  color: var(--text-secondary);
}

.control-group input[type="range"] {
  width: 100%;
}

.specimen-section {
  margin-bottom: 2rem;
}

.specimen-section h3 {
  margin: 0 0 1rem 0;
  font-size: var(--font-size-l);
  color: var(--text-primary);
}

.specimen-section h4 {
  margin: 0.5rem 0 0.25rem 0;
  font-size: var(--font-size-s);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.specimen-preview {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1rem;
  line-height: 1.4;
}

#customText {
  width: 100%;
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
  // Font specimen controls
  const fontWeight = document.getElementById('fontWeight');
  const fontSize = document.getElementById('fontSize');
  const lineHeight = document.getElementById('lineHeight');
  const letterSpacing = document.getElementById('letterSpacing');
  const customText = document.getElementById('customText');
  const customPreview = document.getElementById('customPreview');
  
  const lineHeightValue = document.getElementById('lineHeightValue');
  const letterSpacingValue = document.getElementById('letterSpacingValue');
  
  const allPreviews = document.querySelectorAll('.specimen-preview');

  function updatePreviews() {
    const fontWeightVal = fontWeight.value;
    const fontSizeVal = fontSize.value + 'px';
    const lineHeightVal = lineHeight.value;
    const letterSpacingVal = letterSpacing.value + 'em';
    
    lineHeightValue.textContent = lineHeightVal;
    letterSpacingValue.textContent = letterSpacingVal;
    
    allPreviews.forEach(preview => {
      preview.style.fontWeight = fontWeightVal;
      preview.style.fontSize = fontSizeVal;
      preview.style.lineHeight = lineHeightVal;
      preview.style.letterSpacing = letterSpacingVal;
    });
  }

  function updateCustomPreview() {
    customPreview.textContent = customText.value || 'Type your text above...';
  }

  fontWeight.addEventListener('change', updatePreviews);
  fontSize.addEventListener('input', updatePreviews);
  lineHeight.addEventListener('input', updatePreviews);
  letterSpacing.addEventListener('input', updatePreviews);
  customText.addEventListener('input', updateCustomPreview);

  // Initialize
  updatePreviews();
  updateCustomPreview();
</script>

::github{repo="ursooperduper/outpost-mono"}