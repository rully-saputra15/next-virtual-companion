import { CLASSNAMES } from "@/config/animation";
import { Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import s from "../LandingPage.module.css";

type Props = {
  handleGoToOnBoarding: () => void;
};

const CtaPage = ({ handleGoToOnBoarding }: Props) => {
  return (
    <>
      <div
        className={cn(
          "absolute top-14 left-auto right-auto opacity-0 invisible",
          CLASSNAMES.GENERAL.CONVO_TITLE
        )}
      >
        <h1 className="font-black text-3xl underline">Convo</h1>
      </div>
      <p
        className={cn(
          "font-bold text-3xl opacity-0 invisible",
          CLASSNAMES.LANDING.TAGLINE
        )}
      >
        Talk freely, anonymously
      </p>
      <p
        className={cn(
          "font-light text-md text-balance",
          CLASSNAMES.LANDING.SUBLINE
        )}
      >
        No need to hold it in anymore.
      </p>
      <button
        role="button"
        className={cn(
          s.main_button,
          "px-8 py-2 rounded-md text-sm shadow-xs font-bold text-slate-900 mt-5 opacity-0 scale-110 invisible cursor-pointer"
        )}
        onClick={handleGoToOnBoarding}
      >
        I&apos;ll listen
      </button>

      <div
        className={cn(
          "flex flex-col items-center opacity-0 mt-5 text-left md:flex-row invisible",
          CLASSNAMES.LANDING.ADDITIONAL_INFORMATION
        )}
      >
        <div className="flex justify-center items-center gap-2 w-fit p-2">
          <Lock size={24} className="text-gray-600" />

          <small className="font-bold text-xs text-gray-600">
            We don’t collect names, emails, or IDs.
          </small>
        </div>
        <div className="flex justify-center items-center gap-2 p-2">
          <ShieldCheck size={24} className="text-gray-600" />
          <small className="font-bold text-xs text-gray-600">
            100% anonymous. No judgment, ever
          </small>
        </div>
      </div>
    </>
  );
};

export default CtaPage;
