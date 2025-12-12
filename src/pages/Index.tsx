import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const spells = [
    {
      name: 'Светящийся заряд',
      type: 'Снаряд',
      damage: '10',
      mana: 5,
      description: 'Базовый магический снаряд, испускающий яркий свет',
      modifiers: ['Урон магией', 'Освещение'],
      color: 'primary'
    },
    {
      name: 'Огненный шар',
      type: 'Взрывной',
      damage: '35',
      mana: 20,
      description: 'Взрывной снаряд, поджигающий окружение',
      modifiers: ['Взрыв', 'Огонь', 'Поджог'],
      color: 'destructive'
    },
    {
      name: 'Чёрная дыра',
      type: 'Гравитация',
      damage: '250',
      mana: 150,
      description: 'Создаёт гравитационную воронку, затягивающую всё вокруг',
      modifiers: ['Гравитация', 'Массовый урон', 'Редкость'],
      color: 'accent'
    },
    {
      name: 'Двойное касание',
      type: 'Модификатор',
      damage: '—',
      mana: 25,
      description: 'Следующее заклинание срабатывает дважды',
      modifiers: ['Множитель', 'Синергия'],
      color: 'secondary'
    },
    {
      name: 'Луч смерти',
      type: 'Луч',
      damage: '15/tick',
      mana: 40,
      description: 'Непрерывный луч разрушающей энергии',
      modifiers: ['Луч', 'Высокий DPS', 'Непрерывный'],
      color: 'primary'
    },
    {
      name: 'Полимерфин',
      type: 'Субстанция',
      damage: '0',
      mana: 60,
      description: 'Превращает врагов в овец на короткое время',
      modifiers: ['Контроль', 'Трансформация'],
      color: 'accent'
    }
  ];

  const alchemy = [
    {
      substance1: 'Вода',
      substance2: 'Лава',
      result: 'Базальт + Пар',
      danger: 'low',
      practical: 'Создание платформ, охлаждение'
    },
    {
      substance1: 'Кислота',
      substance2: 'Плоть',
      result: 'Токсичный газ',
      danger: 'high',
      practical: 'Опасно! Избегать комбинации'
    },
    {
      substance1: 'Полимерфин',
      substance2: 'Любая жидкость',
      result: 'Трансформация в жидкость',
      danger: 'critical',
      practical: 'Полёт сквозь стены, смертельно опасно'
    },
    {
      substance1: 'Масло',
      substance2: 'Огонь',
      result: 'Усиленное горение',
      danger: 'medium',
      practical: 'Урон врагам, очистка местности'
    },
    {
      substance1: 'Ускорин',
      substance2: 'Игрок',
      result: 'Увеличение скорости',
      danger: 'low',
      practical: 'Быстрое перемещение, уклонение'
    },
    {
      substance1: 'Амброзия',
      substance2: 'Любое проклятие',
      result: 'Снятие проклятий',
      danger: 'low',
      practical: 'Лечение, очищение'
    }
  ];

  const perks = [
    {
      name: 'Невидимость',
      rarity: 'Редкий',
      effect: 'Враги не видят вас на расстоянии',
      synergy: 'Критический урон',
      icon: 'Eye'
    },
    {
      name: 'Взрывная неуязвимость',
      rarity: 'Редкий',
      effect: 'Иммунитет к взрывному урону',
      synergy: 'Огненный шар, Чёрная дыра',
      icon: 'Shield'
    },
    {
      name: 'Всевидящее око',
      rarity: 'Эпический',
      effect: 'Видите сквозь стены и в темноте',
      synergy: 'Разведка, поиск секретов',
      icon: 'Eye'
    },
    {
      name: 'Бесконечные заклинания',
      rarity: 'Эпический',
      effect: 'Заклинания не расходуют ману',
      synergy: 'Все комбо-заклинания',
      icon: 'Infinity'
    },
    {
      name: 'Кровавая магия',
      rarity: 'Обычный',
      effect: 'Заклинания тратят здоровье вместо маны',
      synergy: 'Регенерация здоровья',
      icon: 'Heart'
    },
    {
      name: 'Стазис',
      rarity: 'Редкий',
      effect: 'Замораживаете время при низком здоровье',
      synergy: 'Телепортация, Исцеление',
      icon: 'Clock'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Эпический': return 'bg-accent/20 border-accent/50 text-accent';
      case 'Редкий': return 'bg-primary/20 border-primary/50 text-primary';
      default: return 'bg-muted/20 border-muted-foreground/50 text-muted-foreground';
    }
  };

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full animate-drip"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 50}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
        
        {[...Array(15)].map((_, i) => (
          <div
            key={`spark-${i}`}
            className="absolute w-2 h-2 bg-secondary/80 animate-spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow tracking-wider">
              NOITA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 uppercase tracking-widest">
              База знаний алхимика
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="outline" className="px-4 py-2 border-primary/50 bg-primary/10 pixel-border">
                <Icon name="Wand2" className="mr-2 h-4 w-4" />
                Магия
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-secondary/50 bg-secondary/10 pixel-border">
                <Icon name="Flask" className="mr-2 h-4 w-4" />
                Алхимия
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-accent/50 bg-accent/10 pixel-border">
                <Icon name="Zap" className="mr-2 h-4 w-4" />
                Перки
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="spells" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-10 h-auto p-2 bg-card/50 backdrop-blur-sm pixel-border">
              <TabsTrigger 
                value="spells" 
                className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase text-xs tracking-wider"
              >
                <Icon name="Wand2" className="mr-2 h-4 w-4" />
                Заклинания
              </TabsTrigger>
              <TabsTrigger 
                value="alchemy" 
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground uppercase text-xs tracking-wider"
              >
                <Icon name="Flask" className="mr-2 h-4 w-4" />
                Алхимия
              </TabsTrigger>
              <TabsTrigger 
                value="perks" 
                className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground uppercase text-xs tracking-wider"
              >
                <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                Перки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="spells" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spells.map((spell, index) => (
                  <Card 
                    key={index} 
                    className="group hover:scale-[1.03] transition-all duration-200 border-border/50 bg-card/70 backdrop-blur-sm hover:border-primary/50 magic-glow"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors uppercase tracking-wide">
                          {spell.name}
                        </CardTitle>
                        <Icon name="Wand2" className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs border-primary/30 uppercase">
                          {spell.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {spell.damage} урон
                        </Badge>
                        <Badge className="text-xs bg-primary/20">
                          {spell.mana} маны
                        </Badge>
                      </div>
                      <CardDescription className="text-xs mt-2">
                        {spell.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1">
                        {spell.modifiers.map((mod, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-muted/20 uppercase">
                            {mod}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alchemy" className="space-y-6 animate-fade-in">
              <div className="grid gap-4">
                {alchemy.map((reaction, index) => (
                  <Card 
                    key={index} 
                    className="group hover:scale-[1.01] transition-all duration-200 border-border/50 bg-card/70 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-2">
                            <Icon name="Droplet" className="h-4 w-4 text-primary" />
                            <span className="font-bold text-sm uppercase">{reaction.substance1}</span>
                          </div>
                        </div>
                        
                        <div className="md:col-span-1 flex justify-center">
                          <Icon name="Plus" className="h-5 w-5 text-muted-foreground" />
                        </div>
                        
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-2">
                            <Icon name="Droplet" className="h-4 w-4 text-secondary" />
                            <span className="font-bold text-sm uppercase">{reaction.substance2}</span>
                          </div>
                        </div>
                        
                        <div className="md:col-span-1 flex justify-center">
                          <Icon name="ArrowRight" className="h-5 w-5 text-accent" />
                        </div>
                        
                        <div className="md:col-span-4">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Icon name="Zap" className="h-4 w-4 text-accent" />
                              <span className="font-bold text-sm uppercase text-accent">{reaction.result}</span>
                              <Badge variant={getDangerColor(reaction.danger)} className="text-xs ml-auto uppercase">
                                {reaction.danger === 'critical' && '⚠ Критично'}
                                {reaction.danger === 'high' && 'Опасно'}
                                {reaction.danger === 'medium' && 'Средне'}
                                {reaction.danger === 'low' && 'Безопасно'}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{reaction.practical}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="perks" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((perk, index) => (
                  <Card 
                    key={index} 
                    className="group hover:scale-[1.03] transition-all duration-200 border-border/50 bg-card/70 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(0,217,255,0.3)]"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl group-hover:text-accent transition-colors uppercase tracking-wide">
                          {perk.name}
                        </CardTitle>
                        <Icon name={perk.icon as any} className="h-6 w-6 text-accent" />
                      </div>
                      <Badge className={`w-fit text-xs mb-3 uppercase ${getRarityColor(perk.rarity)}`}>
                        {perk.rarity}
                      </Badge>
                      <CardDescription className="text-sm mb-3">
                        {perk.effect}
                      </CardDescription>
                      <div className="pt-3 border-t border-border/30">
                        <p className="text-xs text-primary flex items-start gap-2">
                          <Icon name="Link" className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          <span className="uppercase">Синергия: {perk.synergy}</span>
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-20 animate-bounce-pixel">
        <Card className="bg-card/95 backdrop-blur-sm border-primary/50 magic-glow pixel-border">
          <CardContent className="p-3 flex items-center gap-2">
            <Icon name="Wand2" className="h-4 w-4 text-primary animate-pulse-glow" />
            <p className="text-xs font-bold uppercase tracking-wider">Система активна</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
