import { infoData } from "data/data";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import IconWithText from "ui/icon-with-text";
import { Icon } from "@iconify/react";

type InfoData = {
  name: string;
  tel: string;
  email: string;
  emailShort: string;
  portfolio: string;
  portfolioShort: string;
  linkedinShort: string;
  linkedin: string;
};

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
  }: InfoData = infoData;
  return (
    <div id="info" className="flex flex-col w-full text-left">
      <div id="identity" className="h-fit pb-2 text-left pl-2">
        <Avatar className=" my-2 w-16 h-16">
          <AvatarFallback style={{ background: "white", color: "black" }}>
            <Icon icon="file-icons:devcontainer" className="w-full h-full" />
          </AvatarFallback>
        </Avatar>
        <h1 className="whitespace-nowrap overflow-hidden text-xl font-bold">
          &nbsp;{name}
        </h1>
      </div>

      <div id="contact" className="flex flex-col gap-y-2 px-4">
        <IconWithText title="Cell" icon="bx:phone" text={tel} />
        <IconWithText
          title="Email"
          icon="bx:envelope"
          text={emailShort}
          src={email}
        />
        <IconWithText
          title="Portfolio"
          icon="bx:link"
          text={portfolioShort}
          src={portfolio}
        />
        <IconWithText
          title="LinkedIn"
          icon="akar-icons:linkedin-fill"
          text={linkedinShort}
          src={linkedin}
        />
      </div>
    </div>
  );
};

export default Info;
