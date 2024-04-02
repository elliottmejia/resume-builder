import { infoData } from "data/data";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import IconWithText from "ui/icon-with-text";

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

//   info: {
//     name: "Elliott Mejia",
//     tel: "(206) 792-6241",
//     email: "mejia.elliott@gmail.com",
//     portfolio: "https://elliottmejia.com",
//     linkedin: "https://www.linkedin.com/in/elliott-mejia-8873b397/",
//   },

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
      <div id="identity" className="h-fit pb-2">
        <Avatar className="mx-auto text-center my-2 w-16 h-16">
          <AvatarFallback style={{ background: "orange", color: "black" }}>
            ERM
          </AvatarFallback>
          <AvatarImage src="assets/profile-image.png" />
        </Avatar>
        <h1 className="whitespace-nowrap overflow-hidden text-xl font-bold mx-auto text-center ">
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
