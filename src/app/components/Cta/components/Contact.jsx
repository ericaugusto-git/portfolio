"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { toast } from 'sonner';
import { validate } from 'react-email-validator';

export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    
    
    if(validate(email)){
      emailjs
        .sendForm('service_dlgsppw', 'template_7o9zlq5', form.current, {
          publicKey: 'ZdnViU2mPuLEqMXzX',
        })
        .then(
          () => {
          },
          (error) => {
          },
        );
        form.current.reset();
        setEmail('');
        toast.success('Thanks for contacting me! I well mail you back within 48hrs ;)', {position: 'bottom-center', duration: 5000});
    }else{
      toast.error('Please fill the mail field correctly first.', {position: 'bottom-center', duration: 4000})
    }
  };

  return (
    
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-7">
          <h2 className="text-4xl">
          Let’s build an awesome
          project together
          </h2>
            <fieldset className="flex gap-[26px] xs:gap-2 xs:flex-col">
                <label className="text-nowrap" htmlFor="email">const email = </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"  name="user_email" className="bg-white/5 border-none outline-none w-full rounded-sm"/>
            </fieldset>
            <fieldset className="flex gap-2 xs:flex-col">
                <span className="text-nowrap" htmlFor="message">const message =</span>
                <textarea name="message" id='message' className="bg-white/5 border-none outline-none textarea resize-none w-full rounded-sm" rows={5}></textarea>
            </fieldset>
            <button type="submit" className="bg-[#0B0B0B] flex relative self-end p-1 pr-8 group rounded-sm mt-[-20px]">
                <span className="uppercase italic font-light">send</span>
                <Image className="absolute top-[2px] right-[2px] betterhover:group-hover:top-0 betterhover:group-hover:right-0 transition-all rotate-[140deg]" src="images/arrow.svg" height={20} width={20} alt="send arrow"/>
            </button>
        </form>
  );
};