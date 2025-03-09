import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LectureDescription = () => {
  return (
    <div>
      <Tabs defaultValue="video" className="w-[400px] mt-2">
        {/* Remove shadow from TabsList */}
        <TabsList className="bg-white border-none shadow-none outline-none">
          <TabsTrigger
            value="video"
            className="mx-6 shadow-none outline-none focus:ring-0 focus-visible:ring-0"
          >
            Video
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="mx-6 shadow-none outline-none focus:ring-0 focus-visible:ring-0"
          >
            Discuss Doubts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="video">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="content">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default LectureDescription;
