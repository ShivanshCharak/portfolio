import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  {
    // Your custom rules
    rules: {
      "react/no-unescaped-entities": "off", // Disables apostrophe warnings
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" if you want to keep it strict
        { 
          "argsIgnorePattern": "^_", 
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
    },
  },
  {
    // Optional: Apply overrides to specific files
    files: ["src/components/Contact.tsx", "src/components/Journal.tsx"],
    rules: {
      "react/no-unescaped-entities": "off", // Disable for these files only
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars for these files
    },
  },
];