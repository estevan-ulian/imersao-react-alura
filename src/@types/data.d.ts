export interface ConfigProps {
    name: string,
    job: string,
    github: string,
    playlists: PlaylistProps
}

export interface PlaylistsProps {
    jogos: Video[],
    frontend: Video[],
    backend: Video[],
}

export type Video = {
    title: string,
    url: string,
    thumb: string
}