/**
 * Company details used across the site.
 * TODO: the contact values below are placeholders. Replace them with the
 * real Crown Homes details before the site goes live.
 */
export const site = {
  name: "Crown Homes",
  description:
    "Crown Homes is a real estate company. Our new website opens soon.",
  // PLACEHOLDER: real inbox needed
  email: "hello@example.com",
  // PLACEHOLDER: international format, digits only (country code first, no +)
  whatsapp: "0000000000",
} as const;

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Crown Homes enquiry",
)}`;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Crown Homes, I would like to know more about your properties.",
)}`;
