declare module 'download-git-repo' {
  const download: (
    repository: string,
    destination: string,
    options?: { clone?: boolean },
    callback?: (err?: Error) => void,
  ) => void;
  export = download;
}
