
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProblemSolution = () => {
  const [hours, setHours] = useState(5);
  const timeSaved = Math.round(hours * 0.9 * 10) / 10; // 90% time reduction

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stop Wasting Time on Manual Influencer Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Small brands struggle with expensive tools and manual processes that yield poor results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-red-50 border-red-200">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-red-800 mb-6">The Old Way</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Hours of manual Instagram searching
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Copy-pasting emails into spreadsheets
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Generic messages with 2-3% response rates
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Expensive tools ($200-500/month)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-green-50 border-green-200">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-green-800 mb-6">The InfluencerConnect Way</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discover</h4>
                    <p className="text-gray-600">Find micro-influencers by hashtag & niche</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-600">Extract verified emails automatically</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Outreach</h4>
                    <p className="text-gray-600">Send personalized campaigns at scale</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Time Savings Calculator</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hours spent manually per week
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-xl font-bold text-blue-600 mt-2">{hours} hours</p>
            </div>
            <div className="text-4xl text-gray-400">→</div>
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">Time saved with automation</p>
              <p className="text-3xl font-bold text-green-600">{timeSaved} hours/week</p>
              <p className="text-sm text-gray-500">90% time reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
