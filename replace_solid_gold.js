const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(
  /\.project-info \{\n  padding: 2rem;\n  background-color: rgba\(209, 154, 0, 0\.08\);\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n\}/g,
  `.project-info {\n  padding: 2rem;\n  background-color: var(--primary);\n  color: var(--btn-primary-text);\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}`
);

// We need to adjust text colors inside for dark/light mode so they contrast well with the solid gold background
css = css.replace(
  /\.project-info p \{\n  color: var\(--text-muted\);\n  font-size: 0\.9rem;\n  margin-bottom: 1\.5rem;\n  line-height: 1\.6;\n  text-align: justify;\n\}/g,
  `.project-info p {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n  text-align: justify;\n}`
);

css = css.replace(
  /\.project-links a \{\n  color: var\(--text-muted\);\n  font-size: 0\.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0\.4rem;\n\}/g,
  `.project-links a {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n}`
);

css = css.replace(
  /\.project-links a:hover \{\n  color: var\(--primary\);\n\}/g,
  `.project-links a:hover {\n  color: #000;\n}`
);

css = css.replace(
  /\[data-theme="light"\] \.project-info,\n\.light-mode \.project-info \{\n  background-color: rgba\(209, 154, 0, 0\.2\);\n\}/g,
  `[data-theme="light"] .project-info,\n.light-mode .project-info {\n  background-color: var(--primary);\n}`
);

fs.writeFileSync('style.css', css);
