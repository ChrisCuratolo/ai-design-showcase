# Prompt Bank — Escalation Templates & Evaluation

This prompt bank contains before/after prompt examples for customer-facing escalation messages and a small evaluation rubric. Use these examples during interviews to show process and measurable improvements.

## Evaluation Rubric (simple)
- Clarity (0-5): Is the message easy to understand? Does it avoid jargon?
- Empathy (0-5): Does it acknowledge impact and show ownership?
- Actionability (0-5): Does it include next steps and an ETA?
- Length (target): Prefer concise updates under 3 sentences for customer-facing messages.

| Example | Prompt A (before) | Prompt B (after) | Clarity | Empathy | Actionability | Notes |
|---|---|---:|---:|---:|---:|---|
| 1 | "We have an incident affecting payments; investigating." | "We’ve detected payment processing errors for some customers; our team is investigating — next update in 30 mins. Can you confirm whether you’re seeing failures on retry?" | 3 | 2 | 3 | Added ETA & user ask |
| 2 | "Service slow. Looking into it." | "We’re investigating higher latency for the API used by billing; mitigation in progress. We’ll update in 20 minutes with impact and next steps." | 3 | 3 | 3 | More specific service mention |

## Before / After examples (expanded)

1) Customer acknowledgement — verbose → concise & empathetic
- Before (A): "Hi, we are aware of an issue impacting transactions across some accounts. Our engineers are looking into it now and we will update you when we have more information. Sorry for the inconvenience."
- After (B): "Hi <Customer>, we’re seeing transaction failures affecting some accounts. We’ve engaged engineering and will provide an update in 30 minutes; temporary mitigation is in place."

2) Internal warroom note — inconsistent → structured
- Before (A): "Payment errors increased, might be a DB issue. Investigating."
- After (B): "Summary: Payment error rate ↑50% since 10:12 UTC. Impact: 12% of transactions failing. Mitigation: traffic shifted to fallback cluster. Owners: @eng-oncall (investigation), @support-lead (customer comms). Next: reproduce locally, trace deploys at 10:05." 

3) Postmortem summary — raw → executive-ready
- Before (A): "We rolled back a deploy; problem caused by null pointer. Monitoring shows improvements."
- After (B): "Action: rolled back 10:05 deploy; root cause: unvalidated edge case leading to null dereference in payments module. Impact: affected 12% transactions for 45 minutes. Remediation: input validation + automated test; scheduled deploy on 09/12."

4) Customer update asking for info — before → after
- Before (A): "Can you provide logs?"
- After (B): "Could you share the exact transaction IDs and the timestamp when you saw the failure? This will help us trace the issue faster."

5) Empathetic closure message — before → after
- Before (A): "Issue resolved."
- After (B): "We’ve resolved the incident affecting payments — transactions are processing again. We removed the faulty deploy and added an automated check to prevent recurrence. Thank you for your patience; reply if you see any residual issues."

---

If you want, I can also add a short CSV with the evaluation results from a small sample (mock) to show how we measured improvements over a prompt set.
