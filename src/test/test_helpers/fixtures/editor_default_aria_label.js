export default () =>
  `<trix-editor id="editor-without-labels"></trix-editor>

  <label for="editor-with-aria-label"><span>Label text</span></label>
  <trix-editor id="editor-with-aria-label" aria-label="ARIA Label text"></trix-editor>

  <span id="aria-labelledby-id">ARIA Labelledby</span>
  <label for="editor-with-aria-labelledby"><span>Label text</span></label>
  <trix-editor id="editor-with-aria-labelledby" aria-labelledby="aria-labelledby-id"></trix-editor>

  <label for="editor-with-labels"><span>Label 1</span></label>
  <label for="editor-with-labels"><span>Label 2</span></label>
  <label for="editor-with-labels"><span>Label 3</span></label>
  <label>
    <span>Label 4</span>
    <trix-editor id="editor-with-labels"></trix-editor>
  </label>

  <label id="modified-label" for="editor-with-modified-label">Original Value</label>
  <trix-editor id="editor-with-modified-label"></trix-editor>`
