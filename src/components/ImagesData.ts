/**
 * Plain-text SVG assets that match the exact descriptions of the uploaded images.
 * These are base64 encoded at runtime to satisfy the data-URI requirement.
 */

// 1. Hero Portrait: A young man in a dark jacket at a night event with a cybersecurity theme and subtle glow.
export const HERO_PORTRAIT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0c0c0c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="jacket" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="face" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#fdba74"/>
    </linearGradient>
    <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="cyberLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>
  
  <!-- Ambient Space -->
  <rect width="400" height="500" fill="#0C0C0C"/>
  
  <!-- Cyber Security Matrix Grid lines -->
  <g stroke="#1f2937" stroke-width="0.5" opacity="0.7">
    <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250 M 0 300 L 400 300 M 0 350 L 400 350 M 0 400 L 400 400 M 0 450 L 400 450" />
    <path d="M 50 0 L 50 500 M 100 0 L 100 500 M 150 0 L 150 500 M 200 0 L 200 500 M 250 0 L 250 500 M 300 0 L 300 500 M 350 0 L 350 500" />
  </g>

  <!-- Night Event light bokeh -->
  <circle cx="80" cy="140" r="45" fill="#4f46e5" filter="blur(40px)" opacity="0.3"/>
  <circle cx="330" cy="180" r="55" fill="#818cf8" filter="blur(45px)" opacity="0.25"/>
  <circle cx="200" cy="220" r="140" fill="url(#glow)" />

  <!-- Technical Overlay circles -->
  <circle cx="200" cy="230" r="130" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,8" fill="none" opacity="0.3"/>
  <circle cx="200" cy="230" r="110" stroke="#818cf8" stroke-width="0.5" stroke-dasharray="1,4" fill="none" opacity="0.2"/>

  <!-- Body (Dark Jacket, young man) -->
  <path d="M 110 430 Q 200 460 290 430 L 310 500 L 90 500 Z" fill="url(#jacket)"/>
  <!-- Lapel / Collar of Dark Jacket -->
  <path d="M 140 395 L 160 440 L 190 430 L 170 398 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="1" />
  <path d="M 260 395 L 240 440 L 210 430 L 230 398 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="1" />

  <!-- Inner Dark Shirt -->
  <path d="M 175 400 Q 200 420 225 400 L 215 500 L 185 500 Z" fill="#020617"/>

  <!-- Neck -->
  <path d="M 175 330 Q 200 390 225 330 L 220 398 Q 200 405 180 398 Z" fill="#fdba74"/>

  <!-- Head / Face -->
  <path d="M 155 220 Q 148 280 200 315 Q 252 280 245 220 C 250 185 230 145 200 145 C 170 145 150 185 155 220 Z" fill="url(#face)"/>

  <!-- Hair -->
  <path d="M 152 210 C 145 155 172 125 200 125 C 228 125 255 155 248 210 C 251 190 242 160 228 152 C 218 147 210 152 200 152 C 190 152 182 147 172 152 C 158 160 149 190 152 210 Z" fill="url(#hair)"/>

  <!-- Eyebrows -->
  <path d="M 172 214 Q 182 208 192 214" stroke="#020617" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M 228 214 Q 218 208 208 214" stroke="#020617" stroke-width="2.5" stroke-linecap="round" fill="none"/>

  <!-- Eyes -->
  <ellipse cx="182" cy="225" rx="7" ry="3.5" fill="#1e293b"/>
  <circle cx="183.5" cy="223.5" r="2" fill="#ffffff"/>
  <ellipse cx="218" cy="225" rx="7" ry="3.5" fill="#1e293b"/>
  <circle cx="219.5" cy="223.5" r="2" fill="#ffffff"/>

  <!-- Nose -->
  <path d="M 200 225 L 197 258 Q 200 262 203 258 Z" fill="#f3a774"/>

  <!-- Mouth (Subtle Smile) -->
  <path d="M 188 282 Q 200 294 212 282" stroke="#e11d48" stroke-width="1.5" stroke-linecap="round" fill="none"/>

  <!-- Cybersecurity HUD glasses -->
  <path d="M 163 225 Q 200 221 237 225" stroke="#6366f1" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
  <path d="M 165 225 Q 175 238 188 225 Z" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1"/>
  <path d="M 212 225 Q 225 238 235 225 Z" fill="#6366f1" fill-opacity="0.15" stroke="#6366f1" stroke-width="1"/>

  <!-- Neon Collar Glow Accent Line -->
  <path d="M 115 450 Q 200 480 285 450" stroke="url(#cyberLine)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <circle cx="200" cy="466" r="3.5" fill="#818cf8"/>
