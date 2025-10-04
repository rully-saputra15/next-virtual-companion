import { Button } from "@/components/ui/button";
import { MESSAGE } from "@/lib/i18n";
import { ServerCrash } from "lucide-react";
import React from "react";

type Props = {
  variant?: "SERVER_ERROR";
  onRetry: () => void;
};

const ErrorView = ({ variant = "SERVER_ERROR", onRetry }: Props) => {
  return (
    <div className="h-dvh flex flex-col items-center justify-center px-2 relative space-y-4">
      <ServerCrash size={48} color="green" />
      <p className="text-center text-balance text-lg">
        {MESSAGE.SERVER_ERROR_VIEW}
      </p>
      <Button variant="default" onClick={onRetry}>
        Retry Now
      </Button>
    </div>
  );
};

export default ErrorView;
