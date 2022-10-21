export interface Beat {
    name: string;
    attributes: string[];
    filePath: string;
    bpm?: number;
    key?: string
    date?: string;
}