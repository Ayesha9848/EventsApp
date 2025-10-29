# EventsApp
A responsive website showing Recommended Shows (horizontal infinite scroll) and Upcoming Events (vertical lazy-loaded infinite scroll). Includes simple signup/login (client-side) and session management via localStorage.


## Run locally


1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`


## Build & Deploy


- `npm run build` then host `dist` on Vercel / Netlify.


## Notes


- The project uses the provided APIs for events. Replace the auth client-side logic in `src/lib/auth.js` with your backend calls if available.
- Styling uses Tailwind; colors and fonts follow the spec (Inter, #1E2022 headings, #989090 subtitles, logo #CF2D2D).
