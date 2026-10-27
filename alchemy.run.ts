import * as Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";

// Epic Citadel (2013 UE3 asm.js HTML5 demo), assets-only static Worker.
export default Alchemy.Stack("EpicCitadel", {
  providers: Cloudflare.providers(), state: Cloudflare.state(),
}, Effect.gen(function* () {
  const site = yield* Cloudflare.Worker("Site", {
    name: "epic-citadel",
    compatibility: { date: "2026-10-26" },
    workersDev: { enabled: true, previewsEnabled: false },
    assets: { directory: "./site_static" },
  });
  return { url: site.url };
}));
