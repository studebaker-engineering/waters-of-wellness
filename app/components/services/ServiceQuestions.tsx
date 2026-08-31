import type { ServiceQuestionsProps } from "@/types";
import { EntranceText } from "../EntranceText";
import { RevealSection } from "../RevealSection";
import { ServicesFAQLink } from "./ServicesFAQLink";

export const ServiceQuestions = ({
	serviceLinkType,
	questions,
}: ServiceQuestionsProps) => (
	<section>
		<div className="p-5 bg-seafoam-100/25 rounded-lg">
			<EntranceText as="h3" className="text-md">
				Common Questions
			</EntranceText>
			<div className="mb-5">
				{questions.map((question) => (
					<RevealSection
						key={question.title}
						title={question.title}
						id={question.answer}
						variant="small"
					>
						<p>{question.answer}</p>
					</RevealSection>
				))}
			</div>

			<ServicesFAQLink serviceLinkType={serviceLinkType} />
		</div>
	</section>
);
