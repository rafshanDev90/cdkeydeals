import { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ - CDKeyDeals | Frequently Asked Questions',
  description: 'Find answers to common questions about CDKeyDeals services, digital product delivery, payments, refunds, and customer support.',
}

export default function FAQPage() {
  return <FAQClient />
}
