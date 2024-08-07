import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cat, Heart, Info } from "lucide-react";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white text-center"
          >
            All About Cats
          </motion.h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="characteristics" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center"><Info className="mr-2" /> Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Independent nature</li>
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially hearing and night vision</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
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
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center"><img src="/placeholder.svg" alt="Siamese" className="w-10 h-10 rounded-full mr-2" /> Siamese</li>
                  <li className="flex items-center"><img src="/placeholder.svg" alt="Persian" className="w-10 h-10 rounded-full mr-2" /> Persian</li>
                  <li className="flex items-center"><img src="/placeholder.svg" alt="Maine Coon" className="w-10 h-10 rounded-full mr-2" /> Maine Coon</li>
                  <li className="flex items-center"><img src="/placeholder.svg" alt="Bengal" className="w-10 h-10 rounded-full mr-2" /> Bengal</li>
                  <li className="flex items-center"><img src="/placeholder.svg" alt="British Shorthair" className="w-10 h-10 rounded-full mr-2" /> British Shorthair</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button 
            onClick={() => setLikeCount(prev => prev + 1)}
            className="group"
          >
            <Heart className="mr-2 h-4 w-4 group-hover:text-red-500 transition-colors" />
            Like Cats ({likeCount})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
