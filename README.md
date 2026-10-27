# Epic Citadel

Epic Games' 2013 Unreal Engine 3 HTML5 demo (asm.js), running again in modern browsers.

**Live:** https://epic-citadel.bold-math-f3f9.workers.dev

## How the files were found

The original files were tracked down by grokbot. The Wayback Machine never archived the May 2013 build's 132 MB data file, so it worked from a few other angles:

- **A hidden CDN folder.** Listing every Wayback capture under `unrealengine.com/html5` showed the page loaded its files from `cdn.unrealengine.com/html5-4c0913f/`. That build's scripts were archived but its data file wasn't. A second, later build folder on the same CDN, `html5-0db2afb`, had its data file captured in February 2022, and it was pulled with Wayback's raw-file mode, which returns the archived bytes untouched.
- **A second copy to confirm it.** An archive.org upload of the HTML5 demo has the same data file, and its checksum matches the Wayback copy exactly.
- **Related sources.** It also pulled the free August 2011 UDK installer from archive.org, which includes the source map `EpicCitadel.udk` and the asset package `Castle_Assets.upk`, plus the Android v1.07 release. These fed a separate Blender rebuild of the level and aren't part of this site.

## Changes from the original

Epic's engine code is untouched. `site_static/js/compat.js` adds small shims for modern browsers:

1. The engine looks for the 2013 extension name `MOZ_WEBGL_compressed_texture_s3tc`, so the shim reports it alongside the modern, unprefixed name.
2. It adds no-op stubs for `AudioListener.setVelocity` and `PannerNode.setVelocity`, which browsers have since removed.
3. Chrome and Safari start loading immediately instead of showing the "unsupported browser" message (`js/warnings.js`), so the shim resumes audio on the first click, tap or key press.

The 132 MB data file is split into six `UDKGame_Data.data.part*` files to fit Cloudflare's 25 MiB per-file limit.

## Deploy

The site is a Cloudflare Worker that only serves static files, deployed with [Alchemy](https://alchemy.run) (`alchemy.run.ts`).

```sh
git lfs install   # the large game files are stored in Git LFS
pnpm install
pnpm exec alchemy deploy alchemy.run.ts --stage prod   # approve the plan when prompted
pnpm run destroy                                        # take the site down
```

## Copyright

The game files and music are Epic Games' copyrighted work. This repo is for preservation and isn't affiliated with Epic.
