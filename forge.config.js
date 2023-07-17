const package = require('./package.json'); // Add this line to import the package.json file

module.exports = {
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "linux", "win32"],
    },
    {
      name: "@electron-forge/maker-deb",
      platforms: ["linux"],
      config: {
        options: {
          bin: "electron-apps",
          name: "electron-apps",
          maintainer: "Muhammad Abdur Rofi Maulidin",
          homepage: "https://github.com/mrofisr/electron-apps",
          productName: "electron-apps",
          description: "electron-apps",
          productDescription: "electron-apps",
          version: package.version, // Use package.version to access the version from package.json
        },
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-squirrel",
      platforms: ["win32"],
      config: (arch) => {
        return {
          name: "electron-apps",
          authors: "Muhammad Abdur Rofi Maulidin",
          exe: "electron-apps.exe",
          noMsi: true,
          remoteReleases: "",
          setupExe: `electron-apps-${package.version}-setup-${arch}.exe`,
        };
      },
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "mrofisr",
          name: "electron-apps",
        },
        draft: true,
        prerelease: true,
      },
    },
  ],
};
