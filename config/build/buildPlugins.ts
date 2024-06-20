import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({mode, paths, analizer}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico')
        }),
        new ForkTsCheckerWebpackPlugin()
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin()
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        );

        plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(paths.public, "locales") , to: path.resolve(paths.output, "locales") },
                ],
            })
        );
    }

    if (analizer) {
        plugins.push(
            new BundleAnalyzerPlugin()
        );
    }

    return plugins;
}
