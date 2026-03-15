"use client";

import styles from "./RashiWheel.module.css";

// Zodiac symbol SVG paths (positioned around r=420 from center 500,500)
const ZODIAC_SYMBOLS = [
  "M485 85 Q500 65 515 85 M500 75 V95",                          // Aries ♈
  "M485 80 A15 15 0 1 0 515 80 M485 75 Q500 60 515 75",          // Taurus ♉
  "M485 70 H515 M485 95 H515 M493 70 V95 M507 70 V95",           // Gemini ♊
  "M515 75 A10 10 0 1 0 495 75 M485 90 A10 10 0 1 0 505 90",     // Cancer ♋
  "M490 90 A10 10 0 1 1 500 80 Q515 80 515 95",                   // Leo ♌
  "M485 75 Q495 65 500 85 Q505 65 515 90",                        // Virgo ♍
  "M485 95 H515 M485 85 Q500 70 515 85",                          // Libra ♎
  "M485 75 V95 M495 75 V95 M505 75 V100 L515 85",                 // Scorpio ♏
  "M485 95 L515 65 M505 65 H515 V75 M490 85 L500 95",             // Sagittarius ♐
  "M485 75 V95 Q500 105 515 75",                                   // Capricorn ♑
  "M485 80 Q500 70 515 80 M485 95 Q500 85 515 95",                // Aquarius ♒
  "M485 75 Q500 85 515 75 M485 95 Q500 85 515 95 M500 70 V100",   // Pisces ♓
];

// Constellation patterns – small dot clusters with connecting lines
const CONSTELLATIONS = [
  // Constellation 1 – top right area
  { dots: [[680, 170], [710, 150], [740, 175], [725, 210], [760, 195], [755, 230]], lines: [[680,170,710,150], [710,150,740,175], [740,175,725,210], [725,210,760,195], [760,195,755,230]] },
  // Constellation 2 – right area
  { dots: [[820, 350], [850, 330], [870, 360], [840, 380], [860, 400]], lines: [[820,350,850,330], [850,330,870,360], [870,360,840,380], [840,380,860,400]] },
  // Constellation 3 – bottom right
  { dots: [[750, 700], [780, 720], [770, 755], [800, 740], [810, 770]], lines: [[750,700,780,720], [780,720,770,755], [780,720,800,740], [800,740,810,770]] },
  // Constellation 4 – bottom left
  { dots: [[230, 750], [260, 770], [250, 800], [280, 790], [220, 790]], lines: [[230,750,260,770], [260,770,250,800], [260,770,280,790], [230,750,220,790]] },
  // Constellation 5 – top left
  { dots: [[220, 230], [250, 210], [240, 250], [270, 235], [200, 260]], lines: [[220,230,250,210], [250,210,270,235], [220,230,240,250], [240,250,200,260]] },
  // Constellation 6 – left area
  { dots: [[150, 430], [170, 410], [190, 440], [160, 460]], lines: [[150,430,170,410], [170,410,190,440], [190,440,160,460], [160,460,150,430]] },
  // Constellation 7 – top area
  { dots: [[420, 130], [440, 110], [465, 125], [450, 150]], lines: [[420,130,440,110], [440,110,465,125], [465,125,450,150]] },
  // Constellation 8 – bottom center
  { dots: [[480, 850], [510, 870], [540, 855], [520, 830]], lines: [[480,850,510,870], [510,870,540,855], [540,855,520,830]] },
];

