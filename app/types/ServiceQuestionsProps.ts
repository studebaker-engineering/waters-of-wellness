import type { ServiceLinkType } from "./ServiceLinkType";

interface ServiceLinkQuestion {
	title: string;
	answer: string;
}

export interface ServiceQuestionsProps {
	serviceLinkType: ServiceLinkType;
	questions: ServiceLinkQuestion[];
}
