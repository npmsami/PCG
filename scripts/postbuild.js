const fs = require('fs-extra');
const path = require('path');

// Define paths
const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');

// Function to copy necessary files
async function copyFiles() {
  try {
    // Ensure the output directory exists
    await fs.ensureDir(outDir);
    
    // Copy _redirects from public to out directory
    if (fs.existsSync(path.join(publicDir, '_redirects'))) {
      await fs.copy(
        path.join(publicDir, '_redirects'),
        path.join(outDir, '_redirects')
      );
      console.log('✅ _redirects file copied successfully');
    } else {
      console.log('⚠️ _redirects file not found in public directory');
    }

    console.log('📦 Post-build processing completed');
  } catch (err) {
    console.error('❌ Error during post-build processing:', err);
    process.exit(1);
  }
}

// Run the copy function
copyFiles();
