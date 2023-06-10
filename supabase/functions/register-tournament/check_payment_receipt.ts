import { supabaseAdmin } from "../_shared/supabaseAdmin.ts";
import { ITournamentPaymentReceipt } from "../../../types/index.d.ts";

export const checkPaymentReceipt = async (
  tournament_id: string,
  payment_reference: string,
) => {
  const result: { error: Error | null } = { error: null };

  // check if user has already paid or reusing an existing payment_receipts for a tournament
  const { data: payment_receipt, error: payment_receipts_error } =
    await supabaseAdmin
      .from<"tournament_payment_receipts", ITournamentPaymentReceipt>(
        "tournament_payment_receipts",
      )
      .select("id")
      .eq("payment_reference", payment_reference)
      .eq("tournament_id", tournament_id);

  // throw error if payment reference already exit
  if (payment_receipt) {
    result.error = new Error("Already registered for this tournament!");
  }

  // throw error if payment reference error occurred
  if (payment_receipts_error) {
    throw payment_receipts_error;
  }

  return result;
};
