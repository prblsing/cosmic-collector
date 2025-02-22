const fs = require('fs');

// Read the index.html template (no Firebase config needed)
let html = fs.readFileSync('index.html', 'utf8');

// Create a dist directory and save the built file
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
fs.writeFileSync('dist/index.html', html, 'utf8');

console.log('Built successfully without Firebase config.');
