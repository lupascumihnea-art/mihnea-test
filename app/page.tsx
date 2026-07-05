import Image from "next/image";

/**
 * ConGusto — "Art of Macarons" workshop page
 * Recreated from Webflow design screenshots.
 *
 * Palette:
 *   bg      #0a0a0a  (near-black)
 *   cream   #ede4d3  (headline / body text)
 *   rose    #e2949f  (accent headline word, price #2 card)
 *   olive   #7d8f4c  (pill badges, price #3 card)
 *   gold    #eab628  (CTA buttons, price #1 card, logo)
 *
 * Type:
 *   display -> Playfair Display italic (headings)
 *   body    -> Inter (paragraphs, nav, labels)
 */

const navLinks = ["About us", "Instructor", "Workshop", "Why us"];

const stats = [
  { value: "8K+", label: "Graduate students", color: "text-[#eab628]" },
  { value: "14+", label: "Graduate students", color: "text-[#e2949f]" },
  { value: "2", label: "Locations worldwide", color: "text-[#7d8f4c]" },
];

const pricingTiers = [
  {
    price: "$250",
    priceColor: "text-[#eab628]",
    ringColor: "ring-[#eab628]/40",
    name: "Beginners",
    nameColor: "text-[#ede4d3]",
    features: [
      "French technique",
      "Two types of ganache",
      "Basic method for gel fillings",
    ],
    buttonClasses: "bg-[#eab628] text-black hover:bg-[#f5c94a]",
  },
  {
    price: "$320",
    priceColor: "text-[#e2949f]",
    ringColor: "ring-[#e2949f]/40",
    name: "Enthusiasts",
    nameColor: "text-[#e2949f]",
    features: [
      "Italian technique",
      "Three types of ganache",
      "Two methods for gel fillings",
    ],
    buttonClasses: "bg-[#e2949f] text-black hover:bg-[#eaa9b2]",
  },
  {
    price: "$250",
    priceColor: "text-[#7d8f4c]",
    ringColor: "ring-[#7d8f4c]/40",
    name: "Professionals",
    nameColor: "text-[#7d8f4c]",
    features: [
      "All techniques",
      "Five types of ganache",
      "All methods for gel fillings",
    ],
    buttonClasses: "bg-[#7d8f4c] text-black hover:bg-[#93a75c]",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#7d8f4c] px-5 py-1.5 text-sm font-semibold text-[#f4f1e8]">
      {children}
    </span>
  );
}

function RegisterButton({
  className = "",
  full = false,
}: {
  className?: string;
  full?: boolean;
}) {
  return (
    <button className={`rounded-full bg-[#eab628] px-8 py-3 text-sm font-bold tracking-wide text-black border border-[#eab628] transition-all duration-300 hover:bg-transparent hover:text-[#eab628] focus:outline-none ${className}`}>
      Register now
    </button>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#ede4d3]">
      {/* NAVBAR */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-1 text-2xl font-bold">
          <span className="rounded-full border-2 border-[#eab628] px-2 text-[#eab628]">
            C
          </span>
          <span>ConGusto</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-[#ede4d3]/90 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="uppercase transition hover:text-[#eab628]"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#ede4d3]/40 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition hover:border-[#eab628] hover:text-[#eab628] sm:inline-block"
        >
          Contact us
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pb-24">
          {/* Left: copy */}
          <div className="relative z-10 max-w-xl">
            <Badge>Workshop</Badge>

            <h1 className="mt-8 font-display text-5xl italic leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-[#ede4d3]">Art of </span>
              <span className="text-[#e2949f]">Macarons</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#ede4d3]/70 sm:text-lg">
              Uncover the secrets to creating flawless macarons in our
              exclusive hands-on workshop! Join expert pastry chefs as they
              guide you through every delicate step to create perfect
              macarons at home.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8 sm:gap-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-[#ede4d3]/15 pr-8 last:border-r-0 sm:pr-10"
                >
                  <p className={`font-display text-3xl font-bold sm:text-4xl ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#ede4d3]/60 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#eab628] text-center text-sm font-bold leading-tight text-black transition hover:bg-[#000000] focus:outline-yellow focus-visible:ring-2 focus-visible:ring-[#eab628] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-32 sm:w-32">
                Register
                <br />
                now
              </button>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-140">
            <Image
              src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1200&auto=format&fit=crop"
              alt="Bowl of assorted macarons on a rustic wooden table"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about-us" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-105">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
              alt="ConGusto pastry academy staff in the kitchen"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Badge>About us</Badge>
            <h2 className="mt-8 font-display text-4xl italic leading-tight sm:text-5xl">
              <span className="text-[#ede4d3]">Academy </span>
              <span className="text-[#e2949f]">Congusto</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#ede4d3]/70 sm:text-lg">
              Founded in 2010, our pastry academy is a leading institution
              dedicated to the art and science of pastry making. The academy
              uses cutting edge technology, mixed with ingenious techniques,
              specifically designed to teach the art, science and techniques
              of creating good food and methods needed to excel in the food
              industry. We guarantee thorough personal attention to each
              student&apos;s individual career goals from the moment they
              attend their first class with us to the time they are prepared
              in top-notch culinary dexterity.
            </p>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section id="instructor" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
            alt="Pastry kitchen background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-xl">
            <Badge>Master Chef</Badge>
            <h2 className="mt-8 font-display text-4xl italic leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#ede4d3]">Frank </span>
              <span className="text-[#e2949f]">Rizzi</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#ede4d3]/75 sm:text-lg">
              He fell in love with pastry 20 years ago and became one of the
              best pastry chefs, an undisputed master of his art and winner
              of several World Awards.
            </p>
          </div>

          <div className="relative mt-16 max-w-md rounded-2xl border border-[#eab628]/50 bg-black/60 p-8 backdrop-blur-sm sm:ml-auto sm:mr-16 lg:mr-32">
            <span className="absolute -top-5 left-8 font-display text-6xl italic text-[#eab628]">
              &ldquo;
            </span>
            <p className="text-lg italic leading-relaxed text-[#ede4d3]">
              I push things to the limit, always going a little further
            </p>
          </div>
        </div>
      </section>

      {/* WORKSHOP / PRICING */}
      <section id="workshop" className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <Badge>About workshop</Badge>

        <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl italic leading-tight sm:text-5xl">
          <span className="text-[#ede4d3]">Perfect </span>
          <span className="text-[#e2949f]">Macarons</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#ede4d3]/70 sm:text-lg">
          Designed for beginners, pastry lovers, and culinary bloggers alike!
          Led by expert chefs this hands-on experience will teach you the
          secrets to creating flawless macarons.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col items-center rounded-2xl border border-[#ede4d3]/10 bg-[#141414] px-8 py-12 text-center transition hover:border-[#ede4d3]/25"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${tier.ringColor} ring-4`}
              >
                <span className={`font-display text-2xl font-bold ${tier.priceColor}`}>
                  {tier.price}
                </span>
              </div>

              <h3 className={`mt-6 text-xl font-bold ${tier.nameColor}`}>
                {tier.name}
              </h3>

              <ul className="mt-6 space-y-2 text-sm text-[#ede4d3]/70 sm:text-base">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="mt-8 w-full">
                <button
                  className={`w-full rounded-full px-8 py-3 text-sm font-bold tracking-wide transition ${tier.buttonClasses}`}
                >
                  Register now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

