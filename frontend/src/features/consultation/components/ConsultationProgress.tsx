import clsx from "clsx";

import { consultationSteps } from "../constants/consultationSteps";

interface ConsultationProgressProps {
  currentStep: number;
}

const ConsultationProgress = ({
  currentStep,
}: ConsultationProgressProps) => {
  const totalSteps =
    consultationSteps.length;

  const progress =
    totalSteps > 1
      ? ((currentStep - 1) /
        (totalSteps - 1)) *
      100
      : 100;

  return (
    <div className="mx-auto mt-6 max-w-4xl space-y-6">
      {/* Header */}

      <div className="text-center">
        <p className="text-sm font-medium text-slate-400">
          Step {currentStep} of {totalSteps}
        </p>

        <h2 className="mt-1 text-xl font-semibold text-white">
          {
            consultationSteps[currentStep - 1]
              ?.title
          }
        </h2>
      </div>

      {/* Progress Bar */}

      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>Progress</span>

          <span>
            {Math.round(progress)}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Desktop Stepper */}

      <div className="hidden items-center justify-center md:flex">
        {consultationSteps.map(
          (step, index) => {
            const completed =
              step.id < currentStep;

            const active =
              step.id === currentStep;

            return (
              <div
                key={step.id}
                className="flex items-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={clsx(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                      completed &&
                      "border-cyan-500 bg-cyan-500 text-slate-950",
                      active &&
                      "border-cyan-500 bg-slate-900 text-cyan-400 shadow-lg shadow-cyan-500/20",
                      !completed &&
                      !active &&
                      "border-slate-700 bg-slate-900 text-slate-500"
                    )}
                  >
                    {completed
                      ? "✓"
                      : step.id}
                  </div>

                  <span
                    className={clsx(
                      "mt-2 text-xs",
                      active
                        ? "text-cyan-400"
                        : "text-slate-500"
                    )}
                  >
                    {step.title}
                  </span>
                </div>

                {index <
                  totalSteps - 1 && (
                    <div
                      className={clsx(
                        "mx-4 mb-6 h-1 w-20 rounded-full transition-colors duration-300",
                        completed
                          ? "bg-cyan-500"
                          : "bg-slate-700"
                      )}
                    />
                  )}
              </div>
            );
          }
        )}
      </div>

      {/* Mobile */}

      <div className="text-center md:hidden">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-900 text-base font-semibold text-cyan-400">
          {currentStep}
        </div>

        <p className="mt-3 text-sm text-slate-400">
          Step {currentStep} of{" "}
          {totalSteps}
        </p>

        <p className="mt-1 font-semibold text-cyan-400">
          {
            consultationSteps[currentStep - 1]
              ?.title
          }
        </p>
      </div>
    </div>
  );
};

export default ConsultationProgress;