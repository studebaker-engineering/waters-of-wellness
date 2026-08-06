// Works around a known upstream hang: react-router's SPA-mode prerender
// build never exits on its own after finishing (unclosed handle in the
// preview-server round-trip it uses to generate build/client/index.html).
// See https://github.com/remix-run/react-router/issues/13053
import { spawn } from "node:child_process";

const child = spawn("vite", ["build"]);

let sawSuccess = false;

const onOutput = (chunk) => {
	if (chunk.toString().includes("SPA Mode: Generated")) sawSuccess = true;
};
child.stdout.on("data", (chunk) => {
	process.stdout.write(chunk);
	onOutput(chunk);
});
child.stderr.on("data", (chunk) => process.stderr.write(chunk));

const timer = setTimeout(() => {
	child.kill("SIGTERM");
}, 8_000);

child.on("exit", (code, signal) => {
	clearTimeout(timer);
	if (signal) {
		process.exit(sawSuccess ? 0 : 1);
		return;
	}
	process.exit(code ?? 0);
});
