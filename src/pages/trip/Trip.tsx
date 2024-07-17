import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  DollarSignIcon,
  GroupIcon,
  HeartIcon,
  MapPinIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

const CreateTrip = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-rose-500 to-rose-700 py-12 md:py-15 lg:py-20">
      <div className="max-w-4xl w-full space-y-12 px-6 sm:px-8 lg:px-12">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-white">Create a New and Exciting Trip</h2>
          <p className="mt-6 text-xl text-white">
            Fill out the details to get started on your next adventure.
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <label htmlFor="destination" className="block text-lg font-medium text-white">
              Destination
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPinIcon className="h-6 w-6 text-white/80" />
              </div>
              <input
                type="text"
                name="destination"
                id="destination"
                className="block w-full pl-12 py-2 pr-12 sm:text-lg rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                placeholder="Enter a dream destination"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <ChevronDownIcon className="h-6 w-6 text-white/80" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="days" className="block text-lg font-medium text-white/80">
              Number of Days
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="days"
                id="days"
                min="1"
                className="block w-full sm:text-lg rounded-md border-gray-300 focus:border-rose-600 focus:ring-rose-500 py-2 pl-12"
                
                placeholder="Enter the perfect number of days"
              />
            </div>
          </div>
          <div className="bg-white/10 rounded-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <DollarSignIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white/80 group-hover:text-white">Low</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <DollarSignIcon className="h-8 w-8 text-white" />
                  <DollarSignIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white/80 group-hover:text-white">Medium</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <DollarSignIcon className="h-8 w-8 text-white" />
                  <DollarSignIcon className="h-8 w-8 text-white" />
                  <DollarSignIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white/80 group-hover:text-white">High</span>
              </div>
            </div>
            <p className="mt-4 text-white">Select your desired budget for your trip.</p>
          </div>
          <div className="bg-white/10 rounded-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white group-hover:text-white">Friends</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <GroupIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white group-hover:text-white">Family</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <UserIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white group-hover:text-white">Solo</span>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className=" p-3 rounded-full transition-colors duration-300 group-hover:bg-rose-600">
                  <UsersIcon className="h-8 w-8 text-white" />
                  <HeartIcon className="h-8 w-8 text-white" />
                </div>
                <span className="mt-2 text-lg text-white group-hover:text-white">Couple</span>
              </div>
            </div>
            <p className="mt-4 text-white">Select your ideal travel companions.</p>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-rose-700 bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Generate My Dream Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
