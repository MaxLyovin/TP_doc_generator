import { LanguageSwitcher } from "./LanguageSwitcher"

export const Navigation = () => {
  return (
    <div className="flex border-b-2 justify-end mb-3 py-2">
      <LanguageSwitcher />
    </div>
  )
}