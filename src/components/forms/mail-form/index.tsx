import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    // watch,
    // control,
    // setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    // https://react-hook-form.com/docs/useform#mode
    mode: "onSubmit",
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const apiKey = import.meta.env.VITE_MAIL_KEY;

  /**
   * Submits the web3 form.
   * "data" is left unused here, but is useful to have
   *  in the case of debugging or further processing.
   *
   * @param {string} access_key - The access key for the form submission.
   * @param {Object} settings - The settings object for the form submission.
   * @param {Function} onSuccess - The callback function to be executed on successful form submission.
   * @param {Function} onError - The callback function to be executed on form submission error.
   */
  const { submit: submitWeb3Form } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      //   from_name: "Site User",
      //   subject: "Immutable message from user",
      //   replyto: "big.brother.ed...ward@play.com"
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  /**
   * This passes data into the **submitWeb3Form** function and concatenates the from_name field.
   *
   * Optionally, omit the from_name field in this function and
   *  pass the from_name field directly into the settings{}
   *  object of the useWeb3Forms hook above ⬆️.
   *
   * from_name and many other field types can also be passed like this as HTML:
   * <input type="hidden" name="from_name" value="any string">
   * @link https://docs.web3forms.com/getting-started/customizations/from-name
   *
   * @param {Object} data - The form data.
   */
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = handleSubmit((data: any) => {
    let fromName = "Site User";
    if (data.company && data.name) {
      // Company AND Name
      fromName = `${data.company} | ${data.name}`;
    } else if (data.company) {
      // Company NOT Name
      fromName = `${data.company} | Site user`;
    } else if (data.name) {
      // Name NOT Company
      fromName = `${data.name}`;
    }

    submitWeb3Form({
      ...data,
      from_name: fromName,
      subject:
        data.subject ||
        `New Contact Form Submission from ${data.name || "Site User"}`,
    });
  });

  return (
    <>
      <form onSubmit={onSubmit} className="my-4">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
          Contact Me
        </h2>

        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Name"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.name
                ? "border-red-500 focus:border-red-500 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }
            `}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-500">
              <small>{errors.name.message as string}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Company"
            required={false}
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4  ${
              errors.company
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }
            `}
            {...register("company", {
              maxLength: 80,
            })}
          />
          {errors.company && (
            <div className="mt-1 text-red-600">
              <small>{errors.company.message as string}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }
            `}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message as string}</small>
            </div>
          )}
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Subject"
            required={false}
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4  ${
              errors.subject
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }
            `}
            {...register("subject", {
              maxLength: 60,
            })}
          />
          {errors.subject && (
            <div className="mt-1 text-red-600 text-md">
              <small>{errors.subject.message as string}</small>
            </div>
          )}
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }
            `}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-md text-red-600">
              {" "}
              <small>{String(errors.message.message)}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-md text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-md text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
