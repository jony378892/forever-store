import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return <div>
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img src={assets.about_img} className="w-full md:max-w-[450px" alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quod incidunt corrupti soluta quidem placeat error, esse dicta, delectus modi odit laborum totam laboriosam ipsam repellat at eveniet nemo amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure quasi harum laborum illum sed enim a doloribus esse, voluptatibus culpa aperiam ipsum, dignissimos ullam quos omnis sapiente quisquam cupiditate!</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus eveniet unde. Sed cum exercitationem necessitatibus tempore quisquam, possimus soluta error corrupti explicabo eveniet temporibus sunt dolorum nihil rem nobis.</p>
      </div>
    </div>
    <div className="text-4xl py-4 ">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Ouality Assurance</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quis dolorem obcaecati totam eligendi ex repellat aliquid illo asperiores ad velit, ratione voluptatum placeat ut quasi. Unde quae blanditiis temporibus.</p>
      </div>
      <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quis dolorem obcaecati totam eligendi ex repellat aliquid illo asperiores ad velit, ratione voluptatum placeat ut quasi. Unde quae blanditiis temporibus.</p>
      </div>
      <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quis dolorem obcaecati totam eligendi ex repellat aliquid illo asperiores ad velit, ratione voluptatum placeat ut quasi. Unde quae blanditiis temporibus.</p>
      </div>


    </div>
    <NewsletterBox />
  </div>;
};

export default About;
