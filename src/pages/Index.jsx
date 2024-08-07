import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cat, Heart, Info, Paw, Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [showPaw, setShowPaw] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPaw(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setLikeCount(prev => prev + 1);
    toast({
      title: "Meow!",
      description: "Thanks for liking cats!",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-200">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-bold text-white text-center mb-4"
          >
            All About Cats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl text-white text-center"
          >
            Discover the fascinating world of our feline friends
          </motion.p>
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
              <Paw size={48} color="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="characteristics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            <TabsTrigger value="funFacts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center"><Info className="mr-2" /> Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
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
                      className="flex items-center bg-purple-100 p-3 rounded-lg shadow-sm"
                    >
                      <Paw className="mr-2 h-4 w-4 text-purple-500" />
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
                <CardTitle className="flex items-center"><Cat className="mr-2" /> Popular Cat Breeds</CardTitle>
                <CardDescription>Some well-known cat breeds around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Siamese", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
                    { name: "Persian", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
                    { name: "Maine Coon", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
                    { name: "Bengal", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
                    { name: "British Shorthair", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
                    { name: "Sphynx", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
                  ].map((breed, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center bg-pink-100 p-4 rounded-lg shadow-sm"
                    >
                      <img src={breed.image} alt={breed.name} className="w-24 h-24 rounded-full object-cover mb-2" />
                      <span className="font-semibold">{breed.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="funFacts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center"><Award className="mr-2" /> Fun Cat Facts</CardTitle>
                <CardDescription>Interesting tidbits about our feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
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
                      className="bg-yellow-100 p-4 rounded-lg shadow-sm"
                    >
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div 
          className="mt-12 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={handleLike}
            className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            <Heart className="mr-2 h-6 w-6 group-hover:text-red-200 transition-colors" />
            Like Cats ({likeCount})
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
