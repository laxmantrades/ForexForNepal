import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({faq}) => {

 
  return (
    <div className="w-4/5 mx-auto  mt-5 max-w-4xl">
      <h1 className="text-2xl font-bold ">Frequently Asked Questions</h1>
      <div className="">
       { faq.map((faq)=><Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">{faq.faqTitle}</AccordionTrigger>
            <AccordionContent>
              {faq.faqDescription}
            </AccordionContent>
          </AccordionItem>
        </Accordion>)}
      </div>
    </div>
  );
};
export default FAQ;
