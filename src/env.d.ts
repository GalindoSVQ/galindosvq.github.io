/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GOOGLE_MEASUREMENT_ID: string;
  readonly GOOGLE_MEASUREMENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
