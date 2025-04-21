import { LanguageSwitcher } from "./LanguageSwitcher"

export const Navigation = () => {
  return (
    <div className="flex justify-end py-2 border-b">
      <LanguageSwitcher />
    </div>
  );
}