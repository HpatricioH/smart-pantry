'use server'

import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate/EmailTemplate";
import type { ShoppingListItemsTypesProps } from "packages/types/src";


export async function submitAction({
  email, 
  pantryData
}: {
  email: string, 
  pantryData: ShoppingListItemsTypesProps
}) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const {data} = await resend.emails.send({
      from: 'Smart Pantry <onboarding@resend.dev>',
      to: email,
      subject: 'Your Smart Pantry Shopping List',
      react: EmailTemplate(pantryData),
    })

    return {ok: true, data}
  } catch (error: unknown) {
    return { ok: false, error: error ?? "Failed to send email" }
  }
}