</svg>
`;

// 2. Trackify: Dark purple dashboard.
export const TRACKIFY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="trackBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040209"/>
      <stop offset="50%" stop-color="#0a0518"/>
      <stop offset="100%" stop-color="#0c0c0c"/>
    </linearGradient>
    <linearGradient id="purpleBtn" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  
  <!-- Canvas Background -->
  <rect width="800" height="500" rx="32" fill="url(#trackBg)"/>
  <rect width="800" height="500" rx="32" fill="none" stroke="#2e1065" stroke-width="2" opacity="0.3"/>

  <!-- Abstract purple background flares -->
  <circle cx="650" cy="150" r="140" fill="#4f46e5" filter="blur(65px)" opacity="0.15"/>
  <circle cx="150" cy="350" r="100" fill="#7c3aed" filter="blur(60px)" opacity="0.1"/>

  <!-- Header / Top Bar -->
  <!-- Logo -->
  <rect x="35" y="30" width="24" height="24" rx="6" fill="#7c3aed"/>
  <path d="M 41 42 L 47 36 L 53 42 Z" fill="#ffffff"/>
  <text x="68" y="47" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#ffffff">Trackify</text>

  <!-- Nav links -->
  <text x="590" y="45" font-family="'Inter', sans-serif" font-weight="500" font-size="13" fill="#9ca3af">Login</text>
  <text x="645" y="45" font-family="'Inter', sans-serif" font-weight="500" font-size="13" fill="#9ca3af">View Demo</text>
  <!-- Get Started Pill -->
  <rect x="730" y="28" width="100" height="28" rx="14" fill="#7c3aed" transform="translate(-85, 0)"/>
  <text x="660" y="46" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#ffffff">Get Started</text>

  <!-- LEFT HERO BLOCK -->
  <!-- Main Heading "Track smarter. Save better." -->
  <text x="35" y="155" font-family="'Inter', sans-serif" font-weight="900" font-size="44" fill="#ffffff">
    Track smarter<tspan fill="#7c3aed">.</tspan>
  </text>
  <text x="35" y="215" font-family="'Inter', sans-serif" font-weight="900" font-size="44" fill="#ffffff">
    Save better<tspan fill="#7c3aed">.</tspan>
  </text>

  <!-- Body copy -->
  <text x="35" y="270" font-family="'Inter', sans-serif" font-weight="400" font-size="14" fill="#9ca3af">Track every rupee, set smart budgets, and visualize your</text>
  <text x="35" y="292" font-family="'Inter', sans-serif" font-weight="400" font-size="14" fill="#9ca3af">financial journey with Trackify.</text>

  <!-- Interactive Action Buttons -->
  <!-- Start Tracking Pill -->
  <rect x="35" y="335" width="170" height="42" rx="12" fill="url(#purpleBtn)"/>
  <text x="55" y="361" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#ffffff">Start Tracking Now →</text>

  <!-- View Demo Button -->
  <rect x="220" y="335" width="110" height="42" rx="12" fill="none" stroke="#374151" stroke-width="1.5"/>
  <text x="248" y="361" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#ffffff">View Demo</text>

  <!-- RIGHT CARD / DISPLAY CONTAINER -->
  <!-- Card Background -->
  <rect x="440" y="110" width="325" height="290" rx="20" fill="#0c0915" stroke="#1f1a2e" stroke-width="1.5"/>
  
  <!-- "TOTAL BALANCE" -->
  <text x="465" y="145" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#6b7280" letter-spacing="1">TOTAL BALANCE</text>
  <!-- Balance value: ₹45,250.00 -->
  <text x="465" y="185" font-family="'Inter', sans-serif" font-weight="800" font-size="28" fill="#ffffff">₹45,250.00</text>

  <!-- Balance Spark Icon -->
  <circle cx="715" cy="165" r="16" fill="#1e1b4b"/>
  <path d="M 715 157 L 709 166 L 714 166 L 713 173 L 721 164 L 716 164 Z" fill="#818cf8"/>

  <!-- Category List -->
  <!-- Rent & Utilities (₹12,000) -->
  <rect x="465" y="210" width="275" height="45" rx="10" fill="#131024" stroke="#1c1635" stroke-width="1"/>
  <rect x="477" y="222" width="5" height="21" rx="2.5" fill="#8b5cf6"/>
  <text x="495" y="237" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#e5e7eb">Rent &amp; Utilities</text>
  <text x="675" y="237" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#ffffff">₹12,000</text>

  <!-- Groceries (₹4,500) -->
  <rect x="465" y="265" width="275" height="45" rx="10" fill="#131024" stroke="#1c1635" stroke-width="1"/>
  <rect x="477" y="277" width="5" height="21" rx="2.5" fill="#3b82f6"/>
  <text x="495" y="292" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#e5e7eb">Groceries</text>
  <text x="680" y="292" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#ffffff">₹4,500</text>

  <!-- Entertainment (₹2,200) -->
  <rect x="465" y="320" width="275" height="45" rx="10" fill="#131024" stroke="#1c1635" stroke-width="1"/>
  <rect x="477" y="332" width="5" height="21" rx="2.5" fill="#06b6d4"/>
  <text x="495" y="347" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#e5e7eb">Entertainment</text>
  <text x="680" y="347" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#ffffff">₹2,200</text>
  
  <!-- Floating decorative items -->
  <!-- Checkmark shield bubble -->
  <rect x="415" y="340" width="40" height="40" rx="12" fill="#090d16" stroke="#1f2937" stroke-width="1"/>
  <path d="M 435 348 L 442 355 L 442 360 C 442 365 435 370 435 372 C 435 370 428 365 428 360 L 428 355 Z" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <path d="M 432 359 L 434 361 L 438 357" stroke="#818cf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Top balance wheel overlay bubble -->
  <rect x="725" y="75" width="40" height="40" rx="12" fill="#090d16" stroke="#1f2937" stroke-width="1"/>
  <!-- Circle chart indicator -->
  <circle cx="745" cy="95" r="10" fill="none" stroke="#1f2937" stroke-width="3.5"/>
  <path d="M 745 85 A 10 10 0 0 1 755 95" fill="none" stroke="#a855f7" stroke-width="3.5" stroke-linecap="round"/>
</svg>
`;

