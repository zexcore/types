export interface Invoice {
    id: string;
    object: string;
    account_country: string;
    account_name: string;
    account_tax_ids?: null;
    amount_due: number;
    amount_paid: number;
    amount_remaining: number;
    amount_shipping: number;
    application?: null;
    application_fee_amount?: null;
    attempt_count: number;
    attempted: boolean;
    auto_advance: boolean;
    automatic_tax: AutomaticTax;
    billing_reason: string;
    charge?: null;
    collection_method: string;
    created: number;
    currency: string;
    custom_fields?: null;
    customer: string;
    customer_address?: null;
    customer_email?: null;
    customer_name?: null;
    customer_phone?: null;
    customer_shipping?: null;
    customer_tax_exempt: string;
    customer_tax_ids?: (null)[] | null;
    default_payment_method?: null;
    default_source?: null;
    default_tax_rates?: (null)[] | null;
    description?: null;
    discount?: null;
    discounts?: (null)[] | null;
    due_date?: null;
    effective_at?: null;
    ending_balance?: null;
    footer?: null;
    from_invoice?: null;
    hosted_invoice_url?: null;
    invoice_pdf?: null;
    last_finalization_error?: null;
    latest_revision?: null;
    lines: Lines;
    livemode: boolean;
    metadata: Metadata;
    next_payment_attempt?: null;
    number?: null;
    on_behalf_of?: null;
    paid: boolean;
    paid_out_of_band: boolean;
    payment_intent?: null;
    payment_settings: PaymentSettings;
    period_end: number;
    period_start: number;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    quote?: null;
    receipt_number?: null;
    redaction?: null;
    rendering_options?: null;
    shipping_cost?: null;
    shipping_details?: null;
    starting_balance: number;
    statement_descriptor?: null;
    status: InvoiceStatus;
    status_transitions: StatusTransitions;
    subscription?: null;
    subtotal: number;
    subtotal_excluding_tax: number;
    tax?: null;
    test_clock?: null;
    total: number;
    total_discount_amounts?: (null)[] | null;
    total_excluding_tax: number;
    total_tax_amounts?: (null)[] | null;
    transfer_data?: null;
    webhooks_delivered_at?: null;
  }
  export enum InvoiceStatus {
    draft="draft",
open="open",
void="void",
paid="paid",
uncollectible="uncollectible"
  }
  export interface AutomaticTax {
    enabled: boolean;
    status?: null;
  }
  export interface Lines {
    object: string;
    data?: (DataEntity)[] | null;
    has_more: boolean;
    url: string;
  }
  export interface DataEntity {
    id: string;
    object: string;
    amount: number;
    amount_excluding_tax: number;
    currency: string;
    description: string;
    discount_amounts?: (null)[] | null;
    discountable: boolean;
    discounts?: (null)[] | null;
    invoice_item: string;
    livemode: boolean;
    metadata: Metadata;
    period: Period;
    price: Price;
    proration: boolean;
    proration_details: ProrationDetails;
    quantity: number;
    subscription?: null;
    tax_amounts?: (null)[] | null;
    tax_rates?: (null)[] | null;
    type: string;
    unit_amount_excluding_tax: string;
  }
  export interface Metadata {
  }
  export interface Period {
    end: number;
    start: number;
  }
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
    recurring?: null;
    tax_behavior: string;
    tiers_mode?: null;
    transform_quantity?: null;
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
  }
  export interface ProrationDetails {
    credited_items?: null;
  }
  export interface PaymentSettings {
    default_mandate?: null;
    payment_method_options?: null;
    payment_method_types?: null;
  }
  export interface StatusTransitions {
    finalized_at?: null;
    marked_uncollectible_at?: null;
    paid_at?: null;
    voided_at?: null;
  }
  