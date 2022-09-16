export interface ResponseAPI {
    results: Result[];
}

export interface Result {
    id: string;
    description: null | string;
    alt_description: null | string;
    urls: Urls;
    likes: number;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

