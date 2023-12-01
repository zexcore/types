import { StripeProduct } from "./StripeProduct";

export interface StripeSubscription {
  id: string;
  object: string;
  application?: null;
  application_fee_percent?: null;
  automatic_tax: AutomaticTax;
  billing_cycle_anchor: number;
  billing_thresholds?: null;
  cancel_at?: null;
  cancel_at_period_end: boolean;
  canceled_at?: null;
  cancellation_details: CancellationDetails;
  collection_method: string;
  created: number;
  currency: string;
  current_period_end: number;
  current_period_start: number;
  customer: string;
  days_until_due?: null;
  default_payment_method?: null;
  default_source?: null;
  default_tax_rates?: null[] | null;
  description?: null;
  discount?: null;
  ended_at?: null;
  items: Items;
  latest_invoice: string;
  livemode: boolean;
  metadata: Metadata;
  next_pending_invoice_item_invoice?: null;
  on_behalf_of?: null;
  pause_collection?: null;
  payment_settings: PaymentSettings;
  pending_invoice_item_interval?: null;
  pending_setup_intent: string;
  pending_update?: null;
  schedule?: null;
  start_date: number;
  status: SubscriptionStatus;
  test_clock?: null;
  transfer_data?: null;
  trial_end: number;
  trial_settings: TrialSettings;
  trial_start: number;
}
export enum SubscriptionStatus {
  active = "active",
  past_due = "past_due",
  unpaid = "unpaid",
  canceled = "canceled",
  incomplete = "incomplete",
  incomplete_expired = "incomplete_expired",
  trialing = "trialing",
  paused = "paused",
}

export interface AutomaticTax {
  enabled: boolean;
}
export interface CancellationDetails {
  comment?: null;
  feedback?: null;
  reason?: null;
}
export interface Items {
  object: string;
  data?: DataEntity[] | null;
  has_more: boolean;
  url: string;
}
export interface DataEntity {
  id: string;
  object: string;
  billing_thresholds?: null;
  created: number;
  metadata: Metadata;
  price: Price;
  quantity: number;
  subscription: string;
  tax_rates?: null[] | null;
}
export interface Metadata {}
export interface Price {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount?: null;
  livemode: boolean;
  lookup_key?: null;
  metadata: Metadata;
  nickname?: null;
  product: string;
  recurring: Recurring;
  tax_behavior: string;
  tiers_mode?: null;
  transform_quantity?: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}
export interface Recurring {
  aggregate_usage?: null;
  interval: string;
  interval_count: number;
  usage_type: string;
}
export interface PaymentSettings {
  payment_method_options?: null;
  payment_method_types?: null;
  save_default_payment_method: string;
}
export interface TrialSettings {
  end_behavior: EndBehavior;
}
export interface EndBehavior {
  missing_payment_method: string;
}
