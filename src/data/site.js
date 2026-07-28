/**
 * All site copy and data lives here so the business can be re-skinned
 * without touching component code.
 */

/**
 * PLACEHOLDER CONTACT DETAILS.
 *
 * Every phone number, address and registration below is a fill-in-the-blank
 * marker, not a real one — an invented-but-plausible number would ring a
 * stranger. Replace the values containing X or "Add ..." with your own before
 * the site goes live. `isPlaceholder()` keeps unset values from becoming
 * clickable links.
 */
export const company = {
  name: 'Hubco Spares',
  legal: 'Hubco Spares Pvt. Ltd.',
  tagline: 'Commercial vehicle & industrial spare parts',
  founded: 1978,
  city: 'Ludhiana, Punjab',
  phone: '+91 XXXXX XXXXX',
  whatsapp: '+91 XXXXX XXXXX',
  email: 'counter@example.com',
  hours: 'Mon–Sat, 9:00–19:30 IST',
  gstin: 'Add GSTIN',
  address: 'Add street address, Ludhiana, Punjab',
}

/** True while a value is still an unreplaced placeholder. */
export const isPlaceholder = (value = '') =>
  /X{3,}|^Add\b|example\.com/i.test(value)

/** Link builders that return null while the detail is still a placeholder. */
export const telHref = (n = '') =>
  isPlaceholder(n) ? null : `tel:${n.replace(/[^\d+]/g, '')}`

export const waHref = (n = '') =>
  isPlaceholder(n) ? null : `https://wa.me/${n.replace(/\D/g, '')}`

export const mailHref = (e = '') => (isPlaceholder(e) ? null : `mailto:${e}`)

export const stats = [
  { value: 42000, suffix: '+', label: 'Part numbers stocked', icon: 'sku' },
  { value: 6, suffix: '', label: 'Warehouses', icon: 'warehouse' },
  { value: 1240, suffix: '+', label: 'Workshops supplied', icon: 'workshop' },
  { value: 58, suffix: '', label: 'People on the team', icon: 'people' },
  { value: 94, suffix: '%', label: 'Same-day dispatch', icon: 'truck' },
  { value: 46, suffix: '', label: 'Years at the counter', icon: 'clock' },
]

export const categories = [
  {
    code: 'CAT-01',
    name: 'Braking',
    items: 'Linings, discs, calipers, slack adjusters, air dryers',
    range: 'BRK 1000–4899',
  },
  {
    code: 'CAT-02',
    name: 'Bearings & seals',
    items: 'Taper rollers, hub units, oil seals, circlips',
    range: 'BRG 6000–6899',
  },
  {
    code: 'CAT-03',
    name: 'Filtration',
    items: 'Oil, fuel, air, hydraulic and cabin elements',
    range: 'FLT 2200–2790',
  },
  {
    code: 'CAT-04',
    name: 'Transmission',
    items: 'Clutch plates, cover assemblies, synchro rings, UJ crosses',
    range: 'TRN 5100–5960',
  },
  {
    code: 'CAT-05',
    name: 'Suspension & steering',
    items: 'Leaf springs, bushes, tie rod ends, king pin kits',
    range: 'SUS 3000–3720',
  },
  {
    code: 'CAT-06',
    name: 'Electricals',
    items: 'Starters, alternators, relays, sensors, harnesses',
    range: 'ELC 7000–7845',
  },
]

export const process = [
  {
    step: 'Step 01',
    title: 'Tell us the vehicle',
    body: 'Chassis number, model year, or the old part in your hand. No catalogue number needed — that is our job, not yours.',
  },
  {
    step: 'Step 02',
    title: 'We cross-reference',
    body: 'Our counter matches your vehicle against OEM numbers and every aftermarket equivalent we carry, then quotes both.',
  },
  {
    step: 'Step 03',
    title: 'Picked, boxed, dispatched',
    body: 'Orders confirmed before 16:00 leave the same evening. Every box carries the part number, the batch, and the invoice line.',
  },
]

export const journey = [
  {
    year: '1978',
    title: 'One counter on Gill Road',
    body: 'Harbans Lal Jain opens a single-window shop selling clutch plates and leaf springs to the truck operators parked outside. Stock fits on four shelves; the ledger is handwritten.',
    tag: '4 shelves · 90 part numbers',
  },
  {
    year: '1986',
    title: 'From counter to distribution',
    body: 'Demand from fleet garages outgrows retail. Hubco takes its first distribution territory for braking components across three districts and hires two travelling salesmen.',
    tag: 'First territory',
  },
  {
    year: '1994',
    title: 'First OEM authorisation',
    body: 'A bearing manufacturer appoints Hubco as an authorised stockist — the first agreement that requires audited stock records and genuine-parts handling.',
    tag: 'Authorised stockist',
  },
  {
    year: '2003',
    title: 'The Ludhiana warehouse',
    body: 'A 22,000 sq ft racked warehouse replaces three rented godowns. Bin locations are assigned to every part number, cutting a two-hour search to four minutes.',
    tag: '22,000 sq ft',
  },
  {
    year: '2011',
    title: 'The catalogue goes digital',
    body: 'Thirty-three years of fitment knowledge is typed into a searchable cross-reference. Counter staff can now answer a chassis number in seconds instead of from memory.',
    tag: '18,400 numbers indexed',
  },
  {
    year: '2018',
    title: 'Six warehouses, one stock view',
    body: 'Branches in Delhi, Jaipur, Indore, Nagpur and Guwahati come online against a single live inventory. A part missing in one city ships overnight from another.',
    tag: '5 branches added',
  },
  {
    year: '2024',
    title: 'Same-evening dispatch',
    body: 'Pick-and-pack is re-sequenced around courier cut-offs. 94% of confirmed orders now leave the building the day they are placed.',
    tag: '94% same-day',
  },
]

