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

<a href="https://github.com/ursooperduper/outpost-mono" class="gh-card" target="_blank" rel="noopener noreferrer">
  <div class="gh-title-bar">
    <span class="gh-repo-title">
      <span>ursooperduper<span class="gh-slash">/</span><strong>outpost-mono</strong></span>
    </span>
    <svg class="gh-github-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
    </svg>
  </div>
</a>

<style>
.gh-card {
  display: block;
  border: 0.5px solid var(--border);
  border-radius: 8px;
  padding: 1rem 1.25rem 0.75rem 1.25rem;
  margin: 1.25rem 0 1.75rem 0;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease-out;
  background: var(--astro-code-background);
}

.gh-card:hover {
  background: color-mix(in srgb, var(--selection) 75%, transparent);
  text-decoration: none;
}

.gh-title-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.gh-repo-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
  color: var(--text-primary);
  flex-grow: 1;
}

.gh-repo-title strong {
  font-weight: var(--font-weight-bold);
}

.gh-slash {
  color: var(--text-secondary);
  margin: 0 0.375rem;
}

.gh-github-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--text-primary);
  flex-shrink: 0;
}

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

