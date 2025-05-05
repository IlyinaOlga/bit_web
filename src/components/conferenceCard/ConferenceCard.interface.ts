export interface ConferenceCardDetails {
  country: string,
  city: string,
  period: string,
}

export interface IConferenceCard {
  id: string;
  title: string;
  details: ConferenceCardDetails;
}