import Button from "../../../../components/ui/Button";
import Text from "../../../../components/ui/Text";

import TopicCard from "../TopicCard";

import { consultationService } from "../../services/consultationService";

import type {
  ConsultationServiceSelection,
} from "../../types/consultation.types";

interface TopicStepProps {
  consultationServices: ConsultationServiceSelection[];

  onChange: (
    consultationServices: ConsultationServiceSelection[]
  ) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const formatCategory = (
  category: string
): string =>
  category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

const TopicStep = ({
  consultationServices,
  onChange,
  onPrevious,
  onContinue,
}: TopicStepProps) => {
  if (!consultationServices.length) {
    return (
      <div className="space-y-6">
        <Text className="text-slate-400">
          Please select at least one consultation service first.
        </Text>

        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Back
        </Button>
      </div>
    );
  }

  const toggleTopic = (
    category: ConsultationServiceSelection["category"],
    topicId: string
  ) => {
    onChange(
      consultationServices.map((service) => {
        if (service.category !== category) {
          return service;
        }

        const exists =
          service.topics.includes(topicId);

        return {
          ...service,
          topics: exists
            ? service.topics.filter(
                (id) => id !== topicId
              )
            : [...service.topics, topicId],
        };
      })
    );
  };

  const canContinue =
    consultationServices.every(
      (service) => service.topics.length > 0
    );

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <Text className="font-medium text-cyan-300">
          Select one or more topics for each
          consultation service.
        </Text>

        <Text className="mt-1 text-sm text-slate-400">
          Every selected service must have at
          least one topic before you can
          continue.
        </Text>
      </div>

      {consultationServices.map((service) => {
        const availableTopics =
          consultationService.getTopicsByCategory(
            service.category
          );

        return (
          <div
            key={service.category}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <Text className="text-lg font-semibold text-white">
                {formatCategory(
                  service.category
                )}
              </Text>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  service.topics.length > 0
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "bg-amber-500/15 text-amber-300"
                }`}
              >
                {service.topics.length} topic
                {service.topics.length !== 1
                  ? "s"
                  : ""}{" "}
                selected
              </span>
            </div>

            <div className="space-y-4">
              {availableTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  selected={service.topics.includes(
                    topic.id
                  )}
                  onSelect={() =>
                    toggleTopic(
                      service.category,
                      topic.id
                    )
                  }
                />
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Previous
        </Button>

        <Button
          onClick={onContinue}
          disabled={!canContinue}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TopicStep;