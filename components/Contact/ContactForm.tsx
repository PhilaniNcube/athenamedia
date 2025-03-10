"use client";

import { useForm } from "react-hook-form";
import { sendContactForm } from "../../lib/api";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { startTransition, useActionState } from "react";
import { sendEmailAction } from "../../actions/email-action";
import { sendGTMEvent } from "@next/third-parties/google";

interface FormInputs {
  name: string;
  email: string;
  tel: string;
  message: string;
}

const ContactForm = () => {
  const router = useRouter();

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const [state, formAction, isPending] = useActionState(sendEmailAction, null);

  const gtmEvent = () => {};

  return (
    <section className="px-4 py-12 ">
      <div className="relative mx-auto overflow-hidden max-w-7xl bg-peach isolate rounded-2xl">
        <svg
          className="absolute top-0 left-0 object-cover h-full -translate-x-10 -z-10"
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
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="p-8 lg:p-16">
            <h1 className="text-2xl font-medium text-slate-950 md:text-3xl lg:text-4xl">
              Contact Us
            </h1>
            <p className="mt-2 mb-5 text-slate-950 text-md lg:text-lg">
              {" "}
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
            {/* <p className="mt-2 text-white text-md lg:text-lg">
              {" "}
              P : 078 3115 1400
            </p> */}
            <Link
              href="mailto:info@athenamedia.co.za"
              className="mt-5 text-slate-950 text-md lg:text-lg"
            >
              {" "}
              M : info@athenamedia.co.za
            </Link>
          </div>
          <div className="w-full p-8 lg:p-16">
            <form
              action={(formData: FormData) => {
                startTransition(() => {
                  formAction(formData);
                  sendGTMEvent({
                    event: "generate_lead",
                    value: {
                      email: formData.get("email"),
                    },
                  });
                });
              }}
              className="text-white"
            >
              <div className="relative flex flex-col w-full isolate">
                <label className="hidden" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name Cannot be empty.",
                  })}
                  id="name"
                  name="name"
                  className="px-4 py-2 text-lg border-b bg-peach focus:bg-transparent focus:border-b-2 focus:outline-none placeholder:text-slate-200"
                  placeholder="Name"
                />{" "}
                {errors.name && (
                  <span className="absolute right-0 flex space-x-4 top-2">
                    <p className="italic">{errors.name.message}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="w-8 h-8"
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
              <div className="relative flex flex-col w-full mt-2 isolate">
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
                  className="px-4 py-2 text-lg bg-transparent border-b focus:border-b-2 focus:outline-none placeholder:text-slate-200"
                  placeholder="Email Address"
                />
                {errors.email ? (
                  <span className="absolute top-0 right-0 flex space-x-4">
                    <p className="italic">{errors.email.message}</p>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative flex flex-col w-full mt-2 isolate">
                <label className="hidden" htmlFor="tel">
                  Phone
                </label>
                <input
                  {...register("tel", {
                    required: "Phone is required.",
                  })}
                  type="tel"
                  id="tel"
                  name="phone"
                  autoComplete="telephone"
                  className="px-4 py-2 text-lg bg-transparent border-b focus:border-b-2 focus:outline-none placeholder:text-slate-200"
                  placeholder="Phone"
                />{" "}
                {errors.tel ? (
                  <span className="absolute top-0 right-0 flex space-x-4">
                    <p className="italic">{errors.tel.message}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="w-8 h-8"
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
                ) : (
                  ""
                )}
              </div>
              <div className="relative flex flex-col w-full mt-4 isolate">
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
                  className="px-4 py-2 text-lg bg-transparent border-b focus:border-b-2 focus:outline-none placeholder:text-slate-200"
                  placeholder="Your Message"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="p-3 rounded bg-slate-200 text-slate-800 w-[150px]"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
            {state?.error && (
              <div className="mt-4 text-red-500">{state.error}</div>
            )}
            {state?.message && (
              <div className="px-2 py-2 mt-4 text-green-500 bg-white rounded">
                {state.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
