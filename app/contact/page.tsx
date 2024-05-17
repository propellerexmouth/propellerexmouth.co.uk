import React from "react";
import { ibmPlexMono } from "../fonts";
import AppButton from "../components/AppButton";

const ContactPage = () => {
  return (
    <div className="w-full bg-grey-10">
      <div className="mx-auto px-10 py-20">
        <div className={`${ibmPlexMono.className} mx-auto w-full max-w-6xl lg:px-6 py-16 break-words`}>
          <h1 className="max-w-screen-sm mt-8 text-xl font-bold tracking-tight sm:text-3xl">Contact</h1>
          <address className="not-italic text-xl tracking-tight sm:text-2xl">
            <p className="mt-8">15 Victoria Road, Exmouth EX8 1DL</p>
            <p className="mt-8"><a href="tel:01395263509">01395 263509</a> <a href="mailto:hello@propellerexmouth.co.uk">hello@propellerexmouth.co.uk</a></p>
          </address>
          <AppButton className="mt-8" url="https://app.propellerexmouth.co.uk" target="_blank"/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
