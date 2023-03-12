"use client"

import Image from "next/image";
import {  LightButton } from "../Buttons/Button";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../../lib/api";
import Link from "next/link";
import analytics from "../../utils/analytics";
import { useRouter } from "next/navigation";

interface FormInputs {
  name: string;
  email: string;
  tel: string;
  message: string;
}

const ContactForm = () => {

  const router = useRouter()

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,

  } = useForm<FormInputs>();

   const onSubmit = async (data: FormInputs) => {


   await sendContactForm(data)

    alert('Thank you for contacting us. We will be in touch with you soon!')
    router.push(`/website-analytics`)
   };



  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto  bg-peach relative isolate overflow-hidden rounded-2xl">
        <svg
          className="absolute top-0 left-0 h-full object-cover -translate-x-10 -z-10"
          width="640"
          height="640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
              <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 1 1 0 0 0)"
            cx="320"
            cy="320"
            r="320"
            fillRule="evenodd"
            opacity=".309"
          />
        </svg>
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 lg:p-16">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
              Contact Us
            </h1>
            <p className="text-white mt-2 text-md mb-5 lg:text-lg">
              {" "}
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
            {/* <p className="text-white mt-2 text-md lg:text-lg">
              {" "}
              P : 078 3115 1400
            </p> */}
            <Link href="mailto:info@athenamedia.co.za"  className="text-white mt-5 text-md lg:text-lg">
              {" "}
              M : info@athenamedia.co.za
            </Link>
          </div>
          <div className="w-full p-8 lg:p-16">
            <form onSubmit={handleSubmit(onSubmit)} className="text-white">
              <div className="flex flex-col w-full relative isolate">
                <label className="hidden" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name Cannot be empty.",

                  })}
                  id="name"
                  name="name"
                  className="bg-peach focus:bg-transparent border-b focus:border-b-2 text-lg focus:outline-none px-4 py-2 placeholder:text-slate-200"
                  placeholder="Name"
                />{" "}
                {errors.name && (
                  <span className="absolute top-2 right-0 flex space-x-4">
                    <p className="italic">{errors.name.message}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="h-8 w-8"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#FFF" />
                        <path
                          fill="#E7816B"
                          d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full mt-2 relative isolate">
                <label className="hidden" htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email can't be empty!",
                  })}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email-address"
                  className="bg-transparent border-b focus:border-b-2 text-lg focus:outline-none px-4 py-2 placeholder:text-slate-200"
                  placeholder="Email Address"
                />
                {errors.email ? (
                  <span className="absolute top-0 right-0 flex space-x-4">
                    <p className="italic">{errors.email.message}</p>

                  </span>
                ) : ""}
              </div>
              <div className="flex flex-col w-full mt-2 relative isolate">
                <label className="hidden" htmlFor="tel">
                  Phone
                </label>
                <input
                  {...register("tel", {
                    required: "Phone is required.",
                  })}
                  type="tel"
                  id="tel"
                  name="tel"
                  autoComplete="telephone"
                  className="bg-transparent border-b focus:border-b-2 text-lg focus:outline-none px-4 py-2 placeholder:text-slate-200"
                  placeholder="Phone"
                />{" "}
                {errors.tel ? (
                  <span className="absolute top-0 right-0 flex space-x-4">
                    <p className="italic">{errors.tel.message}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="h-8 w-8"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#FFF" />
                        <path
                          fill="#E7816B"
                          d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"
                        />
                      </g>
                    </svg>
                  </span>
                ): ""}
              </div>
              <div className="flex flex-col w-full mt-4 relative isolate">
                <label className="hidden" htmlFor="message">
                  Phone
                </label>
                <textarea
                  {...register("message", {
                    required: "This is required.",
                  })}
                  rows={3}
                  id="message"
                  name="message"
                  autoComplete="message"
                  className="bg-transparent border-b focus:border-b-2 text-lg focus:outline-none px-4 py-2 placeholder:text-slate-200"
                  placeholder="Your Message"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <LightButton>Submit</LightButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