// 3. PassKey: White manager UI with lock and key cards.
export const PASSKEY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <!-- Background -->
  <rect width="800" height="500" rx="32" fill="#ffffff" stroke="#f3f4f6" stroke-width="3"/>
  
  <!-- Header / Nav bar -->
  <text x="35" y="52" font-family="'Inter', sans-serif" font-weight="900" font-size="20" fill="#2563eb" letter-spacing="1">PASSKEY</text>
  
  <g fill="#4b5563" font-family="'Inter', sans-serif" font-weight="700" font-size="12" text-anchor="end">
    <text x="610" y="48">Home</text>
    <text x="660" y="48">About</text>
    <text x="710" y="48">FAQs</text>
    <text x="760" y="48" fill="#2563eb">Login</text>
  </g>
  <line x1="0" y1="75" x2="800" y2="75" stroke="#f3f4f6" stroke-width="1.5" />

  <!-- Page Main Title "Choose Your Security Tool" -->
  <text x="400" y="125" font-family="'Inter', sans-serif" font-weight="900" font-size="28" fill="#2563eb" text-anchor="middle" letter-spacing="-0.5">
    Choose Your Security Tool
  </text>

  <!-- TWO COLUMNS GRID -->
  <!-- Left Card: Password Vault -->
  <rect x="55" y="165" width="320" height="280" rx="16" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
  <!-- Shadow overlay for card depth -->
  <rect x="55" y="165" width="320" height="280" rx="16" fill="none" stroke="#2563eb" stroke-width="2.5" opacity="0.1"/>

  <!-- Lock Icon -->
  <path d="M 195 240 L 235 240 L 235 265 L 195 265 Z" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round"/>
  <path d="M 202 240 L 202 225 A 13 13 0 0 1 228 225 L 228 240" fill="none" stroke="#2563eb" stroke-width="3.5"/>
  <circle cx="215" cy="251" r="3.5" fill="#2563eb"/>

  <!-- Card title -->
  <text x="215" y="305" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#2563eb" text-anchor="middle">Password Vault</text>
  <!-- Card description -->
  <text x="215" y="335" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">Securely store and manage all your passwords</text>
  <text x="215" y="352" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">in one place. Organize them by categories and</text>
  <text x="215" y="369" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">access them anywhere.</text>

  <!-- Card Button -->
  <rect x="135" y="395" width="160" height="38" rx="8" fill="#2563eb"/>
  <text x="215" y="418" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#ffffff" text-anchor="middle">Open Vault  →</text>


  <!-- Right Card: Password Generator -->
  <rect x="425" y="165" width="320" height="280" rx="16" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="425" y="165" width="320" height="280" rx="16" fill="none" stroke="#2563eb" stroke-width="2.5" opacity="0.1"/>

  <!-- Key Icon -->
  <circle cx="595" cy="245" r="11" fill="none" stroke="#2563eb" stroke-width="3.5"/>
  <path d="M 586 248 L 565 269 L 570 274 L 575 269 L 579 273 L 585 267" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Card title -->
  <text x="585" y="305" font-family="'Inter', sans-serif" font-weight="800" font-size="16" fill="#2563eb" text-anchor="middle">Password Generator</text>
  <!-- Card description -->
  <text x="585" y="335" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">Create strong, unique passwords instantly.</text>
  <text x="585" y="352" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">Customize length and complexity to meet</text>
  <text x="585" y="369" font-family="'Inter', sans-serif" font-weight="400" font-size="11.5" fill="#4b5563" text-anchor="middle">your security needs.</text>

  <!-- Card Button -->
  <rect x="505" y="395" width="160" height="38" rx="8" fill="#2563eb"/>
  <text x="585" y="418" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#ffffff" text-anchor="middle">Generate Password  →</text>
</svg>
`;
