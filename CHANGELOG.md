# Changelog

All notable changes to this project will be documented in this file.

## 1.1.0

- Added the `SETPICTUREID` notification. It changes the picture of a module with an `id` without a restart. The payload is the URL, or an object with `url` and optional `opacity`, `maxWidth` and `maxHeight`.
- An empty `url` shows no picture.
- The cache-busting timestamp now also works for URLs that already have a `?`.

## Unreleased (before 1.1.0)

- Updated project metadata and documentation to use current MagicMirror² naming and links.
- Added maintenance files for linting and automated dependency checks.
