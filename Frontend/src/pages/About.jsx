import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt="About our store"
          loading="lazy"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <b>StyleNest</b>, we believe fashion should be more than just
            clothing—it should be a way to express who you are. Our collections
            are carefully curated to bring you the latest trends while keeping
            comfort, quality, and affordability at the heart of everything we
            do.
          </p>
          <p>
            From sharp, modern looks for men to elegant and versatile outfits
            for women, and fun, durable wear for children, we make sure every
            member of your family finds something they love. Each piece is
            crafted with attention to detail and designed to help you feel
            confident in every moment.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is simple: to make fashion accessible and enjoyable for
            everyone. We aim to combine timeless style with everyday wearability
            so that you don’t just wear clothes—you create memories in them.
            With a focus on sustainability and thoughtful design, we strive to
            inspire confidence while staying kind to the planet.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Every product we offer is made with premium fabrics and undergoes
            strict quality checks. We ensure that our clothing is not only
            stylish but also durable, so you can enjoy your favorite pieces for
            years to come.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shop with ease from the comfort of your home. Our website is
            designed to make your shopping experience seamless, with easy
            navigation, secure payment options, and fast delivery right to your
            doorstep.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            We value our customers above everything else. Our dedicated support
            team is always here to help you with sizing, styling tips, or any
            inquiries to ensure your shopping journey is smooth and enjoyable.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
