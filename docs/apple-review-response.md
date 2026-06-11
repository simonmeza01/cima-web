# Respuesta a Apple Review — CIMA-AI
**Submission ID:** 0405a416-27ff-4729-a21b-e3515c8a4d63  
**Fecha:** junio 2026

---

## Respuesta a Guideline 4.8 — Login Services

Hi App Review Team,

Thank you for your feedback on CIMA-AI. We acknowledge the requirement under Guideline 4.8 and we are currently implementing **Sign in with Apple** in the app as an equivalent login option alongside Google Sign-In and email/password.

Sign in with Apple satisfies all three requirements of the guideline:
- It limits data collection to the user's name and email address.
- It allows users to keep their email address private (Hide My Email).
- It does not collect app interactions for advertising purposes.

We will submit an updated build with Sign in with Apple included shortly. We appreciate your patience.

---

## Respuesta a Guideline 2.1 — Information Needed (Crypto)

Hi App Review Team,

We are happy to clarify this point in full.

**CIMA is a personal budgeting and expense tracker — it is not a cryptocurrency platform.**

Here is a precise description of what CIMA does and does not do:

**What CIMA does:**
- Allows users to manually log income and expenses in their preferred currency denomination (VES, USD, USDT).
- Displays manually entered balances and transaction history.
- Shows BCV (Venezuela's Central Bank) official and parallel exchange rates for informational reference.
- Sends push notification budget alerts when users approach or exceed a spending limit they set.

**What CIMA does NOT do:**
- It does not buy, sell, send, receive, or custody any cryptocurrency or digital asset.
- It does not connect to any blockchain, crypto exchange, DeFi protocol, or external wallet.
- It does not access any bank account, credit card, or financial institution.
- It does not process any real money transactions of any kind.

**Regarding USDT:**  
USDT (Tether) is included as a tracking denomination because it is widely used in Venezuela as a stable store of value, in the same way people in other countries might save in euros or pounds. In CIMA, "USDT" is purely a label for an account — the user types in a number representing how much they have saved or spent in that denomination. There is no blockchain interaction whatsoever. This is equivalent to a user writing "USDT: 500" in a spreadsheet.

**The app is equivalent to a digital notebook or spreadsheet for personal finances.** All data is self-reported by the user. No external financial data is ever fetched or modified.

We have updated our privacy policy at https://cima-app.vercel.app/privacy to make this distinction explicit in a dedicated "Naturaleza del servicio" (Nature of the Service) section.

We hope this clarification fully addresses the question under Guideline 2.1.

---

## Respuesta a Guideline 5.1.1(ix) — Organization Account Requirement

Hi App Review Team,

We respectfully request reconsideration of the requirement to submit CIMA under an organization Apple Developer account.

Guideline 5.1.1(ix) applies to apps operating in **highly regulated fields** such as banking, brokerage, insurance, or healthcare, or apps that handle sensitive regulated data on behalf of users. We believe CIMA does not fall into this category for the following reasons:

1. **CIMA is a personal budgeting app, not a financial service.**  
   It is functionally equivalent to well-known apps such as Spending Tracker, Budget Planner, or Wallet — Budget & Finance Tracker, all of which are available on the App Store under individual developer accounts. CIMA provides the same category of service: a manual expense diary.

2. **No regulated financial service is provided.**  
   CIMA does not hold, transfer, invest, or manage user funds. It does not provide financial advice, brokerage services, lending, or any service that would require a financial license or regulatory approval. Users simply record their own numbers.

3. **No sensitive financial data is accessed externally.**  
   All financial data in CIMA is manually entered by the user themselves. The app never connects to any bank, payment processor, or financial institution. The only external data fetched is publicly available exchange rate information (BCV official rates).

4. **The USDT denomination is not a crypto feature.**  
   As explained in the Guideline 2.1 response above, USDT in CIMA is a tracking label — not a blockchain or cryptocurrency feature. This is analogous to apps that let users log amounts in euros or pounds without being regulated by the ECB or Bank of England.

We have updated our app's privacy policy and marketing materials to make the nature of the service unambiguous. We are confident that CIMA fits the profile of a personal productivity/finance tracking app, not a highly regulated financial service.

If after reviewing this explanation the team still determines that an organization account is required, we will explore converting our individual account to an organization account via Apple Developer Support, as your guidelines permit. However, we believe a reconsideration is warranted given that CIMA's functionality is equivalent to a digital spreadsheet for personal finances.

Thank you for your time and thorough review. We look forward to your response.

**Simon Meza**  
Developer, CIMA  
simonmcode01@gmail.com

---

## Checklist de acciones tomadas

- [x] Politica de privacidad actualizada: nueva seccion "0. Naturaleza del servicio" que aclara explicitamente que CIMA no es una plataforma crypto ni financiera
- [x] Landing page: "Multi-currency wallets" → "Cuentas en múltiples monedas"; "Portafolio de inversiones" → "Seguimiento de patrimonio"
- [x] FAQ de soporte: USDT aclarado como denominacion de seguimiento; nuevas preguntas sobre crypto y banca
- [x] Pricing page: "Portafolio de inversiones" → "Seguimiento de patrimonio personal"
- [x] Metadata OpenGraph: actualizado para enfatizar "manually log" y "no bank connections"
- [ ] **Pendiente (Flutter):** Implementar Sign in with Apple en `FinanceBro` para resolver Guideline 4.8
- [ ] **Pendiente (App Store Connect):** Revisar descripcion de la app en ASC para alinear con el mensaje de "budget tracker, not fintech"
- [ ] **Pendiente (App Store Connect):** Enviar las respuestas anteriores a Apple Review via el hilo de mensajes en App Store Connect
