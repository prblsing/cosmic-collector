const fs = require('fs');

// Load environment variables (GitHub Secrets will be passed via GitHub Actions)
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Read the index.html template
let html = fs.readFileSync('index.html', 'utf8');

// Inject Firebase config into the script
const configString = `let firebaseConfig = ${JSON.stringify(firebaseConfig, null, 2)};`;
html = html.replace('let firebaseConfig = {apiKey: "", authDomain: "", projectId: "", storageBucket: "", messagingSenderId: "", appId: "", measurementId: ""};', configString);

// Create a dist directory and save the built file
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
fs.writeFileSync('dist/index.html', html, 'utf8');

console.log('Built successfully with Firebase config injected.');
