import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next"


function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const languages = [
    { code: "en", name: t('common.languages.en'), flag: "🇺🇸" },
    { code: "pl", name: t('common.languages.pl'), flag: "🇵🇱" },
    { code: "ru", name: t('common.languages.ru'), flag: "🇷🇺" },
  ];
  const activeLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {activeLanguage ? `${activeLanguage.flag} ${activeLanguage.name}` : t('common.language')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('common.language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={i18n.language} onValueChange={i18n.changeLanguage}>
          {languages.map(lang => (
            <DropdownMenuRadioItem value={lang.code}>{`${lang.flag} - ${lang.name}`}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { LanguageSwitcher }