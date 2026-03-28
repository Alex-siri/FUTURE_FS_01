const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(
  /\.project-info \{\n  padding: 2rem;\n\}/g,
  `.project-info {\n  padding: 2rem;\n  background-color: rgba(209, 154, 0, 0.08);\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}`
);

// Check if light mode project info exists, if not append to the bottom
if (!css.includes('.light-mode .project-info')) {
  css += `\n\n[data-theme="light"] .project-info,\n.light-mode .project-info {\n  background-color: rgba(209, 154, 0, 0.2);\n}\n`;
}

fs.writeFileSync('style.css', css);
