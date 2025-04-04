import Hero from "@/components/ui/home/Hero";
import Navigation from "@/components/ui/home/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Carousel */}
      <Hero />

      {/* Featured Boxes Section */}
      <section className="md:px-16 lg:px-16 flex flex-col text-white">
        <div className="flex flex-wrap max-h-[600px] w-full h-full">
          <div className="md:w-1/2 w-full order-1 md:order-2 bg-white">
            <img
              src="https://boxandtale.com/storage/home_info/fIlIiZQEPmJVHUQzVQ7odPB2ch9KsNBK5miQeUZG.webp?v=2"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="bg-[#e7c795] md:w-1/2 order-2 md:order-1 flex items-center">
            <div className="text-left p-8 md:p-[80px] w-full">
              <h4 className="text-xl">Box & Tale's</h4>
              <h1 className="text-2xl md:text-5xl font-semibold mt-2">
                Eid Hampers Collection 2025
              </h1>
              <p className="text-lg mt-5">
                Share blessings and reconnect with friends, family, and
                colleagues as we welcome the holy month of Ramadan with Box &
                Tale's Eid Hampers 2025 Collection!
              </p>
              <Link
                href="/build-a-box"
                className="bg-[#e7c795] hover:bg-[#e7c795] mt-6 md:mt-10 inline-block py-3 px-6 border border-blue-200 font-bold rounded-full"
              >
                SEE THE PACKAGES
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-h-[600px] w-full h-full">
          <div className="md:w-1/2 w-full order-1 md:order-1 bg-white">
            <img
              src="https://boxandtale.com/storage/home_info/JXqOP2gFAYOmrzA344NB9Gmp6NVDbhhjUbhxWMUg.webp?v=2"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="bg-[#193651] md:w-1/2 order-2 md:order-2">
            <div className="text-left p-8 md:p-[80px] w-full">
              <h4 className="text-xl">Create Your Own</h4>
              <h1 className="text-4xl md:text-5xl font-semibold">
                Personalized Gift Box
              </h1>
              <div className="flex gap-5 flex-col">
              <p className="text-lg">
                Custom your gifts according to your occassions from the box, to
                the items, to the cards!
              </p>
              <p className="text-lg">
                Whether it be birthdays, anniversaries, graduations, valentine's
                day, mother's day, father's day, and more.
              </p>
              <p className="text-lg">Box & Tale has everything for you!</p>
              </div>
              <Link
                href="/build-a-box"
                className="hover:underline mt-6 md:mt-10 inline-block py-3 px-6 border border-blue-200 font-bold rounded-full"
              >
                BUILD A BOX
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-h-[600px] w-full h-full">
          <div className="md:w-1/2 w-full order-1 md:order-2 bg-white">
            <img
              src="https://boxandtale.com/storage/home_info/79MOulx6M6UUMsnUQHn5M5bIn6mbtlvB2yvR87A6.webp?v=2"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="bg-[#dcc6ad] md:w-1/2 order-2 md:order-1">
            <div className="text-left p-8 md:p-[80px] w-full">
              <h4 className="text-2xl">Need Some Inspirations?</h4>
              <h1 className="text-4xl md:text-6xl font-semibold mt-3">
              Premade Box
              </h1>
              <p className="text-xl mt-5">
              When in doubt, choose one of our Premade Boxes.
Box & Tale has created various gift packages
based on occasions, interests, and colors!
              </p>
              <Link
                href="/build-a-box"
                className=" hover:underline mt-6 md:mt-10 inline-block py-3 px-6 border border-blue-200 font-bold rounded-full"
              >
                PREMADE BOX
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-h-[600px] w-full h-full">
          <div className="md:w-1/2 w-full order-1 md:order-1 bg-white">
            <img
              src="https://boxandtale.com/storage/home_info/Ivnfrudvxb4GX7FassTuHDuY5JBnPr5w5nhSuCCT.webp?v=2"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="bg-[#6a94c0] md:w-1/2 order-2 md:order-2">
            <div className="text-left p-8 md:p-[80px] w-full">
              <h4 className="text-lg mt-3">Need Gifts in Big Batches?</h4>
              <h1 className="text-4xl md:text-4xl font-semibold mb-4 mt-3">
              Corporate Gifts
              & Special Projects
              </h1>
              <div className="flex gap-5 flex-col">
              <p className="text-xl mt-5">
              Box & Tale is here to help you
celebrate your special moments,
whether it's small or BIG ONE !
              </p>
              </div>
              <Link
                href="/build-a-box"
                className="hover:underline mt-6 md:mt-10 inline-block py-3 px-6 border border-blue-200 font-bold rounded-full"
              >
                CORPORATE GIFTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-gray-900">
        {/* Content remains the same */}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        {/* Content remains the same */}
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-black text-white">
        {/* Content remains the same */}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-gray-900">
        {/* Content remains the same */}
      </footer>
    </div>
  );
}
