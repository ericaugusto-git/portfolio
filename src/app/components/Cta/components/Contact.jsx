"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { toast } from "sonner";
import { validate } from "react-email-validator";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const t = useTranslations("Cta");

  const sendEmail = (e) => {
    e.preventDefault();

    const messageField = form.current.message.value; // Accessing the value of the message field
    if (!validate(email)) {
      toast.error(t("email_field"), {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }
    if (messageField.trim() === "") {
      toast.error(t("message_field"), {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    emailjs
      .sendForm("service_dlgsppw", "template_7o9zlq5", form.current, {
        publicKey: "ZdnViU2mPuLEqMXzX",
      })
      .then(
        () => {},
        (error) => {}
      );
    form.current.reset();
    setEmail("");
    toast.success(t("sent"), { position: "bottom-center", duration: 10000 });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-7">
      <h2 className="text-4xl sm:text-2xl xs:text-xl xxs:text-xs whitespace-pre-line">
        {t("title")}
      </h2>
      <fieldset className="flex gap-[26px] xs:gap-2 xs:flex-col sm:text-xs xs:text-[10px]">
        <label className="text-nowrap" htmlFor="email">
          <span className="text-pink-500">const</span> email ={" "}
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="user_email"
          className="bg-white/5 border-none outline-none w-full rounded-sm"
        />
      </fieldset>
      <fieldset className="flex gap-2 xs:flex-col sm:text-xs xs:text-[10px]">
        <span className="text-nowrap" htmlFor="message">
          <span className="text-pink-500">const</span> {t("message")} =
        </span>
        <textarea
          name="message"
          id="message"
          className="bg-white/5 border-none outline-none textarea resize-none w-full rounded-sm"
          rows={5}
        ></textarea>
      </fieldset>
      <button
        type="submit"
        className="bg-[#0B0B0B] flex relative self-end p-1 pr-8 xs:pr-5 xs:p-[2px] group rounded-sm mt-[-20px]"
      >
        <span className="uppercase italic font-light sm:text-xs xs:text-[8px]">send</span>
        <Image
          className="absolute top-[2px] right-[2px] betterhover:group-hover:top-0 betterhover:group-hover:right-0 transition-all rotate-[140deg] sm:size-4 xs:size-3"
          src="images/arrow.svg"
          height={20}
          width={20}
          alt="send arrow"
        />
      </button>
    </form>
  );
};
