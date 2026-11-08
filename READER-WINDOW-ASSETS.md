# Reader window asset map

Source of placement: the user sketches `1.png` (current reader), `2.png` (target layout), and `3.png` (boundary placement guide). The four supplied boundary textures have been copied unchanged into `public/images/reader-window/`.

## Supplied textures

| File | Source dimensions | Intended use |
| --- | ---: | --- |
| `outer-frame.png` | 638 × 430 | Ornamental outer frame, corresponding to the large outer boundary in sketch 3. Fit or slice it without stretching its corner and midpoint details. |
| `corner-boundary.png` | 313 × 315 | Corner ornament at the marked turns of the reading-pane boundary. Rotate or mirror for the other corners while retaining the artwork's transparent background. |
| `short-boundary.png` | 798 × 110 | Short ornamental rule for boundary segments shorter than half of their axis, per sketch 3. Keep its central star aligned to the segment. |
| `constellation-arrow.png` | 160 × 145 | Constellation previous/next controls shown at the artwork-side footer in sketch 2. Mirror one copy for the opposite direction. |

All four source textures are RGBA PNGs with transparent pixels; originals were preserved. The sketches are visual references and were not copied into the production assets directory.

## Layout correspondence

- **Desktop, sketch 2:** The reader becomes two main visual regions: a broad article pane on the left and a constellation artwork region on the right. The article title is the article-picker trigger; article content scrolls inside its own pane. The constellation number, name, and arrow controls stay with the artwork region. The constellation artwork sits behind the right region's text and fades toward the left and lower edges.
- **Boundary positions, sketch 3:** Replace the drawn white boundary lines only. Use the outer frame on the perimeter; use the long/corner artwork along the long reading-pane edges and at their turns; use the short rule only for short segments. The short-rule placement and precise joins should be aligned to the actual reader geometry during implementation, not applied as extra decoration elsewhere.
- **Mobile:** Hide the desktop constellation chooser entirely. Keep the selected constellation as a darkened background behind the article, and retain the article picker and constellation navigation in a compact layout.

## Implementation notes

- Preserve transparency and original color; test contrast against the existing smoky-black reader surface.
- Avoid distorting the supplied ornament. The full-frame art has a 1.48:1 aspect ratio, so it may need edge slicing or separate edge/corner positioning to fit the wider reader window cleanly.
- Article ordering should use an explicit order value when present; otherwise sort titles alphanumerically within the selected constellation.

## Step 4 implementation

- The full `outer-frame.png` texture replaces the plain perimeter rule around the reader window.
- A second `outer-frame.png` overlay traces the article pane boundary and fades as it reaches the constellation side; the four `corner-boundary.png` images replace its corner joins.
- `short-boundary.png` sits beneath the article title. The carousel arrow asset remains on the constellation controls.
- The old text-glyph corners and CSS corner strokes were removed. Decorative layers ignore pointer input so they cannot block the picker, reader scrolling, or navigation.
