import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cat, Heart, Info, Paw, Award, Moon, Sun, ChevronDown, Fish } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [showPaw, setShowPaw] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [catHappiness, setCatHappiness] = useState(50);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPaw(prev => !prev);
    }, 5000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLike = () => {
    setLikeCount(prev => prev + 1);
    setCatHappiness(prev => Math.min(prev + 10, 100));
    toast({
      title: "Meow!",
      description: "Thanks for liking cats!",
      duration: 2000,
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900' : 'bg-gradient-to-b from-purple-200 to-pink-200'}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 p-4 bg-opacity-80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Cat className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              CatWorld
            </span>
          </motion.div>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleDarkMode}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {isDarkMode ? <Moon className="h-6 w-6 text-yellow-300" /> : <Sun className="h-6 w-6 text-yellow-500" />}
          </div>
        </div>
      </motion.div>
      {/* Header with Dark Mode Toggle */}
      <header className="absolute top-0 right-0 m-4 z-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-purple-600"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {isDarkMode ? <Moon className="inline-block ml-2 text-white" /> : <Sun className="inline-block ml-2 text-yellow-500" />}
      </header>

      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-8xl font-bold text-white text-center mb-4"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            All About Cats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl text-white text-center"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontFamily: '"Merriweather", serif'
            }}
          >
            Discover the fascinating world of our feline friends
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Badge variant="secondary" className="mt-6 text-xl px-6 py-3">Purr-fect Information</Badge>
          </motion.div>
        </div>
        <AnimatePresence>
          {showPaw && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-4 left-4"
            >
              <Paw size={64} color="white" />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={48} color="white" />
        </motion.div>
      </div>

      {/* Cat Happiness Meter */}
      <motion.div 
        className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Fish className="mr-2 text-blue-500" />
          Cat Happiness
        </h3>
        <Progress value={catHappiness} className="w-40 h-2" />
        <p className="text-sm mt-1 text-gray-600">{catHappiness}% Happy</p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tabs defaultValue="characteristics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="characteristics" className="text-lg">Characteristics</TabsTrigger>
              <TabsTrigger value="breeds" className="text-lg">Popular Breeds</TabsTrigger>
              <TabsTrigger value="funFacts" className="text-lg">Fun Facts</TabsTrigger>
            </TabsList>
            <TabsContent value="characteristics">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-3xl"><Info className="mr-3" /> Characteristics of Cats</CardTitle>
                  <CardDescription className="text-xl">What makes cats unique?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-6">
                    {[
                      "Independent nature",
                      "Excellent hunters with sharp claws and teeth",
                      "Flexible bodies and quick reflexes",
                      "Keen senses, especially hearing and night vision",
                      "Communicate through vocalizations, body language, and scent",
                      "Self-grooming and cleanliness",
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} p-4 rounded-lg shadow-md text-lg`}
                      >
                        <Paw className="mr-3 h-6 w-6 text-purple-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-3xl"><Cat className="mr-3" /> Popular Cat Breeds</CardTitle>
                  <CardDescription className="text-xl">Some well-known cat breeds around the world</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {[
                        { name: "Siamese", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
                        { name: "Persian", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
                        { name: "Maine Coon", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
                        { name: "Bengal", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
                        { name: "British Shorthair", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
                        { name: "Sphynx", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
                      ].map((breed, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col items-center ${isDarkMode ? 'bg-pink-900' : 'bg-pink-100'} p-6 rounded-lg shadow-lg`}
                          >
                            <img src={breed.image} alt={breed.name} className="w-48 h-48 rounded-full object-cover mb-4" />
                            <span className="font-semibold text-xl">{breed.name}</span>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="funFacts">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-3xl"><Award className="mr-3" /> Fun Cat Facts</CardTitle>
                  <CardDescription className="text-xl">Interesting tidbits about our feline friends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {[
                      "Cats sleep for about 70% of their lives.",
                      "A group of cats is called a "clowder".",
                      "Cats can't taste sweetness.",
                      "A cat's nose print is unique, like a human's fingerprint.",
                      "Cats can jump up to six times their length.",
                    ].map((fact, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`${isDarkMode ? 'bg-yellow-900' : 'bg-yellow-100'} p-6 rounded-lg shadow-md text-lg`}
                      >
                        {fact}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button 
            onClick={handleLike}
            className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Heart className="mr-3 h-7 w-7 group-hover:text-red-200 transition-colors" />
            Like Cats ({likeCount})
          </Button>
        </motion.div>
      </div>
      {/* Floating cat paw cursor follower */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50"
        animate={{ 
          x: scrollY > 100 ? -100 : 0, 
          opacity: scrollY > 100 ? 0 : 1,
          rotate: scrollY
        }}
        style={{ left: scrollY > 100 ? -100 : 20, top: 20 }}
      >
        <Paw className="text-pink-500" />
      </motion.div>
    </div>
  );
};

export default Index;
