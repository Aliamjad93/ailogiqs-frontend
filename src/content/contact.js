/**
 * The studio's contact details — ONE copy.
 *
 * Imported by the footer, the offcanvas drawer and the /contact page. They used
 * to be duplicated in all three and had drifted: the contact page printed
 * "+932016146851" (that is +93 Afghanistan, not +92 Pakistan) and advertised
 * "Sun to Fri" opening hours while the drawer said Monday to Friday.
 *
 * Change a value here and every surface follows.
 */
export const CONTACT = {
  name: "AiLogiQs",
  address: "Office No. 302, Orchard Heights, Central Block, 4th Floor, Lahore",
  email: "bd@ailogiqs.org",
  emailHref: "mailto:bd@ailogiqs.org",
  phone: "0301-6146851",
  /* International form for the dialler. The local "0301…" form only resolves
     on a Pakistani SIM, so the href carries +92 even though the label does not. */
  phoneHref: "tel:+923016146851",
  hours: "Mon–Fri, 9 AM – 5 PM",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Orchard+Heights%2C+Central+Block%2C+Lahore",
};
