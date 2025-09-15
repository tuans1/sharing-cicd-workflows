import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "no-unused-vars": "error", // ⚡ bật lỗi cho biến không dùng
      semi: ["error", "always"], // ví dụ thêm semi bắt buộc dấu ;
      "no-console": "warn", // ví dụ console.log sẽ chỉ báo warning
    },
  },
];

export default eslintConfig;

