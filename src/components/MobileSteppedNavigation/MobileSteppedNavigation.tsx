import { useTranslation } from 'react-i18next';
import { ChevronLeft, Menu } from 'lucide-react';
import { useState } from 'react';

import { useStepper } from '@/state/hooks/useStepper';
import { TranslationKey } from '@/@types/i18next';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type MobileSteppedNavigationProps = {
  steps: TranslationKey[];
};

export const MobileSteppedNavigation = ({ steps }: MobileSteppedNavigationProps) => {
  const { activeStep, setActiveStep, goToNextStep, goToPreviousStep } = useStepper();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stepsAmountWithoutIntroduction = steps.length - 1;
  const progress = (activeStep * 100) / stepsAmountWithoutIntroduction;

  return (
    <>
      {/* Верхняя панель навигации */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b p-4 md:hidden z-50">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>

          <div className="text-center">
            <p className="text-sm font-medium">{t(steps[activeStep])}</p>
            <p className="text-xs text-gray-500">
              Шаг {activeStep}/{stepsAmountWithoutIntroduction}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNextStep}
            disabled={activeStep === stepsAmountWithoutIntroduction}
          >
            <ChevronLeft className="h-5 w-5 rotate-180" />
          </Button>
        </div>

        <div className="mb-4">
          <Progress value={progress} className="h-1" />
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Шаги</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === activeStep
                      ? 'bg-primary text-white'
                      : index < activeStep
                        ? 'bg-primary/50 text-white'
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index}
                </div>
                <button
                  onClick={() => {
                    setActiveStep(index);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left ${index === activeStep ? 'font-semibold' : ''}`}
                >
                  {t(step)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
