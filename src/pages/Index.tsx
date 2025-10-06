import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [view, setView] = useState<'front' | 'back'>('front');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">ULGTÖ</h1>
          <p className="text-xl text-muted-foreground">Техническое задание на дизайн футболки оверсайз</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={view === 'front' ? 'default' : 'outline'}
                    onClick={() => setView('front')}
                    className="flex-1"
                  >
                    <Icon name="User" className="mr-2 h-4 w-4" />
                    Вид спереди
                  </Button>
                  <Button
                    variant={view === 'back' ? 'default' : 'outline'}
                    onClick={() => setView('back')}
                    className="flex-1"
                  >
                    <Icon name="UserCircle" className="mr-2 h-4 w-4" />
                    Вид сзади
                  </Button>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden transition-all duration-300">
                <img
                  src={view === 'front' ? "https://cdn.poehali.dev/files/7f4cbc09-9742-4a2c-92fc-a5f206139cb2.jpg" : "https://cdn.poehali.dev/files/84d60ddc-1766-4ef9-af50-cb9be045819a.jpg"}
                  alt="T-shirt mockup"
                  className="w-full h-auto"
                />
                
                {view === 'front' && (
                  <div className="absolute top-[35%] left-[19%] animate-scale-in">
                    <img
                      src="https://cdn.poehali.dev/files/a65bd6b8-b29c-4b0a-903f-45dce008b1b3.png"
                      alt="Logo chest"
                      className="w-12 h-12 object-contain drop-shadow-lg"
                    />
                  </div>
                )}

                {view === 'back' && (
                  <div className="absolute top-[24%] left-1/2 -translate-x-1/2 animate-scale-in">
                    <img
                      src="https://cdn.poehali.dev/files/24196ad4-933f-4248-9237-18fef19afca4.png"
                      alt="Logo back"
                      className="w-36 h-36 object-contain drop-shadow-lg"
                    />
                  </div>
                )}
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                {view === 'front' ? 'Логотип на груди: 8x8 см' : 'Логотип на спине: 25x25 см'}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="FileText" className="h-6 w-6 text-primary" />
                  Техническое задание
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Общая концепция</h3>
                    <p className="text-muted-foreground">
                      Дизайн футболки оверсайз в минималистичном стиле с акцентом на логотип бренда ULGTÖ
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Цветовая палитра</h3>
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#2C7A7B] border-2 border-gray-200"></div>
                        <span className="text-sm">#2C7A7B</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300"></div>
                        <span className="text-sm">Белый</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1A202C] border-2 border-gray-200"></div>
                        <span className="text-sm">#1A202C</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Размещение логотипа</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>На груди:</strong> малый логотип 8x8 см, центр или левая сторона</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>На спине:</strong> крупный логотип 25x25 см, центр верхней части</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Shirt" className="h-6 w-6 text-primary" />
                  Спецификация продукта
                </h2>
                
                <Tabs defaultValue="materials" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="materials">Материалы</TabsTrigger>
                    <TabsTrigger value="sizes">Размеры</TabsTrigger>
                    <TabsTrigger value="care">Уход</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="materials" className="space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Sparkles" className="h-5 w-5 text-primary" />
                      <span>Premium качество ткани</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Home" className="h-5 w-5 text-primary" />
                      <span>100% хлопок</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Maximize" className="h-5 w-5 text-primary" />
                      <span>Оверсайз крой</span>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sizes" className="space-y-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <div className="font-semibold">S</div>
                        <div className="text-sm text-muted-foreground">Длина: 72 см</div>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <div className="font-semibold">M</div>
                        <div className="text-sm text-muted-foreground">Длина: 74 см</div>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <div className="font-semibold">L</div>
                        <div className="text-sm text-muted-foreground">Длина: 76 см</div>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <div className="font-semibold">XL</div>
                        <div className="text-sm text-muted-foreground">Длина: 78 см</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="care" className="space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Droplet" className="h-5 w-5 text-primary" />
                      <span>Стирка при 30°C</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Wind" className="h-5 w-5 text-primary" />
                      <span>Деликатный отжим</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Sun" className="h-5 w-5 text-primary" />
                      <span>Сушка в тени</span>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-2 shadow-lg animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Layout" className="h-6 w-6 text-primary" />
              Визуализация и мокапы
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="aspect-square bg-gradient-to-br from-[#2C7A7B] to-[#1a5657] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <img
                      src="https://cdn.poehali.dev/files/a65bd6b8-b29c-4b0a-903f-45dce008b1b3.png"
                      alt="Logo"
                      className="w-12 h-12 object-contain opacity-90"
                    />
                  </div>
                  <Icon name="Shirt" className="h-32 w-32 text-white/20" />
                </div>
                <p className="text-center font-medium">Вариант 1: Темный фон</p>
              </div>

              <div className="space-y-3">
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center relative overflow-hidden border-2">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <img
                      src="https://cdn.poehali.dev/files/a65bd6b8-b29c-4b0a-903f-45dce008b1b3.png"
                      alt="Logo"
                      className="w-12 h-12 object-contain brightness-0"
                    />
                  </div>
                  <Icon name="Shirt" className="h-32 w-32 text-gray-200" />
                </div>
                <p className="text-center font-medium">Вариант 2: Светлый фон</p>
              </div>

              <div className="space-y-3">
                <div className="aspect-square bg-[#1A202C] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <img
                      src="https://cdn.poehali.dev/files/a65bd6b8-b29c-4b0a-903f-45dce008b1b3.png"
                      alt="Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <Icon name="Shirt" className="h-32 w-32 text-white/20" />
                </div>
                <p className="text-center font-medium">Вариант 3: Черный фон</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Дополнительные материалы для производства</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <Icon name="FileImage" className="h-5 w-5 text-primary" />
                  <span>Векторный файл логотипа (AI, SVG)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Palette" className="h-5 w-5 text-primary" />
                  <span>Цветовой профиль Pantone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Ruler" className="h-5 w-5 text-primary" />
                  <span>Точные размеры нанесения</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Layers" className="h-5 w-5 text-primary" />
                  <span>Макет для различных размеров</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;