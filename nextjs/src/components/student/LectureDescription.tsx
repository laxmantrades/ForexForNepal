import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface videoTitle{
  videoTitle:string
}
const LectureDescription:React.FC<videoTitle> = ({videoTitle}) => {
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
         {videoTitle}
        </TabsContent>
        <TabsContent value="content">Join Our Telegram Community</TabsContent>
      </Tabs>
    </div>
  );
};
export default LectureDescription;
