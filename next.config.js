import path from 'path';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    // IncludePaths let's us directly @import 'mixins'; or @import 'variables'; anywhere without specifying full path
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};
