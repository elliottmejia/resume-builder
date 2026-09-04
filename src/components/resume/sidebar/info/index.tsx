import type { Info as InfoType } from "data/types";
import IconWithText from "ui/icon-with-text";
import Mail from "components/modals/mail";
import MailForm from "components/forms/mail-form";

type Props = {
  data: InfoType;
};

const Info = ({ data }: Props) => {
  const {
    name,
    tel,
    email,
    portfolio,
    portfolioShort,
    linkedinShort,
    linkedin,
  } = data;
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
        {email && (
          <IconWithText title="Email" icon="bx:envelope">
            <Mail trigger="mejia.elliott@gmail.com" className="text-sm">
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
