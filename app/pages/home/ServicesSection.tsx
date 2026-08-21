import { EntranceText } from "@/components/EntranceText";
import { LotusIcon, MeditationIcon, SparkleIcon } from "@/components/icons";
import { SERVICE_LINKS } from "@/config/ServiceLinks";
import { ServiceCard } from "./ServiceCard";

const [colonHydrotherapy, detoxWraps, ionicFootDetox] = SERVICE_LINKS;

export const ServicesSection = () => (
	<section className="mb-10">
		<EntranceText>Holistic Care, Personalized to You</EntranceText>
		<div className="grid gap-3 lg:grid-cols-3 mt-2">
			<ServiceCard
				title="Cleansing colon hydrotherapy"
				icon={<MeditationIcon />}
				to={colonHydrotherapy.href}
				badge="New client special"
				duration="90 minutes"
			>
				Refresh your system and support digestive health with personalized colon
				hydrotherapy sessions.
			</ServiceCard>

			<ServiceCard
				title="Lymphatic Detox Wraps"
				icon={<LotusIcon />}
				to={detoxWraps.href}
				badge="New client special"
				duration="60 minutes"
			>
				Revitalize the body with soothing contour body wraps that help release
				toxins and support lymphatic circulation.
			</ServiceCard>

			<ServiceCard
				title="Ionic foot detox"
				icon={<SparkleIcon />}
				to={ionicFootDetox.href}
				badge="Packages Available"
				duration="60 minutes"
			>
				Enhance your wellness routine with a relaxing foot bath designed to
				release toxins and promote restorative balance through osmosis.
			</ServiceCard>
		</div>
	</section>
);
