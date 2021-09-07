declare namespace Process {
    interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string;
        BUNDLE_ANALYZE: string;
    }
}

declare namespace jest {
    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}
