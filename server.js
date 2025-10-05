#!/usr/bin/env node

// Root server.js - Entry point for deployment
// This file imports the actual server from the server folder

const path = require('path');

// Try to load the compiled server
try {
  const serverPath = path.join(__dirname, 'server', 'dist', 'server.js');
  console.log('Loading server from:', serverPath);
  require(serverPath);
} catch (error) {
  console.error('Error loading server:', error.message);
  console.log('Falling back to JavaScript server...');
  
  // Fallback to the JavaScript server
  try {
    require('./server/server.js');
  } catch (fallbackError) {
    console.error('Fallback server also failed:', fallbackError.message);
    process.exit(1);
  }
}
