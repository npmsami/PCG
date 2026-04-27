export const blogTopics = [
  { id: 'roof-repair', label: 'Roof Repair' },
  { id: 'storm-damage', label: 'Storm Damage' },
  { id: 'insurance', label: 'Insurance Claims' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'materials', label: 'Materials' },
  { id: 'inspections', label: 'Inspections' },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  topic: string;
  publishDate: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'roof-repair-vs-replacement-texas',
    title: 'Roof Repair vs. Replacement: How to Know Which One You Need',
    excerpt: 'Not every roof problem calls for a full replacement. Learn the signs that separate a straightforward repair from a full tear-off, and what to expect from each.',
    content: `When homeowners in Texas notice a leak or missing shingles, the first question is usually: "Do I need a repair or a full replacement?" The answer depends on several factors, and understanding them can save you thousands of dollars.

When a repair is enough:
- The damage is limited to a small area (less than 30% of the roof surface)
- Your roof is less than 15 years old and the rest of the shingles are in good condition
- The leak is isolated to a single flashing point, pipe collar, or valley
- No widespread granule loss is visible in your gutters

When replacement is the better investment:
- The roof is more than 20–25 years old
- Multiple layers of shingles are already present (re-roofing over two layers is rarely advisable)
- Storm damage covers a large portion of the roof
- You are selling the home and want to maximize value
- Repeated repairs over the past few years have added up

The insurance angle:
In Texas, insurance companies often cover full replacement when storm damage (hail, wind, tornado) is widespread enough. A qualified roofing contractor can document the damage and help determine whether a claim is worth filing. Filing incorrectly or prematurely can affect future premiums, so this is a step worth doing carefully.

What PCG Roofing recommends:
Always start with a free inspection. Our team will give you an honest assessment—no upselling, no pressure. We'll show you photos of the damage, explain your options, and let you decide. If a repair is all you need, that's what we'll recommend.`,
    topic: 'roof-repair',
    publishDate: '2026-04-20',
    readTime: 7,
  },
  {
    id: '2',
    slug: 'hail-damage-roof-texas-what-to-do',
    title: 'Hail Hit Your Texas Roof? Here\'s Exactly What to Do Next',
    excerpt: 'Texas hailstorms can cause serious roof damage that isn\'t always visible from the ground. This step-by-step guide walks you through inspecting, documenting, and filing a claim.',
    content: `Texas sees more hailstorms than almost any other state. The DFW Metroplex, San Antonio, and Austin corridor are among the most hail-prone regions in the country. If your area recently had a hailstorm, here is what to do.

Step 1: Do not go on the roof yourself
Hail-damaged shingles can be slippery and brittle. Leave the physical inspection to a licensed roofing professional. What you can safely do is walk around the perimeter and look for:
- Dented or cracked gutters and downspouts
- Dented AC unit fins
- Dings in siding or window trim
These are proxy indicators of hail size and impact force.

Step 2: Call a licensed Texas roofer for a free inspection
A qualified inspector will look for:
- Circular bruising or soft-spot dents on asphalt shingles
- Cracked or broken fiberglass mat beneath the granule surface
- Missing granules (which accelerate UV degradation and shorten roof life)
- Damaged ridge cap, flashing, and pipe collars

Step 3: Document everything before any work begins
Before signing any contract, get the inspection photos from your roofer. You will need them for the insurance claim. A reputable contractor will provide these at no charge.

Step 4: File the insurance claim promptly
Texas homeowner policies typically require claims to be filed within one year of the date of loss (check your specific policy). Filing late can result in denial. Your roofer can meet with the insurance adjuster on your behalf to ensure all damage is included in the adjuster's report.

Step 5: Understand your deductible
Most Texas policies have a separate wind/hail deductible—often 1% to 2% of your home's insured value. On a $300,000 home, that is $3,000–$6,000 out of pocket. Make sure you understand this before the work begins.

PCG Roofing provides free hail damage inspections across Texas. We work directly with your insurance company and only recommend replacement when the damage genuinely warrants it.`,
    topic: 'storm-damage',
    publishDate: '2026-04-15',
    readTime: 9,
  },
  {
    id: '3',
    slug: 'roofing-insurance-claim-texas-guide',
    title: 'The Complete Guide to Filing a Roofing Insurance Claim in Texas',
    excerpt: 'Insurance claims for roof damage can be complicated and time-sensitive. This guide explains the process from inspection to payout so you know exactly what to expect.',
    content: `Filing a roofing insurance claim can feel overwhelming, especially when you are already dealing with the stress of storm damage. This guide walks you through the process in plain language.

Who handles the claim?
Your homeowner's insurance company handles the claim. You file the claim with them, they send an adjuster to evaluate the damage, and they determine the payout based on your policy terms. A licensed roofing contractor can help you prepare for and participate in the adjuster's visit.

What your policy likely covers:
- Wind and hail damage (usually covered under a separate deductible)
- Damage from falling trees or branches
- Ice dam damage
- Fire damage

What is typically not covered:
- Normal wear and tear (age-related deterioration)
- Pre-existing damage noted at the time the policy was issued
- Lack of maintenance (e.g., gutters clogged for years leading to water damage)

The claim timeline:
1. Storm occurs → inspect within 1–2 weeks
2. File claim with insurance → adjuster scheduled (typically 1–3 weeks)
3. Adjuster visit → estimate issued (1–2 weeks)
4. Review estimate with your contractor → negotiate if items are missing
5. Claim approved → work scheduled → complete in 1–3 days
6. Final inspection → insurance releases any depreciation holdback

Actual Cash Value (ACV) vs. Replacement Cost Value (RCV):
ACV policies deduct depreciation—meaning a 15-year-old roof may only pay out a fraction of replacement cost. RCV policies pay the full replacement cost once work is complete. Review your policy before filing.

Red flags to avoid:
- Contractors who offer to "waive your deductible"—this is insurance fraud in Texas
- Storm chasers who show up door-to-door after a storm with high-pressure tactics
- Any contractor who asks you to sign over your Assignment of Benefits (AOB) before work begins

PCG Roofing assists homeowners throughout the claim process at no additional cost. We attend the adjuster inspection, review the estimate, and work within the approved scope. You pay only your deductible—nothing more.`,
    topic: 'insurance',
    publishDate: '2026-04-08',
    readTime: 11,
  },
  {
    id: '4',
    slug: 'how-long-does-roof-replacement-take-texas',
    title: 'How Long Does a Roof Replacement Take in Texas?',
    excerpt: 'Most homeowners are surprised by how fast a professional roof replacement goes. Here\'s a realistic timeline and what affects the schedule.',
    content: `One of the most common questions we hear is: "How long will this take?" The short answer is that most residential roofs in Texas are completed in one to three days. Here is a more detailed breakdown.

Typical timeline for a standard residential replacement:

Day 1 (sometimes Day 2 if large):
- Crew arrives early morning (typically 7–8 AM)
- Existing shingles are torn off and debris is loaded into a dumpster
- Decking is inspected; any rotted or damaged sections are replaced
- Underlayment (ice-and-water shield, synthetic felt) is installed
- New shingles are delivered and staged
- Installation begins the same morning

Day 2 (if not finished Day 1):
- Shingle installation continues
- Ridge cap, hip cap, and ridge vent are installed
- Pipe collars, flashing, and step flashing around chimneys and walls are completed
- Final inspection of installation quality

Day 2 or 3:
- Cleanup: magnetic roller sweeps for nails, debris hauled away
- Final walkthrough with homeowner

What can extend the timeline:
- Large or steeply pitched roofs
- Multiple roof sections, dormers, or complex geometry
- Extensive deck replacement (rotted wood)
- Waiting for material delivery if supply is constrained
- Weather delays (Texas summer heat slows work in the afternoon)

What does not affect the timeline much:
- Insurance vs. out-of-pocket jobs (the work is identical)
- Shingle color or brand selection

The disruption factor:
Roof replacements are loud. Plan to be away from home during the peak hours of the work, especially if you work from home or have young children. The crew will need access to your yard and driveway for equipment and the dumpster.

PCG Roofing provides a firm start date once materials are confirmed. We do not leave jobs unfinished overnight unless weather forces a stop—and we communicate proactively when schedules shift.`,
    topic: 'roof-repair',
    publishDate: '2026-04-01',
    readTime: 8,
  },
  {
    id: '5',
    slug: 'asphalt-shingles-vs-metal-roofing-texas',
    title: 'Asphalt Shingles vs. Metal Roofing: Which Is Right for Texas Homes?',
    excerpt: 'Both materials can handle Texas weather, but they differ significantly in cost, longevity, energy efficiency, and insurance savings. Here\'s what you need to know.',
    content: `Texas homeowners replacing a roof often ask whether they should upgrade to metal. Both asphalt shingles and metal roofing are excellent choices in Texas—but they serve different needs and budgets.

Asphalt shingles: The most common choice

Pros:
- Lower upfront cost (typically $8,000–$15,000 for an average home)
- Wide range of colors and styles
- Faster installation
- Easy to repair individual sections
- Well understood by insurance adjusters

Cons:
- Shorter lifespan (20–30 years depending on shingle grade)
- More vulnerable to hail damage than metal
- More granule loss over time, affecting drainage

Best for: Homeowners looking for a cost-effective, attractive solution who plan to stay in the home 10–20 years.

Metal roofing: The long-term investment

Pros:
- Lifespan of 40–70 years (steel) or longer (aluminum, copper)
- Excellent wind resistance (some systems rated to 140 mph)
- Reflects solar heat—can reduce cooling costs 10–25%
- Many Texas insurance companies offer premium discounts for impact-resistant metal
- Better hail resistance (Class 4 impact-rated products)

Cons:
- Higher upfront cost (typically $18,000–$40,000 for the same home)
- Noisier during hail and heavy rain without adequate insulation
- Requires more experienced installers; fewer contractors are qualified

Best for: Homeowners planning to stay long-term, those in hail-heavy areas, and anyone whose current insurance premiums are high due to repeated claims.

The insurance savings angle:
In Texas, Class 4 impact-resistant roofing (both asphalt and metal) can qualify for insurance discounts of 20–40% on the wind/hail portion of your premium. Over 10–15 years, this can offset a significant portion of the upgrade cost. Ask your insurance agent about the Fortified Roof program.

Our recommendation:
If you are replacing after storm damage and insurance is covering most of the cost, upgrading to Class 4 asphalt shingles or metal for the difference in deductible can be a smart long-term move. If budget is the primary concern, a quality 30-year architectural shingle installed correctly will serve you well.

PCG Roofing installs both systems. We will walk you through the options specific to your home and insurance situation.`,
    topic: 'materials',
    publishDate: '2026-03-24',
    readTime: 10,
  },
  {
    id: '6',
    slug: 'roof-maintenance-tips-texas-homeowners',
    title: '5 Roof Maintenance Tasks Every Texas Homeowner Should Do Each Year',
    excerpt: 'Preventive maintenance costs almost nothing but can add years to your roof\'s life and keep your insurance claims cleaner. Here are the five tasks that matter most.',
    content: `A well-maintained roof can last 5–10 years longer than a neglected one. In Texas, heat, UV exposure, and severe weather create specific maintenance priorities. Here are five tasks you should do every year.

1. Clean your gutters (twice a year: spring and fall)
Clogged gutters trap moisture against the fascia and can cause water to back up under the shingles at the eaves. In winter, standing water in gutters can freeze and expand, causing ice dams that lift shingles. Clean gutters in October before freeze season and again in April after spring pollen falls.

2. Inspect and reseal all penetration points
Every pipe, vent, skylight, and chimney that passes through your roof is a potential leak point. The sealant (caulk, pitch pan, or lead boot) around these areas degrades faster than the shingles themselves. Walk around your home after a heavy rain and look for water stains on interior ceilings near these penetrations. A tube of roofing sealant is a $10 fix; a water-damaged rafter system is not.

3. Trim overhanging tree branches
Branches that hang over the roof scrape granules from shingles on windy days and deposit debris that traps moisture. In a storm, they become projectiles. Keep branches trimmed back at least 6 feet from the roof surface.

4. Check your attic for proper ventilation and signs of moisture
Poor attic ventilation traps heat and humidity that degrade roofing materials from the inside out. Signs of a problem: dark staining on the underside of the decking, frost in winter, or an attic that is noticeably hotter than expected. You should have approximately 1 square foot of ventilation for every 150 square feet of attic floor area.

5. Schedule a professional inspection after any significant hailstorm
Hail damage is often invisible from the ground and develops slowly—cracked granule surfaces let UV rays accelerate aging for months before a leak appears. A post-storm inspection is typically free and takes less than 30 minutes. If damage is found, you have documentation for an insurance claim. If no damage is found, you have peace of mind.

PCG Roofing offers free annual inspections for Texas homeowners. We are not looking to create business—we are looking to help you avoid expensive surprises.`,
    topic: 'maintenance',
    publishDate: '2026-03-15',
    readTime: 8,
  },
  {
    id: '7',
    slug: 'what-to-expect-free-roof-inspection-texas',
    title: 'What Happens During a Free Roof Inspection? (And What to Watch Out For)',
    excerpt: 'Not all free inspections are created equal. Here\'s what a thorough, honest roof inspection looks like—and the red flags that signal a storm chaser or unqualified contractor.',
    content: `Free roof inspections are one of the most valuable services a roofing company can offer—when done honestly. Here is what a legitimate inspection looks like and what warning signs to watch for.

What a thorough inspection covers:

Exterior:
- Overall shingle condition: curling, cracking, missing granules
- Hail or wind damage (bruised spots, cracked shingles)
- Ridge cap and hip shingles (these wear fastest)
- Flashing at all penetrations: chimneys, pipes, skylights, dormers
- Valley condition (where two roof planes meet)
- Gutter condition: attachment, drainage, debris
- Fascia and soffit: rot, animal entry points

Interior (attic access if possible):
- Decking condition: soft spots, rot, water staining
- Ventilation: ridge vent, soffit vents, adequate airflow
- Active leaks or moisture staining

What you should receive after the inspection:
- Photos of any problem areas (this is non-negotiable)
- A written summary of findings
- An honest recommendation: no action needed, repair, or replacement
- An estimate if work is warranted

Red flags to watch for:
- The inspector won't go on the roof, or refuses to share photos
- They find "major damage" on every house on your block
- They ask you to sign anything before showing you documentation
- They offer to waive your deductible (this is illegal in Texas)
- They are from out of state and arrived right after a storm (storm chasers)
- No Texas contractor license or proof of insurance is provided

Questions to ask any roofing contractor:
1. Are you licensed in Texas? (Ask for the license number)
2. Do you carry general liability and workers' compensation insurance?
3. How long have you been operating in this area?
4. Can I have references from jobs in my neighborhood?

PCG Roofing provides fully documented inspections at no cost. We will show you every photo, explain exactly what we found, and give you a clear recommendation. If your roof is fine, we will tell you that too.`,
    topic: 'inspections',
    publishDate: '2026-03-07',
    readTime: 9,
  },
];
