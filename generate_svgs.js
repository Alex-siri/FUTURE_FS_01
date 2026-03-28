const fs = require('fs');
const path = require('path');

const svgs = {
  'feature-1': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g stroke="#10b981" stroke-width="2" fill="none"><path d="M20,50 L80,50 M20,100 L120,100 M20,150 L60,150" stroke-linecap="round"/><path d="M150,30 L180,60 L150,90 M150,110 L180,140 L150,170"/></g></svg>`,
  'feature-2': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.08"><circle cx="100" cy="100" r="80" stroke="#ec4899" stroke-width="4" fill="none" stroke-dasharray="10 20"/><circle cx="100" cy="100" r="50" stroke="#8b5cf6" stroke-width="4" fill="none" stroke-dasharray="20 10"/><circle cx="100" cy="100" r="20" fill="#f43f5e"/></svg>`,
  'feature-3': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g fill="none" stroke="#f97316" stroke-width="3"><path d="M0,200 L50,150 L100,180 L200,80 M150,80 L200,80 L200,130 M0,150 L30,120 L80,150 L180,50 M130,50 L180,50 L180,100" /></g></svg>`,
  'skill-1': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.08"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="none" stroke="#e34c26" stroke-width="1"/><rect x="10" y="10" width="20" height="20" fill="#e34c26" opacity="0.2"/></pattern><rect width="200" height="200" fill="url(#grid)"/></svg>`,
  'skill-2': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><path d="M0,50 Q50,0 100,50 T200,50 M0,100 Q50,50 100,100 T200,100 M0,150 Q50,100 100,150 T200,150" fill="none" stroke="#38bdf8" stroke-width="4"/></svg>`,
  'skill-3': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g fill="#f7df1e"><circle cx="50" cy="50" r="10"/><circle cx="150" cy="80" r="15"/><circle cx="80" cy="150" r="12"/><path d="M50,50 L150,80 L80,150 Z" stroke="#f7df1e" stroke-width="2" fill="none"/></g></svg>`,
  'skill-4': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g stroke="#61dafb" stroke-width="4" fill="none" transform="translate(100,100)"><ellipse rx="60" ry="20" transform="rotate(30)"/><ellipse rx="60" ry="20" transform="rotate(90)"/><ellipse rx="60" ry="20" transform="rotate(150)"/><circle r="8" fill="#61dafb"/></g></svg>`,
  'skill-5': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g fill="none" stroke="#3776ab" stroke-width="15" stroke-linecap="round"><path d="M50,100 Q50,50 100,50 Q150,50 150,100 M150,100 Q150,150 100,150 M100,150 Q50,150 50,100" stroke-dasharray="20 40"/></g></svg>`,
  'skill-6': `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" opacity="0.1"><g stroke="#8b5cf6" stroke-width="2" fill="none"><path d="M50,50 L150,50 L100,20 Z" fill="rgba(139,92,246,0.2)"/><path d="M50,100 L150,100 L100,70 Z" fill="rgba(139,92,246,0.2)"/><path d="M50,150 L150,150 L100,120 Z" fill="rgba(139,92,246,0.2)"/><line x1="100" y1="20" x2="100" y2="150" stroke-dasharray="5 5"/></g></svg>`
};

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(__dirname, 'assets', 'bg', `${name}.svg`), content);
}
console.log('SVGs created successfully!');