export const partners = [
  {
    brand: 'Norlund',
    glyph: 'NL',
    category: 'Bearings & seals',
    since: 1994,
    coverage: 'North & Central India',
    prefix: 'NL-6000',
  },
  {
    brand: 'Vantek',
    glyph: 'VT',
    category: 'Braking systems',
    since: 2001,
    coverage: 'Punjab, Haryana, Delhi NCR',
    prefix: 'VT-4100',
  },
  {
    brand: 'Sahara Filtration',
    glyph: 'SF',
    category: 'Filters & elements',
    since: 2006,
    coverage: 'Nationwide',
    prefix: 'SF-2200',
  },
  {
    brand: 'Kestrel Seals',
    glyph: 'KS',
    category: 'Gaskets & oil seals',
    since: 2009,
    coverage: 'North India',
    prefix: 'KS-8300',
  },
  {
    brand: 'Dhruv Drivetrain',
    glyph: 'DD',
    category: 'Clutch & transmission',
    since: 2013,
    coverage: 'Nationwide',
    prefix: 'DD-5100',
  },
  {
    brand: 'Orbis Electricals',
    glyph: 'OE',
    category: 'Starters & alternators',
    since: 2016,
    coverage: 'North, West & East',
    prefix: 'OB-7000',
  },
  {
    brand: 'Meridian Springs',
    glyph: 'MS',
    category: 'Suspension',
    since: 2019,
    coverage: 'Punjab & Rajasthan',
    prefix: 'MR-3000',
  },
  {
    brand: 'Tarang Hydraulics',
    glyph: 'TH',
    category: 'Hydraulic lines',
    since: 2022,
    coverage: 'Central India',
    prefix: 'TG-9400',
  },
]

export const team = [
  {
    name: 'Harbans Lal Jain',
    initials: 'HJ',
    role: 'Founder',
    note: 'Opened the Gill Road counter in 1978 and still reviews every new supplier agreement before it is signed.',
    desk: 'Ludhiana',
    years: 'Since 1978',
  },
  {
    name: 'Nisha Jain',
    initials: 'NJ',
    role: 'Managing Director',
    note: 'Runs distribution across six branches. Set the same-evening dispatch target and rebuilt the pick sequence to hit it.',
    desk: 'Ludhiana',
    years: 'Since 2004',
  },
  {
    name: 'Rakesh Verma',
    initials: 'RV',
    role: 'Head of Counter',
    note: 'Thirty years of fitment knowledge. If a chassis number stumps the catalogue, it reaches his desk.',
    desk: 'Ludhiana',
    years: 'Since 1995',
  },
  {
    name: 'Simran Kaur',
    initials: 'SK',
    role: 'Inventory Controller',
    note: 'Owns the live stock view. Decides what is held where, and what gets reordered before it runs dry.',
    desk: 'Delhi',
    years: 'Since 2012',
  },
  {
    name: 'Imran Sheikh',
    initials: 'IS',
    role: 'Quality & Returns',
    note: 'Inspects incoming batches and handles warranty claims end to end, including the paperwork with the manufacturer.',
    desk: 'Ludhiana',
    years: 'Since 2010',
  },
  {
    name: 'Anil Deshpande',
    initials: 'AD',
    role: 'Regional Manager, West',
    note: 'Covers Nagpur and Indore. Spends four days a week inside customer workshops, not in an office.',
    desk: 'Nagpur',
    years: 'Since 2016',
  },
]

export const routing = [
  { q: 'A part number you cannot find', a: 'Rakesh Verma · Counter' },
  { q: 'Bulk or fleet pricing', a: 'Anil Deshpande · Regional' },
  { q: 'Stock availability across branches', a: 'Simran Kaur · Inventory' },
  { q: 'A warranty claim or wrong-fit return', a: 'Imran Sheikh · Quality' },
  { q: 'Becoming a stockist or distributor', a: 'Nisha Jain · Management' },
]

export const branches = [
  {
    city: 'Ludhiana',
    role: 'Head office & main warehouse',
    address: 'Add street address · Ludhiana, Punjab',
    tel: '+91 XXXXX XXXXX',
  },
  {
    city: 'Delhi NCR',
    role: 'Branch warehouse',
    address: 'Add street address · Ghaziabad, Uttar Pradesh',
    tel: '+91 XXXXX XXXXX',
  },
  {
    city: 'Jaipur',
    role: 'Branch warehouse',
    address: 'Add street address · Jaipur, Rajasthan',
    tel: '+91 XXXXX XXXXX',
  },
  {
    city: 'Nagpur',
    role: 'Regional depot',
    address: 'Add street address · Nagpur, Maharashtra',
    tel: '+91 XXXXX XXXXX',
  },
  {
    city: 'Indore',
    role: 'Regional depot',
    address: 'Add street address · Indore, Madhya Pradesh',
    tel: '+91 XXXXX XXXXX',
  },
  {
    city: 'Guwahati',
    role: 'Regional depot',
    address: 'Add street address · Guwahati, Assam',
    tel: '+91 XXXXX XXXXX',
  },
]

export const navItems = [
  { to: '/', label: 'Home', code: '01' },
  { to: '/about', label: 'About us', code: '02' },
  { to: '/journey', label: 'Our journey', code: '03' },
  { to: '/partners', label: 'Our partners', code: '04' },
  { to: '/team', label: 'Our team', code: '05' },
  { to: '/contact', label: 'Contact us', code: '06' },
]
