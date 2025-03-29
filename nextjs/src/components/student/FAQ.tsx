import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FAQ {
  faq: [{ answer: string; question: string; _v: number; _id: string }];
}

const FAQ: React.FC<FAQ> = ({ faq }) => {
  if (!faq) return null;

  return (
    <div className="w-4/5 mx-auto  mt-5 max-w-4xl">
      <h1 className="text-2xl font-bold ">Frequently Asked Questions</h1>
      <div className="">
        {faq?.map((faq) => (
          <Accordion type="single" collapsible className="" key={faq._id}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                {faq?.question}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  dangerouslySetInnerHTML={{
                    __html: faq.answer || " lorem15 ",
                  }}
                />
               
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
