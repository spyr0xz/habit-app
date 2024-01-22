import webpack from "webpack";
import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";




export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: "./src/index.tsx",
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  
  const mode = env.mode ||'development';
  const isDev = mode === 'development'
  const PORT = env.port || 3000;
  

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: paths,
    isDev,
    port: PORT,
  });
  return config
}

