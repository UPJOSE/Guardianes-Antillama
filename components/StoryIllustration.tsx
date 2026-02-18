'use client';

interface StoryIllustrationProps {
  category: string;
  className?: string;
}

export default function StoryIllustration({ category, className = '' }: StoryIllustrationProps) {
  const illustrations: Record<string, JSX.Element> = {
    agua_caliente: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Kitchen counter */}
        <rect x="0" y="140" width="400" height="60" rx="8" fill="#F5E6D3" />
        <rect x="0" y="140" width="400" height="4" fill="#E8D5BF" />
        {/* Pot */}
        <ellipse cx="200" cy="140" rx="55" ry="10" fill="#B0B0B0" />
        <rect x="145" y="80" width="110" height="60" rx="8" fill="#C0C0C0" />
        <rect x="145" y="80" width="110" height="8" rx="4" fill="#D0D0D0" />
        <rect x="120" y="100" width="25" height="8" rx="4" fill="#A0A0A0" />
        <rect x="255" y="100" width="25" height="8" rx="4" fill="#A0A0A0" />
        {/* Steam */}
        <path d="M175 75 Q180 55 175 35" stroke="#FFD166" strokeWidth="3" fill="none" opacity="0.6">
          <animate attributeName="d" values="M175 75 Q180 55 175 35;M175 75 Q170 50 178 30;M175 75 Q180 55 175 35" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M200 70 Q205 48 200 28" stroke="#FFD166" strokeWidth="3" fill="none" opacity="0.5">
          <animate attributeName="d" values="M200 70 Q205 48 200 28;M200 70 Q195 45 203 25;M200 70 Q205 48 200 28" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M225 75 Q230 55 225 35" stroke="#FFD166" strokeWidth="3" fill="none" opacity="0.6">
          <animate attributeName="d" values="M225 75 Q230 55 225 35;M225 75 Q220 50 228 30;M225 75 Q230 55 225 35" dur="1.8s" repeatCount="indefinite" />
        </path>
        {/* Warning triangle */}
        <polygon points="340,50 360,90 320,90" fill="#FF8C42" opacity="0.8" />
        <text x="340" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">!</text>
        {/* Decorative bubbles */}
        <circle cx="60" cy="60" r="8" fill="#74C0FC" opacity="0.3">
          <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="40" r="5" fill="#74C0FC" opacity="0.2">
          <animate attributeName="cy" values="40;30;40" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="330" cy="30" r="6" fill="#FFD166" opacity="0.3">
          <animate attributeName="cy" values="30;20;30" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    cocina: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Stove */}
        <rect x="100" y="100" width="200" height="80" rx="10" fill="#E8E8E8" />
        <rect x="100" y="100" width="200" height="12" rx="6" fill="#D0D0D0" />
        {/* Burners */}
        <circle cx="160" cy="145" r="22" fill="#444" stroke="#555" strokeWidth="2" />
        <circle cx="160" cy="145" r="15" fill="none" stroke="#666" strokeWidth="1.5" />
        <circle cx="240" cy="145" r="22" fill="#444" stroke="#555" strokeWidth="2" />
        <circle cx="240" cy="145" r="15" fill="none" stroke="#666" strokeWidth="1.5" />
        {/* Flame on left burner */}
        <ellipse cx="160" cy="130" rx="12" ry="18" fill="#FF8C42" opacity="0.9">
          <animate attributeName="ry" values="18;22;18" dur="0.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="160" cy="132" rx="7" ry="12" fill="#FFD166">
          <animate attributeName="ry" values="12;15;12" dur="0.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="160" cy="134" rx="3" ry="6" fill="#FFF3BF">
          <animate attributeName="ry" values="6;8;6" dur="0.3s" repeatCount="indefinite" />
        </ellipse>
        {/* Pot on flame */}
        <rect x="138" y="95" width="44" height="30" rx="4" fill="#8B7355" />
        <rect x="130" y="92" width="60" height="6" rx="3" fill="#A08060" />
        {/* Knobs */}
        <circle cx="130" cy="175" r="6" fill="#333" />
        <circle cx="155" cy="175" r="6" fill="#FF6B6B" />
        <circle cx="245" cy="175" r="6" fill="#333" />
        <circle cx="270" cy="175" r="6" fill="#333" />
        {/* Sparkle decorations */}
        <circle cx="50" cy="50" r="4" fill="#FFD166" opacity="0.5">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="40" r="5" fill="#FF8C42" opacity="0.4">
          <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="160" r="3" fill="#51CF66" opacity="0.4">
          <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    electricidad: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Power strip */}
        <rect x="80" y="120" width="240" height="40" rx="8" fill="#E8E8E8" stroke="#CCC" strokeWidth="2" />
        {/* Outlets */}
        {[120, 170, 220, 270].map((x, i) => (
          <g key={i}>
            <rect x={x - 10} y="130" width="20" height="20" rx="3" fill="#FFF" stroke="#DDD" strokeWidth="1" />
            <circle cx={x - 3} cy="140" r="2" fill="#666" />
            <circle cx={x + 3} cy="140" r="2" fill="#666" />
          </g>
        ))}
        {/* Cables going everywhere */}
        <path d="M120 150 Q100 170 60 180" stroke="#555" strokeWidth="3" fill="none" />
        <path d="M170 150 Q160 175 140 190" stroke="#777" strokeWidth="3" fill="none" />
        <path d="M220 150 Q230 175 260 190" stroke="#555" strokeWidth="3" fill="none" />
        <path d="M270 150 Q290 170 340 180" stroke="#777" strokeWidth="3" fill="none" />
        <path d="M270 150 Q310 160 350 150" stroke="#555" strokeWidth="2.5" fill="none" />
        {/* Lightning bolt warning */}
        <polygon points="195,20 210,55 200,55 215,90 190,50 200,50" fill="#FFD166">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </polygon>
        {/* Heat waves from strip */}
        <path d="M150 115 Q155 105 150 95" stroke="#FF6B6B" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M250 115 Q255 105 250 95" stroke="#FF6B6B" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.3s" repeatCount="indefinite" />
        </path>
        {/* Sparkle */}
        <circle cx="50" cy="60" r="4" fill="#74C0FC" opacity="0.4">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="360" cy="70" r="5" fill="#CC5DE8" opacity="0.3">
          <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    fuego_pequeno: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Table */}
        <rect x="40" y="130" width="320" height="10" rx="4" fill="#D4A574" />
        <rect x="60" y="140" width="8" height="50" fill="#C49A6C" />
        <rect x="332" y="140" width="8" height="50" fill="#C49A6C" />
        {/* Cake */}
        <rect x="150" y="95" width="100" height="35" rx="8" fill="#F8A4B8" />
        <rect x="145" y="90" width="110" height="12" rx="6" fill="#FFB6C8" />
        <rect x="155" y="85" width="90" height="8" rx="4" fill="#FFC8D6" />
        {/* Candles on cake */}
        {[175, 195, 215, 235].map((x, i) => (
          <g key={i}>
            <rect x={x - 1.5} y="68" width="3" height="18" rx="1" fill={['#74C0FC', '#FFD166', '#CC5DE8', '#51CF66'][i]} />
            <ellipse cx={x} cy="64" rx="4" ry="7" fill="#FF8C42" opacity="0.9">
              <animate attributeName="ry" values="7;9;7" dur={`${0.4 + i * 0.1}s`} repeatCount="indefinite" />
            </ellipse>
            <ellipse cx={x} cy="65" rx="2" ry="4" fill="#FFD166">
              <animate attributeName="ry" values="4;5;4" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite" />
            </ellipse>
          </g>
        ))}
        {/* Streamers/serpentinas */}
        <path d="M80 40 Q100 50 90 70 Q80 90 100 100" stroke="#FF6B6B" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M320 30 Q300 50 310 70 Q320 90 300 110" stroke="#CC5DE8" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M60 80 Q80 85 75 100" stroke="#FFD166" strokeWidth="2.5" fill="none" opacity="0.5" />
        {/* Balloons */}
        <ellipse cx="70" cy="35" rx="18" ry="22" fill="#74C0FC" opacity="0.7" />
        <line x1="70" y1="57" x2="72" y2="80" stroke="#74C0FC" strokeWidth="1" opacity="0.5" />
        <ellipse cx="340" cy="25" rx="16" ry="20" fill="#F783AC" opacity="0.7" />
        <line x1="340" y1="45" x2="338" y2="70" stroke="#F783AC" strokeWidth="1" opacity="0.5" />
        {/* Party sparkles */}
        <circle cx="120" cy="30" r="3" fill="#FFD166" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="50" r="4" fill="#51CF66" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="20" r="3" fill="#FF8C42" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    productos_quimicos: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Bathroom floor tiles */}
        <rect x="0" y="140" width="400" height="60" rx="4" fill="#E8E0F0" />
        {[0,50,100,150,200,250,300,350].map((x, i) => (
          <rect key={i} x={x} y="140" width="48" height="28" rx="2" fill={i % 2 === 0 ? '#D5CCE5' : '#E8E0F0'} stroke="#C5B8D8" strokeWidth="0.5" />
        ))}
        {[0,50,100,150,200,250,300,350].map((x, i) => (
          <rect key={`b${i}`} x={x} y="170" width="48" height="28" rx="2" fill={i % 2 !== 0 ? '#D5CCE5' : '#E8E0F0'} stroke="#C5B8D8" strokeWidth="0.5" />
        ))}
        {/* Bottle 1 - Bleach */}
        <rect x="100" y="85" width="30" height="55" rx="4" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
        <rect x="107" y="78" width="16" height="12" rx="3" fill="#E0E0E0" />
        <rect x="105" y="100" width="20" height="15" rx="2" fill="#AB47BC" opacity="0.8" />
        <text x="115" y="111" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">LEJ</text>
        {/* Bottle 2 - Acid (yellow) */}
        <rect x="160" y="90" width="28" height="50" rx="4" fill="#FFF9C4" stroke="#F9A825" strokeWidth="1" />
        <rect x="166" y="83" width="16" height="12" rx="3" fill="#F9A825" />
        <polygon points="174,102 180,115 168,115" fill="#F44336" opacity="0.7" />
        <text x="174" y="113" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">!</text>
        {/* Bottle 3 - Blue cleaner */}
        <rect x="230" y="88" width="26" height="52" rx="4" fill="#BBDEFB" stroke="#64B5F6" strokeWidth="1" />
        <rect x="236" y="80" width="14" height="14" rx="7" fill="#42A5F5" />
        {/* Toxic fumes */}
        <path d="M120 80 Q125 65 118 50" stroke="#AB47BC" strokeWidth="2" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M175 80 Q180 62 172 45" stroke="#F9A825" strokeWidth="2" fill="none" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2.3s" repeatCount="indefinite" />
        </path>
        <path d="M145 75 Q150 55 142 38" stroke="#CE93D8" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1.8s" repeatCount="indefinite" />
        </path>
        {/* Warning skull */}
        <circle cx="310" cy="60" r="20" fill="#FFF3E0" stroke="#FF7043" strokeWidth="2" />
        <text x="310" y="68" textAnchor="middle" fill="#FF7043" fontSize="24" fontWeight="bold">⚠</text>
        {/* Spill on floor */}
        <ellipse cx="150" cy="145" rx="25" ry="6" fill="#CE93D8" opacity="0.2" />
        {/* Sparkles */}
        <circle cx="50" cy="45" r="4" fill="#AB47BC" opacity="0.3">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="35" r="3" fill="#F783AC" opacity="0.4">
          <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    sol_calor: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="400" height="130" fill="#87CEEB" />
        {/* Sun */}
        <circle cx="320" cy="45" r="30" fill="#FFD166">
          <animate attributeName="r" values="30;33;30" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Sun rays */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 320 + Math.cos(rad) * 35;
          const y1 = 45 + Math.sin(rad) * 35;
          const x2 = 320 + Math.cos(rad) * 48;
          const y2 = 45 + Math.sin(rad) * 48;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD166" strokeWidth="3" strokeLinecap="round" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
          </line>;
        })}
        {/* Ocean */}
        <path d="M0 130 Q50 120 100 130 Q150 140 200 130 Q250 120 300 130 Q350 140 400 130 L400 200 L0 200 Z" fill="#4FC3F7" opacity="0.8">
          <animate attributeName="d" values="M0 130 Q50 120 100 130 Q150 140 200 130 Q250 120 300 130 Q350 140 400 130 L400 200 L0 200 Z;M0 130 Q50 140 100 130 Q150 120 200 130 Q250 140 300 130 Q350 120 400 130 L400 200 L0 200 Z;M0 130 Q50 120 100 130 Q150 140 200 130 Q250 120 300 130 Q350 140 400 130 L400 200 L0 200 Z" dur="4s" repeatCount="indefinite" />
        </path>
        {/* Sand */}
        <rect x="0" y="150" width="400" height="50" fill="#FFE0B2" />
        <rect x="0" y="148" width="400" height="6" rx="3" fill="#FFCC80" />
        {/* Umbrella */}
        <line x1="100" y1="70" x2="100" y2="155" stroke="#795548" strokeWidth="3" />
        <path d="M60 75 Q100 40 140 75" fill="#FF7043" />
        <path d="M60 75 Q80 55 100 75" fill="#FF5722" />
        <path d="M100 75 Q120 55 140 75" fill="#FF8A65" />
        {/* Car (hot) */}
        <rect x="260" y="130" width="60" height="25" rx="5" fill="#90A4AE" />
        <rect x="268" y="118" width="44" height="16" rx="4" fill="#B0BEC5" />
        <circle cx="275" cy="158" r="7" fill="#333" />
        <circle cx="305" cy="158" r="7" fill="#333" />
        {/* Heat waves from car */}
        <path d="M275 115 Q280 105 275 95" stroke="#FF6B6B" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M295 112 Q300 102 295 92" stroke="#FF6B6B" strokeWidth="1.5" fill="none" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.1;0.35" dur="1.8s" repeatCount="indefinite" />
        </path>
        {/* Hot sand sparkles */}
        <circle cx="180" cy="165" r="2" fill="#FFD166" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="170" r="2" fill="#FFD166" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {/* Cloud */}
        <ellipse cx="80" cy="35" rx="25" ry="12" fill="white" opacity="0.7" />
        <ellipse cx="95" cy="30" rx="18" ry="10" fill="white" opacity="0.7" />
      </svg>
    ),
    pirotecnia: (
      <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Night sky */}
        <rect x="0" y="0" width="400" height="160" fill="#1A237E" />
        {/* Stars */}
        {[{x:30,y:20},{x:90,y:40},{x:150,y:15},{x:250,y:30},{x:370,y:25},{x:50,y:70},{x:340,y:60},{x:200,y:50}].map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="white" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Firework burst 1 - red/orange */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 120 + Math.cos(rad) * 35;
          const y2 = 60 + Math.sin(rad) * 35;
          return <line key={`f1${i}`} x1={120} y1={60} x2={x2} y2={y2} stroke={i % 2 === 0 ? '#FF8C42' : '#FF6B6B'} strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </line>;
        })}
        <circle cx="120" cy="60" r="4" fill="#FFD166">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {/* Firework burst 2 - purple/pink */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 280 + Math.cos(rad) * 30;
          const y2 = 45 + Math.sin(rad) * 30;
          return <line key={`f2${i}`} x1={280} y1={45} x2={x2} y2={y2} stroke={i % 2 === 0 ? '#CC5DE8' : '#F783AC'} strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
          </line>;
        })}
        <circle cx="280" cy="45" r="3" fill="#F783AC">
          <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
        </circle>
        {/* Firework burst 3 - green/yellow */}
        {[0,60,120,180,240,300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 200 + Math.cos(rad) * 25;
          const y2 = 35 + Math.sin(rad) * 25;
          return <line key={`f3${i}`} x1={200} y1={35} x2={x2} y2={y2} stroke={i % 2 === 0 ? '#51CF66' : '#FFD166'} strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </line>;
        })}
        {/* Ground */}
        <rect x="0" y="155" width="400" height="45" fill="#2E7D32" />
        <rect x="0" y="155" width="400" height="5" fill="#388E3C" />
        {/* Rocket on ground */}
        <rect x="175" y="140" width="8" height="20" rx="2" fill="#F44336" />
        <polygon points="179,135 184,145 174,145" fill="#FF8C42" />
        {/* Sparkler */}
        <line x1="330" y1="130" x2="330" y2="165" stroke="#795548" strokeWidth="2" />
        <circle cx="330" cy="128" r="6" fill="#FFD166" opacity="0.8">
          <animate attributeName="r" values="6;9;6" dur="0.5s" repeatCount="indefinite" />
        </circle>
        {/* Sparkler sparks */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 330 + Math.cos(rad) * 10;
          const y2 = 128 + Math.sin(rad) * 10;
          return <circle key={`sp${i}`} cx={x2} cy={y2} r="1" fill="#FFD166">
            <animate attributeName="opacity" values="1;0;1" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite" />
          </circle>;
        })}
        {/* Falling sparks */}
        <circle cx="100" cy="90" r="2" fill="#FF8C42" opacity="0.6">
          <animate attributeName="cy" values="90;120;90" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="75" r="1.5" fill="#CC5DE8" opacity="0.5">
          <animate attributeName="cy" values="75;110;75" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  };

  return illustrations[category] || illustrations.agua_caliente;
}
