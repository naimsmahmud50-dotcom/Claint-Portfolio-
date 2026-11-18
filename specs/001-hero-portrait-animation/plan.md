# Technical Plan: Hero Portrait Animation

## Architecture
- **Component**: Modify `src/components/home/HeroSection.tsx`.
- **CSS Strategy**:
  - Use Tailwind CSS for base layout.
  - Use custom CSS keyframes for rotation animations (`rotate-ring` and `rotate-icons`).
  - Use `relative` and `absolute` positioning to stack the portrait, ring, and icons.

## Implementation Details
1. **Container Structure**:
   - Create a `relative` container for the portrait.
   - Place the image inside a `rounded-full` container (circle).
   - Add a separate `div` for the RGB animated ring with absolute positioning.
   - Add a container `div` for the icons, also absolutely positioned and animating, with individual icon `divs` positioned around it.

2. **Animation**:
   - Define `@keyframes rotate` in the global CSS or as a Tailwind plugin/custom class.
   - Apply `animate-spin` (or custom long-duration rotation) to the ring and icon container.

3. **Skills Data**:
   - Create a constant for skill icons and their labels to map them dynamically.

## Verification
- Visual inspection via browser (headless screenshot).
- Ensure no layout shifts.
