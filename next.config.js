const path = require('path');
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
module.exports = withOptimizedImages({
  // General Next.js config here...
  images: {
    disableStaticImages: true, // so that NextJS doesn't clash with next-optimized-images
  },
  reactStrictMode: true,
  sassOptions: {
    // IncludePaths let's us directly @import 'mixins'; or @import 'variables'; anywhere without specifying full path
    includePaths: [path.join(__dirname, 'src/styles')],
  },
});
