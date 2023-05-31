interface ResponseInterface {
  status: boolean;
  message: string;
  data: {
    id: number;
    fees: number;
    domain: string;
    status: string;
    amount: number;
    paidAt: string;
    paid_at: string;
    channel: string;
    currency: string;
    metadata: string;
    reference: string;
    createdAt: string;
    created_at: string;
    ip_address: string;
    plan: string | null;
    message: string | null;
    order_id: string | null;
    requested_amount: number;
    transaction_date: string;
    gateway_response: string;
    log: Record<string, unknown>;
    customer: Record<string, unknown>;
    fees_split: Record<string, unknown>;
    subaccount: Record<string, unknown>;
    plan_object: Record<string, unknown>;
    authorization: Record<string, unknown>;
  };
}

export const verifyPayment = async (
  payment_reference: string,
): Promise<ResponseInterface["data"]> => {
  const request = new Request(
    `https://api.paystack.co/transaction/verify/${payment_reference}`,
    {
      method: "GET",
      headers: {
        // Paystack API KEY - env var exported by default.
        Authorization: Deno.env.get("PAY_STACK_PUBLIC_KEY") ?? "",
      },
    },
  );

  const response = await fetch(request);
  const { data }: ResponseInterface = await response.json();
  return data;
};
