import { Fraunces, Geist, Geist_Mono, Inter, Newsreader } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', preload: false });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap', preload: false });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap', preload: false });

export const fontVariables = [geist, geistMono, inter, fraunces, newsreader]
    .map((font) => font.variable)
    .join(' ');