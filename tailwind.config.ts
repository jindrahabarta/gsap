import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                rowdies: [`var(--font-rowdies)`],
                roboto: ['var(--font-roboto)'],
            },
            colors: {
                darkBlue: '#10f',
                lightGreen: '#15e499',
                yellow: '#ffec00',
                purple: '#d478ff',
                grayCustom1: '#2E3135',
                grayCustom2: '#242629',
                orangeCustom1: '#DC5F00',
                whiteishCustom1: '#EEEEEE',
            },
        },
    },
    plugins: [require('@designbycode/tailwindcss-text-stroke')],
}
export default config
