import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, FileText, Globe, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const Landing = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Автоматическое заполнение',
      description: 'Автоматическое заполнение всех необходимых полей в документах',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Безопасность данных',
      description: 'Ваши данные надежно защищены и хранятся в соответствии с GDPR',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Многоязычный интерфейс',
      description: 'Поддержка нескольких языков для удобства пользователей',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Поддержка семьи',
      description: 'Возможность добавления членов семьи в заявление',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Помощь в заполнении документов для иностранцев в Польше
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Автоматическое заполнение и генерация документов для министерства. Быстро, просто и надежно.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/form">
                  Начать заполнение
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                'Зарегистрируйтесь в системе',
                'Заполните необходимые данные',
                'Проверьте и подтвердите информацию',
                'Скачайте готовые документы',
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full p-2">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Шаг {index + 1}</h3>
                    <p className="text-gray-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Начните заполнение документов прямо сейчас и сэкономьте свое время
            </p>
            <Button size="lg" asChild>
              <Link to="/form">
                Начать заполнение
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
