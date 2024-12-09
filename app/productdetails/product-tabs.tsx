"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  rating: number;
}

export function ProductTabs({ rating }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 space-x-8">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#B88E2F] data-[state=active]:text-[#B88E2F] pb-4"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="additional"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#B88E2F] data-[state=active]:text-[#B88E2F] pb-4"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#B88E2F] data-[state=active]:text-[#B88E2F] pb-4"
        >
          Reviews [{rating}]
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-8">
        <p className="text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9F9F9F] mt-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>
      </TabsContent>
      <TabsContent value="additional" className="mt-8 text-[#9F9F9F]">
        Additional information content here
      </TabsContent>
      <TabsContent value="reviews" className="mt-8 text-[#9F9F9F]">
        Reviews content here
      </TabsContent>
    </Tabs>
  );
}