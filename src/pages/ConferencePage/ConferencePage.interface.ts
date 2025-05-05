import { ConferenceCardDetails } from "../../components/conferenceCard/ConferenceCard.interface";

interface ConferenceDetail extends ConferenceCardDetails {
  finalDate: string;
}

interface ConferenceTopic {
  direction: string;
}

interface ConferenceCondition {
  date: string;
  cost: number;
  costOnline: number
}

export interface IConferencePage {
  id: string;
  title: string;
  details: ConferenceDetail;
  topics: ConferenceTopic[];
  conditions: ConferenceCondition;
}