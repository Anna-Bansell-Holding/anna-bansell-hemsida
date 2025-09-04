
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Crimson Text', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Inter', 'system-ui', 'sans-serif'], // For headings
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5' }],
				'sm': ['0.875rem', { lineHeight: '1.6' }],
				'base': ['1rem', { lineHeight: '1.7' }],
				'lg': ['1.125rem', { lineHeight: '1.7' }],
				'xl': ['1.25rem', { lineHeight: '1.6' }],
				'2xl': ['1.5rem', { lineHeight: '1.5' }],
				'3xl': ['1.875rem', { lineHeight: '1.4' }],
				'4xl': ['2.25rem', { lineHeight: '1.3' }],
				'5xl': ['3rem', { lineHeight: '1.2' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
			},
			spacing: {
				'18': '4.5rem',   // 72px
				'20': '5rem',     // 80px
				'24': '6rem',     // 96px
				'28': '7rem',     // 112px
				'32': '8rem',     // 128px
				'36': '9rem',     // 144px
				'40': '10rem',    // 160px
				'44': '11rem',    // 176px
				'48': '12rem',    // 192px
				'52': '13rem',    // 208px
				'56': '14rem',    // 224px
				'60': '15rem',    // 240px
				'64': '16rem',    // 256px
				'72': '18rem',    // 288px
				'80': '20rem',    // 320px
				'96': '24rem',    // 384px
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Fibery-inspired professional SaaS color system
				gray: {
					50: '#fafbfc',   // Ultra light background
					100: '#f4f6f8',  // Light background  
					200: '#e6eaed',  // Subtle borders
					300: '#d0d7de',  // Medium borders
					400: '#9da7b1',  // Muted text
					500: '#6c7781',  // Secondary text
					600: '#4a5568',  // Primary text
					700: '#2d3748',  // Strong text
					800: '#1a202c',  // Headings
					900: '#171923',  // Maximum contrast
				},
				blue: {
					50: '#f0f9ff',   // Very light blue
					100: '#e0f2fe',  // Light blue bg
					200: '#bae6fd',  // Soft blue
					300: '#7dd3fc',  // Medium blue
					400: '#38bdf8',  // Bright blue
					500: '#0ea5e9',  // Primary blue
					600: '#0284c7',  // Dark blue
					700: '#0369a1',  // Darker blue
					800: '#075985',  // Very dark blue
					900: '#0c4a6e',  // Maximum blue
				},
				purple: {
					50: '#faf5ff',   // Very light purple
					100: '#f3e8ff',  // Light purple
					500: '#8b5cf6',  // Medium purple for accents
					600: '#7c3aed',  // Darker purple
				},
				green: {
					50: '#f0fdf4',   // Success background
					500: '#22c55e',  // Success color
					600: '#16a34a',  // Darker success
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
