const fs = require("fs");
const path = require("path");
const pp = s => path.join(__dirname, s);

/**
 * Remove *.map filenames from asset-manifest JSON
 */
function fixAssetManifest() {
	const filename = pp("build/asset-manifest.json");
	const manifest = JSON.parse(fs.readFileSync(filename, "utf8"));
	delete manifest["main.js.map"];
	delete manifest["main.css.map"];
	fs.writeFileSync(filename, JSON.stringify(manifest, null, 2));
	console.log("Fixed asset-manifest.json - done.")
}

/** 
 * Inline CSS and Move the main.js <script> to the start of <body>
 */
function run() {

	if (fs.existsSync(pp("build"))) {
		fixAssetManifest();

		const htmlFilename = pp("build/index.html");

		const htmlContent = fs.readFileSync(htmlFilename, "utf8");
		const matchJs = htmlContent.match(/<script[^<>]+src=['"]\/static\/js\/main\S+.js['"][^<>]*><\/script>/g);
		const matchCss = htmlContent.match(/<link[^<>]+href=['"](\/static\/css\/main\S+.css)['"][^<>]*>/);
		if (matchJs == null || matchCss == null) {
			throw new Error("No matches");
		}
		//console.log(matchCss, matchJs);

		// Load CSS
		const cssFilename = pp("build" + matchCss[1]);
		const rawCssContent = fs.readFileSync(cssFilename, "utf8");
		const sourceMapSub = rawCssContent.match(/\n\/\*# sourceMapping[^\*]*\*\//g);
		const cssContent = rawCssContent.replace(sourceMapSub, "");

		// Inline CSS and move JS to the start of <body>
		const resultHtml = htmlContent.replace(matchJs[0], "")
			.replace(matchCss[0], `<style>${cssContent}</style>`)
			.replace("<body>", "<body>" + matchJs[0]);

		// Save changes (overwrite)
		fs.writeFileSync(htmlFilename, resultHtml);
		console.log("Afterbuild.js done");
	} else {
		throw new Error("No build folder");
	}
}

run();
