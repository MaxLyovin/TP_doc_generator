import { LanguageSwitcher } from "./LanguageSwitcher"

export const Navigation = () => {
  return (
    <div className="flex justify-end p-4 border-b">
      <LanguageSwitcher />
    </div>
  );
}