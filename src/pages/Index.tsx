import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('characters');

  const characters = [
    {
      name: 'Shadowheart',
      class: 'Клирик',
      race: 'Полуэльф',
      description: 'Таинственная последовательница Шар, богини тьмы и утраты. Хранит древние секреты и несёт священный артефакт.',
      abilities: ['Божественная магия', 'Исцеление', 'Тёмные ритуалы'],
      alignment: 'Законно-нейтральная'
    },
    {
      name: 'Astarion',
      class: 'Плут',
      race: 'Эльф-вампир',
      description: 'Харизматичный вампир, порабощённый своим создателем веками. Ищет свободу и месть.',
      abilities: ['Скрытность', 'Укус вампира', 'Обаяние'],
      alignment: 'Хаотично-нейтральный'
    },
    {
      name: 'Gale',
      class: 'Волшебник',
      race: 'Человек',
      description: 'Талантливый маг из Вотердипа, проклятый магической бомбой в груди. Бывший возлюбленный богини магии.',
      abilities: ['Магия плетения', 'Порталы', 'Взрывная магия'],
      alignment: 'Нейтрально-добрый'
    },
    {
      name: 'Lae\'zel',
      class: 'Воин',
      race: 'Гитьянки',
      description: 'Свирепая воительница гитьянки, обученная сражаться с иллитидами. Фанатично предана своей королеве.',
      abilities: ['Мастер клинка', 'Псионика', 'Боевая тактика'],
      alignment: 'Законно-злая'
    },
    {
      name: 'Wyll',
      class: 'Колдун',
      race: 'Человек',
      description: 'Благородный Клинок Границ, заключивший пакт с дьяволицей. Защитник невинных, проклятый рогами.',
      abilities: ['Тёмная магия', 'Эльдрическая энергия', 'Фехтование'],
      alignment: 'Законно-добрый'
    },
    {
      name: 'Karlach',
      class: 'Варвар',
      race: 'Тифлинг',
      description: 'Воительница с инфернальным двигателем вместо сердца. Бывший солдат Аверна, ищущая искупления.',
      abilities: ['Ярость', 'Инфернальная мощь', 'Боевой дух'],
      alignment: 'Хаотично-добрая'
    }
  ];

  const locations = [
    {
      name: 'Побережье Меча',
      region: 'Фаэрун',
      description: 'Место крушения наутилоида. Здесь начинается ваше приключение среди обломков и древних руин.',
      dangers: ['Выжившие иллитиды', 'Гоблины', 'Зомби'],
      secrets: 'Древний храм Джергала скрыт под руинами'
    },
    {
      name: 'Роща Друидов',
      region: 'Изумрудная Роща',
      description: 'Священное место друидов, защищающих портал в Подземье. Конфликт между друидами и беженцами-тифлингами.',
      dangers: ['Враждебные друиды', 'Гоблины', 'Магические ловушки'],
      secrets: 'Секретная библиотека с забытыми ритуалами'
    },
    {
      name: 'Лагерь Гоблинов',
      region: 'Разрушенная Крепость',
      description: 'Древняя крепость Селуне, захваченная армией Абсолюта. Логово трёх верных Абсолюту.',
      dangers: ['Армия гоблинов', 'Дроу-жрица', 'Огры'],
      secrets: 'Подземелье с пленниками и артефактами'
    },
    {
      name: 'Подземье',
      region: 'Глубины под Фаэруном',
      description: 'Огромная сеть пещер и туннелей, населённая дроу, дуэргарами и грибными существами.',
      dangers: ['Дроу Мензоберранзана', 'Крюкастые ужасы', 'Взрывоопасные грибы'],
      secrets: 'Древний город Гримхолл и пути в Проклятые Земли'
    },
    {
      name: 'Проклятые Земли',
      region: 'Тень над Фаэруном',
      description: 'Земли, проклятые Шар. Вечная тьма поглотила эти места, убивая всё живое.',
      dangers: ['Тени-нежить', 'Культ Абсолюта', 'Магическая тьма'],
      secrets: 'Башня Лунного Восхода и тюрьма бога'
    },
    {
      name: 'Врата Балдура',
      region: 'Город Врат',
      description: 'Величайший город Побережья Меча. Коррупция и заговоры плетутся в тени великолепных дворцов.',
      dangers: ['Культ Бхаала', 'Стальная Стража', 'Гильдия воров'],
      secrets: 'Подземная крепость Бхаала и планы мертвой тройки'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
              BALDUR'S GATE III
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Энциклопедия Забытых Королевств
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 bg-primary/10">
                <Icon name="Sword" className="mr-2 h-4 w-4" />
                Приключения
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2 border-secondary/50 bg-secondary/10">
                <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                Магия
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2 border-accent/50 bg-accent/10">
                <Icon name="Skull" className="mr-2 h-4 w-4" />
                Опасности
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="characters" className="w-full" onValueChange={setActiveSection}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 h-auto p-2 bg-card/50 backdrop-blur-sm">
              <TabsTrigger 
                value="characters" 
                className="text-lg py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Персонажи
              </TabsTrigger>
              <TabsTrigger 
                value="locations" 
                className="text-lg py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <Icon name="Map" className="mr-2 h-5 w-5" />
                Локации
              </TabsTrigger>
            </TabsList>

            <TabsContent value="characters" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map((character, index) => (
                  <Card 
                    key={index} 
                    className="group hover:scale-[1.02] transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {character.name}
                        </CardTitle>
                        <Icon name="Shield" className="h-6 w-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {character.class}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">
                          {character.race}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm mt-2 text-muted-foreground">
                        {character.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-2 flex items-center">
                            <Icon name="Zap" className="mr-2 h-4 w-4" />
                            Способности:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {character.abilities.map((ability, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-primary/5">
                                {ability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border/30">
                          <p className="text-xs text-muted-foreground flex items-center">
                            <Icon name="Scale" className="mr-2 h-3 w-3" />
                            {character.alignment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locations" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <Card 
                    key={index} 
                    className="group hover:scale-[1.02] transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-2xl group-hover:text-secondary transition-colors gold-glow">
                          {location.name}
                        </CardTitle>
                        <Icon name="MapPin" className="h-6 w-6 text-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs mb-3">
                        {location.region}
                      </Badge>
                      <CardDescription className="text-sm text-muted-foreground">
                        {location.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-accent mb-2 flex items-center">
                            <Icon name="Skull" className="mr-2 h-4 w-4" />
                            Опасности:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {location.dangers.map((danger, i) => (
                              <Badge key={i} variant="destructive" className="text-xs bg-accent/20 hover:bg-accent/30">
                                {danger}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border/30">
                          <p className="text-sm font-semibold text-primary mb-1 flex items-center">
                            <Icon name="Eye" className="mr-2 h-4 w-4" />
                            Секреты:
                          </p>
                          <p className="text-xs text-muted-foreground italic">
                            {location.secrets}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-20">
        <Card className="bg-card/90 backdrop-blur-sm border-primary/30 magic-glow animate-pulse-glow">
          <CardContent className="p-4 flex items-center gap-3">
            <Icon name="Sparkles" className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Магия Плетения активна</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
