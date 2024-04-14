import {
  typescript,
  css,
  devServer,
  plugins,
  modules,
  vite,
  dir,
  srcDir,
  buildDir,
  alias,
  app
} from './config/nuxt';
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  devtools: {enabled: true},
  app,
  srcDir,
  buildDir,
  dir,
  typescript,
  devServer,
  modules,
  plugins,
  vite,
  css,
  alias
});
