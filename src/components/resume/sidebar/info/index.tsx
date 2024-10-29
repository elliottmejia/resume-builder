import { infoData } from "data/data";
import type { InfoType } from "data/types";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import IconWithText from "ui/icon-with-text";
import { Icon } from "@iconify/react";
import Mail from "components/modals/mail";
import MailForm from "components/forms/mail-form";
import { cn } from "lib/utils";


const Info = () => {
  const {
    name,
    tel,
    email,
    emailShort,
    portfolio,
    portfolioShort,
    linkedinShort,
    linkedin,
  }: InfoType = infoData;
  return (
    <div
      id="info"
      className="flex flex-col justify-center
            place-items-center sm:place-items-start text-center sm:text-left
            w-fit sm:w-full mx-auto"
    >
      <div
        id="identity"
        className="h-fit pb-2 place-items-center text-center sm:place-items-left sm:pl-2"
      >
        {/* Avatar */}
        <div id="circle-parent" className="relative -top-2 scale-95 sm:-left-7">
          {/* <div className="relative w-fit" id="color-circles">
            <div className="absolute w-16 h-16 rounded-full bg-red-500 top-2 left-0 " />
            <div className="absolute w-16 h-16 rounded-full bg-cyan-400 top-2 left-4 " />
          </div> */}
          {/* <img
            src="/circles.png"
            className="h-[61px] absolute top-2 right-8 animate duration-500 ease-in"
          ></img> */}

          <Avatar
            id="logo"
            onClick={() => {
              window?.open(portfolio);
            }}
            className="logo
             flex  overflow-hidden rounded-full
            w-16 h-16
            animate ease-in-out duration-500 
            hover:scale-105 hover:rotate-6 
            cursor-pointer 
            my-2 
            z-20 
            relative
             top-[.5rem] -right-[27.5px]
            "
          >
            <AvatarFallback className={cn("w-full h-full text-black")}>
              <Icon icon="file-icons:devcontainer" className="w-full h-full" />
            </AvatarFallback>
          </Avatar>
        </div>
        <h1
          className="whitespace-nowrap overflow-hidden text-xl font-bold"
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
          }}
        >
          {name}
        </h1>
      </div>

      <div
        id="contact"
        className="grid grid-cols-2 mt-4 sm:px-4 pb-4 sm:pb-0 sm:mt-0 sm:flex sm:flex-col gap-y-2  "
      >
        {tel && <IconWithText title="Cell" icon="bx:phone" text={tel} />}
        {email && emailShort && (
          <IconWithText title="Email" icon="bx:envelope">
            <Mail trigger="mejia.elliott@gmail" className="text-sm">
              <MailForm />
            </Mail>
          </IconWithText>
        )}
        {portfolio && portfolioShort && (
          <IconWithText
            title="Portfolio"
            icon="bx:link"
            text={portfolioShort}
            src={portfolio}
          />
        )}
        {linkedin && linkedinShort && (
          <IconWithText
            title="LinkedIn"
            icon="akar-icons:linkedin-fill"
            text={linkedinShort}
            src={linkedin}
          />
        )}
      </div>
    </div>
  );
};

export default Info;
