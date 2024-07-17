import { CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-500 to-rose-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Effortless Travel Planning with AI
                </h1>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Let our AI-powered trip planner create your perfect vacation itinerary, tailored to your preferences.
                </p>
              </div>
              <Link
                to={'/create-trip'}
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-rose-700 hover:bg-rose-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Plan Your Trip
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <blockquote className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="text-4xl font-bold tracking-tighter text-rose-700">
              "Our AI trip planner takes the stress out of travel planning."
            </div>
            <div className="text-muted-foreground md:text-xl">- Jane Doe, Frequent Traveler</div>
          </blockquote>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/placeholder1.svg"
              width="550"
              height="550"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Benefits of AI-Powered Travel Planning
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Our AI trip planner takes the guesswork out of travel planning, providing personalized recommendations
                  and seamless itinerary creation.
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 text-rose-700" />
                  <div>
                    <h3 className="text-lg font-bold">Personalized Recommendations</h3>
                    <p className="text-gray-700">
                      Our AI analyzes your preferences and suggests the best destinations, activities, and accommodations for your unique travel style.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 text-rose-700" />
                  <div>
                    <h3 className="text-lg font-bold">Seamless Itinerary Creation</h3>
                    <p className="text-gray-700">
                      With a few clicks, our AI trip planner generates a detailed, optimized itinerary that maximizes your time and enjoyment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 text-rose-700" />
                  <div>
                    <h3 className="text-lg font-bold">Stress-Free Travel</h3>
                    <p className="text-gray-700">
                      Sit back and let our AI handle the logistics, so you can focus on creating unforgettable memories.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Planning Your Dream Vacation Today
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Experience the power of AI-driven travel planning and let us create your perfect itinerary.
                </p>
              </div>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-rose-700 hover:bg-rose-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
            </div>
            <img
              src="/placeholder3.svg"
              width="550"
              height="550"
              alt="CTA"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

