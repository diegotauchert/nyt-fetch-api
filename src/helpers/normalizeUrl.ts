export function normalizeUrl(url:string) {
    return url.replaceAll(/\s/g, '-').replaceAll(',', '-').replaceAll('.', '').replaceAll(/[’"]+/g, '').toLowerCase();
}

export function encodePipe(url:string) {
    return url.replaceAll('/', '|');
}

export function decodePipe(url:string) {
    return url.replaceAll('|', '/');
}

export function normalizeId(id:string) {
    return id.replace('nyt://article/', '').replace('nyt://interactive/', '');
}

export function generateApiId(id:string | number) {
    return `nyt://article/${id}`;
}