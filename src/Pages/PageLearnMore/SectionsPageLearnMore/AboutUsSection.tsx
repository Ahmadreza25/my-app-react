import DivMargin from "./StyledSections/DivMargin";
import i1 from "../../../Images/icons/download.png";
import i2 from "../../../Images/icons/facebook.png";
import i3 from "../../../Images/icons/link.png";
import i4 from "../../../Images/icons/linkedin.png";
import image1 from "../../../Images/imageLearnMore/image1.png";
import image2 from "../../../Images/imageLearnMore/image2.png";
import FlexItems from "./StyledSections/FlexItems";
import FormBox from "./StyledSections/FormBox";
const AboutUsSection = () => {
  return (
    <div>
      <DivMargin margintop="50px">
        <FlexItems width="1500px" height="2500px">
          <div className="w-[500px] h-[2500px] flex items-center flex-col">
            <FlexItems className="flex items-center">
              <div className="w-[50px] h-[50px] border-2 border-green-700 rounded-[100%] flex items-center justify-center m-[10px]">
                <img src={i2} alt="" className="w-[20px]" />
              </div>
              <div className="w-[50px] h-[50px] border-2 border-green-700 rounded-[100%] flex items-center justify-center m-[10px]">
                <img src={i3} alt="" className="w-[20px]" />
              </div>
              <div className="w-[50px] h-[50px] border-2 border-green-700 rounded-[100%] flex items-center justify-center m-[10px]">
                <img src={i4} alt="" className="w-[20px]" />
              </div>
            </FlexItems>
            <DivMargin margintop="20px">
              <button className="flex items-center font-[300]">
                Download Assets{" "}
                <img src={i1} alt="" className="w-[18px] ml-[20px]" />
              </button>
            </DivMargin>
          </div>
          <FormBox width="1000px" height="2500px" className="w-[1000px] h-[2500px] ">
            <div className="w-[700px] h-[40px] border-b-[1px] border-t-[1px] border-slate-300 flex items-center">
              <p className="font-[300] text-[15px] text-slate-500">
                3 min read
              </p>
              <div className="w-[1px] h-[100%] bg-slate-300 ml-[30px] mr-[30px]"></div>
              <p className="font-[300] text-[15px] text-slate-500">
                July 7, 2025
              </p>
            </div>
            <FlexItems margintop="50px" width="700px" height="400px">
              <FormBox width="400px" height="400px">
                <p className="font-[600] text-[20px] w-[320px]">
                  Shadé Akanbi found herself in a creative rut during the midst
                  of the pandemic. As a{" "}
                  <span className="text-green-700">
                    print and textile designer
                  </span>{" "}
                  who draws inspiration from global travel, she found the
                  confinement of COVID creatively stifling. She started a
                  “Pattern of the Dae” daily art practice and posted each one to
                  her followers on social media.
                </p>
              </FormBox>
              <FormBox width="300px" height="400px">
                <img src={image1} alt="" className="w-[300px] h-[100%]" />
              </FormBox>
            </FlexItems>
            <FormBox width="700px" height="300px" margintop="50px">
              <p className="font-[500] text-[18px]">
                “So much of what I create comes from my cultural background and
                my travels,” Akanbi said. “During quarantine, I needed to keep
                my creative muscles toned and moving.”
              </p>
              <p className="mt-[30px] font-[600] text-[17px]">
                She gave herself three rules:
              </p>
              <ol className="list-decimal mt-[30px] ml-[15px]">
                <li className="font-[600] text-[17px]">
                  Once I start sketching, I have to finish.{" "}
                </li>
                <li className="mt-[10px] font-[600] text-[17px]">
                  I do one every day.{" "}
                </li>
                <li className="mt-[10px] font-[600] text-[17px]">
                  There are no mistakes.{" "}
                </li>
              </ol>
            </FormBox>
            <div className="w-[700px] h-[150px] flex items-center justify-center">
              <div className="w-[1px] h-[100%] bg-slate-700"></div>
              <FormBox width="700px" height="150px">
                <p className="mt-[-50px] font-[900] text-9xl text-green-700">
                  ،،
                </p>
                <div className="text-center">
                  <p className="font-[600] text-[18px]">
                    “Art has always been my anchor. It was a grounding
                    exercise.”
                  </p>
                  <p className="mt-[20px] text-[13px]">Shadé Akanbi</p>
                  </div>
              </FormBox>
            </div>
            <FormBox margintop="50px" width="700px" height="400px">
              <p className="font-[600] text-[18px]">
                Each day, Akanbi opened a new page of her sketchbook. She would
                start with a ruler for geometric patterns but would often just
                keep going freehand – filling both sides with colorful patterns
                using paint pens, gouache and markers.
              </p>
              <p className="mt-[30px] font-[600] text-[18px]">
                “People got really into it and started tagging me with their own
                patterns,” she said. “It created a community.”
              </p>
              <p className="mt-[30px] font-[600] text-[18px]">
                Akanbi, who is second-generation Nigerian American, grew up in
                the San Francisco Bay Area in a home filled with colorful
                textiles and patterns. Her first trip to Nigeria as a teenager
                was transformative, and she has returned to the continent time
                and time again.
              </p>
            </FormBox>
            <FlexItems width="700px" height="700px">
              <FormBox width="350px" height="100%">
                <img src={image2} alt="" className="w-[100%] h-[100%]" />
              </FormBox>
              <div className="w-[350px] h-[100%]">
                <div className="w-[100%] h-[550px] bg-orange-100">
                  <div className="ml-[50px]">
                    <p className="font-[900] text-9xl text-green-700">،،</p>
                    <p className="w-[250px] font-[300] text-[25px] text-slate-700">
                      I love going back to the [African] continent – I’ve
                      traveled to the west, east, north and south,” she said.
                      “We’re more alike than different, and art connects us.”{" "}
                    </p>
                  </div>
                </div>
              </div>
            </FlexItems>
            <div className="w-[700px] h-[500px] mt-[50px]">
              <p className="mt-[20px] font-[600] text-[20px]">
                With every visit, she spent time in markets and workshops and
                saw textile weavers and beaders at work. She watched as they
                created patterns that go back hundreds of years, passed down
                over the generations by conversation and connection.{" "}
              </p>
              <p className="mt-[30px] font-[600] text-[20px]">
                “In my art, there are so many little pieces of me and stories of
                places I’ve been. I hope this collection sparks the curiosity to
                travel more or taps into a memory, like it does for me,” she
                said.{" "}
              </p>
              <p className="mt-[30px] font-[600] text-[20px]">
                Akanbi’s collection of drinkware is available at participating
                U.S. stores for a limited time, while supplies last.{" "}
              </p>
            </div>
          </FormBox>
        </FlexItems>
        <div></div>
      </DivMargin>
    </div>
  );
};

export default AboutUsSection;
