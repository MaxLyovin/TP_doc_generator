
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";


const Navigation = () => {
  const { changeLanguage, currentLanguage, languages } = useLanguageSwitcher()

  return (
    <div className="flex justify-between border-b pb-4 mb-4">

      <div className="flex">
        <Button variant='link' >Główna</Button>
        <Button variant='link' >Kontakt</Button>
      </div>

      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              {languages.find((lang) => lang.code === currentLanguage)?.flag} -
              {languages.find((lang) => lang.code === currentLanguage)?.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center gap-2 cursor-pointer hover:border-none"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { Navigation };