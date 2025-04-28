import { definePreset } from '@primeng/themes';  
import Aura from '@primeng/themes/aura';  

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#ffcccc',
            100: '#ff9999',
            200: '#ff6666',
            300: '#ff3333',
            400: '#ff0000',
            500: '#cc0000',
            600: '#990000',
            700: '#660000',
            800: '#330000',
            900: '#1a0000',
            950: '#0d0000'
        },
        secondary: {
            50: '#f1f1f1',
            100: '#dcdcdc',
            200: '#c0c0c0',
            300: '#a5a5a5',
            400: '#808080',
            500: '#595959',
            600: '#404040',
            700: '#262626',
            800: '#1a1a1a',
            900: '#000000',
            950: '#000000'
        },
        colorScheme: {
            surface: {
                0: '#ffffff',
                50: '#f5f5f5',
                100: '#e0e0e0',
                200: '#cccccc',
                300: '#b3b3b3',
                400: '#999999',
                500: '#808080',
                600: '#666666',
                700: '#4d4d4d',
                800: '#333333',
                900: '#1a1a1a',
                950: '#000000'
            },
            formField: {
                hoverBorderColor: '{primary.color}',
                background: '#ffffff'
            }
        },
        focusRing: {
            width: '2px',
            style: 'dashed',
            color: '{primary.400}',
            offset: '1px'
        }
    },
    components: {
        card: {
            colorScheme: {
                root: {
                    background: '{surface.0}',
                    color: '{surface.700}'
                },
                subtitle: {
                    color: '{surface.500}'
                }
            }
        },
        // Add p-button here if needed
    }
});

export default MyPreset;
