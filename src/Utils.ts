import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export class Utils {
    public static loadJSON(filename: string) {
        return require(filename);
    }
}
