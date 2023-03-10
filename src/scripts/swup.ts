// @ts-ignore
import Swup from "swup";

// @ts-ignore
import SwupBodyClassPlugin from "@swup/body-class-plugin";
// @ts-ignore
import SwupHeadPlugin from "@swup/head-plugin";
// @ts-ignore
import SwupPreloadPlugin from "@swup/preload-plugin";
// @ts-ignore
import SwupScrollPlugin from "@swup/scroll-plugin";

new Swup({
	// TODO: Put in block-editor
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new SwupHeadPlugin(),
		new SwupPreloadPlugin(),
		new SwupScrollPlugin(),
		new SwupBodyClassPlugin(),
	],
});
