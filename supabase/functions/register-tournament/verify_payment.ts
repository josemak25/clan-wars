interface PayStackResponseInterface {
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

interface VerifyPaymentResponseInterface {
  error: string | null;
  data: PayStackResponseInterface["data"] | null;
}

export const verifyPayment = async (
  payment_reference: string,
  email_address: string,
): Promise<VerifyPaymentResponseInterface> => {
  const result: VerifyPaymentResponseInterface = { error: null, data: null };

  try {
    const request = new Request(
      `https://api.paystack.co/transaction/verify/${payment_reference}`,
      {
        method: "GET",
        headers: {
          // Paystack API KEY - env var exported by default.
          Authorization: `Bearer ${Deno.env.get("PAY_STACK_SECRET_KEY")}`,
        },
      },
    );

    const response = await fetch(request);
    const { data }: PayStackResponseInterface = await response.json();

    // throw error if payment data returned from paystack was not successful
    if (
      data?.status !== "success" ||
      data?.reference !== payment_reference ||
      data?.customer.email !== email_address
    ) {
      throw new Error("Failed to register tournament, no payment's made");
    }

    return { ...result, data };
  } catch (error) {
    return { ...result, error };
  }
};