export default function RashiWheel() {
  return (
    <div className={styles.wheelContainer}>
      {/* Rotating SVG Wheel */}
      <svg className={styles.rotatingWheel} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outermost ring */}
        <circle cx="500" cy="500" r="490" fill="none" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.15" />
        {/* Dashed ornamental ring */}
        <circle cx="500" cy="500" r="475" fill="none" stroke="#EAB308" strokeWidth="1.5" strokeDasharray="3 12" strokeLinecap="round" />
        {/* Solid zodiac ring */}
        <circle cx="500" cy="500" r="450" fill="none" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.6" />

        {/* 12 segment dividers */}
        <g stroke="#EAB308" strokeWidth="0.5" strokeOpacity="0.35">
          {[...Array(12)].map((_, i) => (
            <line
              key={`seg-${i}`}
              x1="500"
              y1="500"
              x2={500 + 490 * Math.cos((i * 30 - 90) * Math.PI / 180)}
              y2={500 + 490 * Math.sin((i * 30 - 90) * Math.PI / 180)}
            />
          ))}
        </g>

        {/* Zodiac symbol paths */}
        <g filter="url(#glow)">
          {ZODIAC_SYMBOLS.map((path, i) => (
            <path
              key={`zodiac-${i}`}
              d={path}
              fill="none"
              stroke="#EAB308"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`rotate(${i * 30}, 500, 500)`}
            />
          ))}
        </g>

        {/* Inner decorative ring */}
        <circle cx="500" cy="500" r="340" fill="none" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="500" cy="500" r="330" fill="none" stroke="#EAB308" strokeWidth="0.5" strokeDasharray="2 6" strokeOpacity="0.3" />

        {/* 12-Pointed Central Star */}
        <g filter="url(#glow)">
          <path
            d="M500 350 L520 440 L600 400 L550 470 L650 500 L550 530 L600 600 L520 560 L500 650 L480 560 L400 600 L450 530 L350 500 L450 470 L400 400 L480 440 Z"
            fill="none"
            stroke="#EAB308"
            strokeWidth="1.5"
          />
        </g>

        {/* Second smaller star inside */}
        <g filter="url(#softGlow)">
          <path
            d="M500 400 L512 465 L560 440 L535 480 L590 500 L535 520 L560 560 L512 535 L500 600 L488 535 L440 560 L465 520 L410 500 L465 480 L440 440 L488 465 Z"
            fill="none"
            stroke="#EAB308"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        </g>

        {/* Constellation patterns (rotate with wheel) */}
        {CONSTELLATIONS.map((constellation, ci) => (
          <g key={`const-${ci}`}>
            {/* Connecting lines */}
            {constellation.lines.map((line, li) => (
              <line
                key={`cline-${ci}-${li}`}
                x1={line[0]}
                y1={line[1]}
                x2={line[2]}
                y2={line[3]}
                stroke="#EAB308"
                strokeWidth="0.5"
                strokeOpacity="0.25"
              />
            ))}
            {/* Star dots */}
            {constellation.dots.map((dot, di) => (
              <circle
                key={`cdot-${ci}-${di}`}
                cx={dot[0]}
                cy={dot[1]}
                r={di === 0 ? 2.5 : 1.5}
                fill="#EAB308"
                opacity={di === 0 ? 0.7 : 0.4}
                filter={di === 0 ? "url(#softGlow)" : undefined}
              />
            ))}
          </g>
        ))}

        {/* Scattered individual stars */}
        <g fill="#EAB308">
          <circle cx="600" cy="120" r="1" opacity="0.3" />
          <circle cx="880" cy="480" r="1.5" opacity="0.25" />
          <circle cx="850" cy="600" r="1" opacity="0.2" />
          <circle cx="130" cy="350" r="1.5" opacity="0.2" />
          <circle cx="350" cy="880" r="1" opacity="0.25" />
          <circle cx="620" cy="870" r="1" opacity="0.2" />
          <circle cx="160" cy="600" r="1" opacity="0.15" />
          <circle cx="310" cy="140" r="1.5" opacity="0.2" />
          <circle cx="890" cy="280" r="1" opacity="0.15" />
          <circle cx="120" cy="800" r="1.5" opacity="0.2" />
        </g>

        {/* Central circle around Om */}
        <circle cx="500" cy="500" r="70" fill="none" stroke="#EAB308" strokeWidth="1.5" />
        <circle cx="500" cy="500" r="60" fill="none" stroke="#EAB308" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.5" />
      </svg>

      {/* Static Om symbol in center (does NOT rotate) */}
      <svg className={styles.omContainer} width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <text
          x="50"
          y="62"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#EAB308"
          fontSize="68"
          fontFamily="serif"
          filter="url(#omGlow)"
        >
          ॐ
        </text>
        <defs>
          <filter id="omGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
