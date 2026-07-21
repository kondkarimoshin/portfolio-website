import clsx from "clsx";

import { consultationSteps } from "../constants/consultationSteps";

interface ConsultationProgressProps {
  currentStep: number;
}

const ConsultationProgress = ({
  currentStep,
}: ConsultationProgressProps) => {
  return (
    <div className="mx-auto mt-6 max-w-4xl">

      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-center">

        {consultationSteps.map((step, index) => {
          const completed = step.id < currentStep;
          const active = step.id === currentStep;

          return (
            <div
              key={step.id}
              className="flex items-center"
            >
              <div
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all",
                  completed &&
                    "border-cyan-500 bg-cyan-500 text-slate-950",
                  active &&
                    "border-cyan-500 bg-slate-900 text-cyan-400",
                  !completed &&
                    !active &&
                    "border-slate-700 bg-slate-900 text-slate-500"
                )}
              >
                {step.id}
              </div>

              {index < consultationSteps.length - 1 && (
                <div
                  className={clsx(
                    "mx-3 h-1 w-16 rounded-full",
                    completed
                      ? "bg-cyan-500"
                      : "bg-slate-700"
                  )}
                />
              )}
            </div>
          );
        })}

      </div>

      {/* Mobile Progress */}
      <div className="md:hidden text-center">

        <div
          className={clsx(
            "mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 text-base font-semibold",
            "border-cyan-500 bg-slate-900 text-cyan-400"
          )}
        >
          {currentStep}
        </div>

      </div>

      {/* Common Text */}

      <div className="mt-4 text-center">

        <p className="text-sm text-slate-400">
          Step {currentStep} of {consultationSteps.length}
        </p>

        <p className="mt-1 font-semibold text-cyan-400">
          {consultationSteps[currentStep - 1]?.title}
        </p>

      </div>

    </div>
  );
};

export default ConsultationProgress;