export interface Beat {
    name: string;
    attributes: string[];
    filePath: string;
    date: string;
    bpm?: number;
    key?: string
}