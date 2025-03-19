import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFaq,
} from "@/components/ui/accordion";
import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import VideoPopup from "./video-popup";

const FAQ = () => {
  return (
    <div className="px-[5rem] mt-[3rem] md:block hidden">
      <h2
        className={`${londrinaSolid.className} text-[3.5rem] font-[900] text-[#262626]`}
      >
        FAQ about the trip
      </h2>
      <div className="flex justify-between">
        <Accordion
          type="single"
          collapsible
          className="w-[42.4485rem] flex flex-col gap-y-[1rem]"
        >
          <AccordionItem className="border-none" value="item-1">
            <AccordionTriggerFaq>
              What is included or excluded?
            </AccordionTriggerFaq>
            <AccordionContent>
              <div className="pb-4 text-[1rem] md:text-[0.85rem] tracking-0.0125 text-[#6A6A6A] pt-[1rem]">
                <div className="*:text-[1rem] md:*:text-[0.85rem] *:tracking-0.0125 *:text-[#6A6A6A]">
                  <h3>What’s Included:</h3>
                  <ul>
                    <li>
                      <strong>Motorbike Rental</strong>: Semi-automatic bikes
                      with fuel.
                    </li>
                    <li>
                      <strong>Accommodation</strong>: Private rooms in local
                      homestays.
                    </li>
                    <li>
                      <strong>Meals</strong>: Breakfast, lunch, and dinner
                      during the tour.
                    </li>
                    <li>
                      <strong>Guided Tour</strong>: Experienced English-speaking
                      guide.
                    </li>
                    <li>
                      <strong>Safety Gear</strong>: Helmets and protective
                      clothing.
                    </li>
                    <li>
                      <strong>Entrance Fees</strong>: For attractions and
                      landmarks on the route.
                    </li>
                  </ul>
                  <h3>What’s Excluded:</h3>
                  <ul>
                    <li>
                      <strong>Transportation to Ha Giang</strong>: Bus or car
                      transfer to and from Hanoi.
                    </li>
                    <li>
                      <strong>Personal Expenses</strong>: Snacks, drinks,
                      souvenirs.
                    </li>
                    <li>
                      <strong>Travel Insurance</strong>: Please ensure you have
                      appropriate coverage.
                    </li>
                    <li>
                      <strong>Tips</strong>: For guides and staff.
                    </li>
                    <li>
                      <strong>Additional Activities</strong>: Any optional
                      activities not included in the tour.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-none" value="item-2">
            <AccordionTriggerFaq>
              How do I book and confirm my trip?
            </AccordionTriggerFaq>
            <AccordionContent>
              <div className="pb-4 text-[1rem] md:!text-[0.875rem] tracking-0.0125 text-[#6A6A6A] pt-[1rem]">
                <div className="*:text-[1rem] md:*:!text-[0.875rem] *:tracking-0.0125 *:text-[#6A6A6A]">
                  <ul>
                    <li>
                      <strong>Contact Us</strong>:
                      <ul>
                        <li>
                          Reach out via WhatsApp at +84 989043582 or email us at
                          [email address].
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Provide Details</strong>:
                      <ul>
                        <li>
                          Share your desired tour dates, number of travelers,
                          and any specific requirements (e.g., dietary needs,
                          accommodation preferences).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-none" value="item-3">
            <AccordionTriggerFaq>
              How do I book and confirm my trip?
            </AccordionTriggerFaq>
            <AccordionContent>
              <div className="pb-4 text-[1rem] md:!text-[0.875rem] tracking-0.0125 text-[#6A6A6A] pt-[1rem]">
                <div className="*:text-[1rem] md:*:!text-[0.875rem] *:tracking-0.0125 *:text-[#6A6A6A]">
                  <ul>
                    <li>
                      <strong>Contact Us</strong>:
                      <ul>
                        <li>
                          Reach out via WhatsApp at +84 989043582 or email us at
                          [email address].
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Provide Details</strong>:
                      <ul>
                        <li>
                          Share your desired tour dates, number of travelers,
                          and any specific requirements (e.g., dietary needs,
                          accommodation preferences).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-none" value="item-4">
            <AccordionTriggerFaq>
              How do I book and confirm my trip?
            </AccordionTriggerFaq>
            <AccordionContent>
              <div className="pb-4 text-[1rem] md:!text-[0.875rem] tracking-0.0125 text-[#6A6A6A] pt-[1rem]">
                <div className="*:text-[1rem] md:*:!text-[0.875rem] *:tracking-0.0125 *:text-[#6A6A6A]">
                  <ul>
                    <li>
                      <strong>Contact Us</strong>:
                      <ul>
                        <li>
                          Reach out via WhatsApp at +84 989043582 or email us at
                          [email address].
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Provide Details</strong>:
                      <ul>
                        <li>
                          Share your desired tour dates, number of travelers,
                          and any specific requirements (e.g., dietary needs,
                          accommodation preferences).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-none" value="item-5">
            <AccordionTriggerFaq>
              How do I book and confirm my trip?
            </AccordionTriggerFaq>
            <AccordionContent>
              <div className="pb-4 text-[1rem] md:!text-[0.875rem] tracking-0.0125 text-[#6A6A6A] pt-[1rem]">
                <div className="*:text-[1rem] md:*:!text-[0.875rem] *:tracking-0.0125 *:text-[#6A6A6A]">
                  <ul>
                    <li>
                      <strong>Contact Us</strong>:
                      <ul>
                        <li>
                          Reach out via WhatsApp at +84 989043582 or email us at
                          [email address].
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Provide Details</strong>:
                      <ul>
                        <li>
                          Share your desired tour dates, number of travelers,
                          and any specific requirements (e.g., dietary needs,
                          accommodation preferences).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="relative h-[26.69638rem] w-[42.4485rem]">
          <Image
            src={"/tours/images/video.png"}
            alt="video"
            width={700}
            height={700}
            className="w-[42.4485rem] cursor-pointer h-[26.69638rem] rounded-[1.25rem] shrink-0"
          />
          <VideoPopup />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
