export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    colors: ['blue', 'red', 'green', 'yellow', 'purple', 'orange'], // Available colors
    strategy: 'merge',

    // Default component settings
    button: {
      default: {
        color: 'primary',
        variant: 'solid',
        size: 'md',
        loadingIcon: 'i-heroicons-arrow-path-20-solid'
      }
    },

    input: {
      default: {
        size: 'md',
        color: 'primary'
      }
    },

    container: {
      constrained: 'max-w-5xl'
    },

    notification: {
      default: {
        color: 'primary',
        closeButton: {
          icon: 'i-heroicons-x-mark-20-solid'
        }
      }
    },

    // Tailwind Merge Configuration
    tailwindMerge: {
      extend: {
        classGroups: {
          'font-size': ['text-10xl']
        }
      }
    }
  }
}) 