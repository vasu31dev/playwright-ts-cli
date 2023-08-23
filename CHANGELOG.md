## [0.3.2] - 2023-08-23

### Updated

- Improved Readme doc with pre-requisites, better installation steps and proper explanation

## [0.3.1] - 2023-08-22

### Fixed

- Removed postinstall script

## [0.3.0] - 2023-08-22

### Added

- Introduced `.prettierrc` and applied formatting to TypeScript files.
- Enhanced console logging for better readability.
- Logic to initialize as a Git repository only if neither the current nor parent directory is a Git repository.
- Resolution for Git warning related to the initial branch name.

### Fixed

- Fixed git warning related to the initial branch name.

## [0.2.2] - 2023-08-22

### Changed

- Modified the cloning structure of `vasu-playwright-template` to align with `vasu-playwright-lib@0.4.4` version.

## [0.2.1] - 2023-08-21

### Fixed

- Resolved "Cannot find Module" error occurring during project initialization.

## [0.2.0] - 2023-08-21

### Added

- Replaced `esbuild` with `tsc` for building the project.
- Switched from SSH to HTTPS for cloning the repository.
- Implemented logic to remove `temp-repo` directory if present in the project.
- Set the default Git branch name to "main."
- Updated ReadMe Document.

## [0.1.0] - 2023-08-20

### Added

- Initial release.
