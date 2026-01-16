/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // Add your environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
