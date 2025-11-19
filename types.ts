import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepItem {
  id: number;
  title: string;
}

export interface TargetAudienceItem {
  title: string;
  description: string;
}