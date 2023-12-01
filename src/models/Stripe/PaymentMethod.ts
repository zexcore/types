export interface PaymentMethod {
    id: string;
    object: string;
    billing_details: BillingDetails;
    card: Card;
    created: number;
    customer?: null;
    livemode: boolean;
    metadata: Metadata;
    redaction?: null;
    type: string;
  }
  export interface BillingDetails {
    address: Address;
    email: string;
    name?: null;
    phone: string;
  }
  export interface Address {
    city: string;
    country: string;
    line1: string;
    line2?: null;
    postal_code?: null;
    state: string;
  }
  export interface Card {
    brand: string;
    checks: Checks;
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from?: null;
    last4: string;
    networks: Networks;
    three_d_secure_usage: ThreeDSecureUsage;
    wallet?: null;
  }
  export interface Checks {
    address_line1_check?: null;
    address_postal_code_check?: null;
    cvc_check: string;
  }
  export interface Networks {
    available?: (string)[] | null;
    preferred?: null;
  }
  export interface ThreeDSecureUsage {
    supported: boolean;
  }
  export interface Metadata {
    order_id: string;
  }
  