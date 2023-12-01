export type StripeCoupon = {
  id: string;
  amount_off?: number;
  created: number;
  currency: string;
  duration: string;
  duration_in_months: number;
  livemode: boolean;
  max_redemptions?: any;
  metadata: any;
  name: string;
  percent_off: number;
  redeem_by?: number;
  times_redeemed: number;
  valid: boolean;
};
