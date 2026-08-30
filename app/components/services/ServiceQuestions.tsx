import type { ServiceQuestionsProps } from "@/types";
import { EntranceText } from "../EntranceText";
import { ServicesFAQLink } from "./ServicesFAQLink";

export const ServiceQuestions = ({
	serviceLinkType,
	questions,
}: ServiceQuestionsProps) => (
	<section id="common-questions">
		<div className="p-5 bg-seafoam-100/25 hover:bg-seafoam-100 transition-hover rounded-lg">
			<EntranceText as="h3" className="mb-3">
				Common Questions
			</EntranceText>
			{questions.map((question) => (
				<div key={question.title}>
					<h4 className="font-medium">{question.title}</h4>
					<p className="text-lg mb-5">{question.answer}</p>
				</div>
			))}

			<ServicesFAQLink serviceLinkType={serviceLinkType} />
		</div>
	</section>
);
