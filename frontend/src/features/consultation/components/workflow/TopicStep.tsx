import Button from "../../../../components/ui/Button";

import TopicCard from "../TopicCard";

import { consultationService } from "../../services/consultationService";

import type { ConsultationCategory } from "../../types/consultation.types";

interface TopicStepProps {
  category: ConsultationCategory | "";
  topics: string[];

  onChange: (topics: string[]) => void;

  onPrevious: () => void;
  onContinue: () => void;
}

const TopicStep = ({
  category,
  topics,
  onChange,
  onPrevious,
  onContinue,
}: TopicStepProps) => {
  if (!category) {
    return (
      <div className="space-y-6">

        <p className="text-slate-400">
          Please select a consultation category first.
        </p>

        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Back
        </Button>

      </div>
    );
  }

  const availableTopics =
    consultationService.getTopicsByCategory(category);

  const handleToggle = (topicId: string) => {
    if (topics.includes(topicId)) {
      onChange(topics.filter(id => id !== topicId));
    } else {
      onChange([...topics, topicId]);
    }
  };

  return (
    <div className="space-y-6">

      <div className="space-y-4">

        {availableTopics.map((item) => (
          <TopicCard
            key={item.id}
            topic={item}
            selected={topics.includes(item.id)}
            onSelect={() => handleToggle(item.id)}
          />
        ))}

      </div>

      <div className="flex justify-between">

        <Button
          variant="secondary"
          onClick={onPrevious}
        >
          Previous
        </Button>

        <Button
          onClick={onContinue}
          disabled={topics.length === 0}
        >
          Next
        </Button>

      </div>

    </div>
  );
};

export default TopicStep;