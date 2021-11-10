import { createTailwindMerge } from "tailwind-merge"
export const twMerge = createTailwindMerge((getDefaultConfig) => {
  const defaultConfig = getDefaultConfig()

  return {
      cacheSize: 0, // ← Disabling cache
      prefixes: [
          ...defaultConfig.prefixes,
      ],
      // ↓ Here you define class groups
      classGroups: {
          ...defaultConfig.classGroups,
          text: [{ 'text': [12, 13, 14, 16, 17, 18, 20, 24, 28, 32, 36, 40, 48]}],
      },
      // ↓ Here you can define additional conflicts across different groups
      conflictingClassGroups: {
          ...defaultConfig.conflictingClassGroups,
      },
  }
})
