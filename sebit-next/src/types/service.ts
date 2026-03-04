export type ServiceId = 'si' | 'gis' | 'consulting';

export interface Service {
  id:          ServiceId;
  number:      string;
  icon:        string;
  iconBg:      string;
  title:       string;
  shortDesc:   string;
  longDesc:    string;
  tags:        string[];
  highlights:  string[];
}
