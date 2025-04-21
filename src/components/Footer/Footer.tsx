import { useTranslation } from 'react-i18next';
import { GithubIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="hidden md:block bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-sm text-gray-500">© 2024 Генератор документов. Все права защищены.</div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              О проекте
            </Button>
            <Button variant="ghost" size="sm">
              Контакты
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
