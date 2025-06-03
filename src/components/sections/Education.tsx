import React, { useState } from 'react';
import { insuranceTypes } from '../../data/insuranceTypes';
import { InfoIcon, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('comparison');

  return (
    <section className="py-16 bg-white" id="insurance-types">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Understanding Your Options
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life Insurance Explained Simply
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in transparent education. Learn about different types of life insurance
            to make the most informed decision for you and your loved ones.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'comparison'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('comparison')}
            >
              Side-by-Side Comparison
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'cost'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('cost')}
            >
              Cost Factors
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'timeline'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('timeline')}
            >
              Coverage Timeline
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'investment'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('investment')}
            >
              Investment Potential
            </button>
          </div>
        </div>
        
        {activeTab === 'comparison' && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b">Features</th>
                  {insuranceTypes.map(type => (
                    <th key={type.type} className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b">
                      {type.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b text-gray-800 font-medium">Duration</td>
                  <td className="py-4 px-6 border-b text-gray-600">Limited term (10-30 years)</td>
                  <td className="py-4 px-6 border-b text-gray-600">Lifetime</td>
                  <td className="py-4 px-6 border-b text-gray-600">Lifetime</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b text-gray-800 font-medium">Premiums</td>
                  <td className="py-4 px-6 border-b text-gray-600">Lower, fixed during term</td>
                  <td className="py-4 px-6 border-b text-gray-600">Higher, fixed for life</td>
                  <td className="py-4 px-6 border-b text-gray-600">Flexible, can be adjusted</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b text-gray-800 font-medium">Cash Value</td>
                  <td className="py-4 px-6 border-b text-gray-600">None</td>
                  <td className="py-4 px-6 border-b text-gray-600">Grows at guaranteed rate</td>
                  <td className="py-4 px-6 border-b text-gray-600">Tied to market indexes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b text-gray-800 font-medium">Death Benefit</td>
                  <td className="py-4 px-6 border-b text-gray-600">Fixed</td>
                  <td className="py-4 px-6 border-b text-gray-600">Fixed</td>
                  <td className="py-4 px-6 border-b text-gray-600">Adjustable</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b text-gray-800 font-medium">Best For</td>
                  <td className="py-4 px-6 border-b text-gray-600">Maximum coverage at lowest cost</td>
                  <td className="py-4 px-6 border-b text-gray-600">Lifetime coverage with guaranteed growth</td>
                  <td className="py-4 px-6 border-b text-gray-600">Growth potential with flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'cost' && (
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <DollarSign className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Cost Factors</h3>
                <p className="text-gray-600">
                  Several factors influence the cost of your life insurance policy.
                  Understanding these can help you find the most affordable coverage for your situation.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Personal Factors</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <span className="font-medium text-gray-800">Age</span>
                      <p className="text-gray-600 text-sm">The younger you are when purchasing, the lower your premiums.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <span className="font-medium text-gray-800">Health Status</span>
                      <p className="text-gray-600 text-sm">Better health results in lower premiums. Some policies require medical exams.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <span className="font-medium text-gray-800">Lifestyle</span>
                      <p className="text-gray-600 text-sm">Smoking, high-risk occupations, or hobbies can increase costs.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Policy Factors</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <span className="font-medium text-gray-800">Coverage Amount</span>
                      <p className="text-gray-600 text-sm">Higher death benefits increase premium costs.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <span className="font-medium text-gray-800">Policy Type</span>
                      <p className="text-gray-600 text-sm">Term insurance is less expensive than permanent insurance.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <span className="font-medium text-gray-800">Policy Length</span>
                      <p className="text-gray-600 text-sm">Longer terms increase the cost for term insurance.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'timeline' && (
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-8">
              <Clock className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Coverage Timeline Comparison</h3>
                <p className="text-gray-600">
                  Understanding how long your coverage lasts helps you match the policy to your financial goals.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
              
              <div className="relative pl-16 pb-12">
                <div className="absolute left-5 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Term Life Insurance</h4>
                <p className="text-gray-600 mb-4">
                  Provides coverage for a specific period, typically 10, 20, or 30 years.
                  After the term ends, coverage expires (though many policies offer conversion options).
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Policy Start</span>
                    <span>Term End (10-30 years)</span>
                    <span>Life Expectancy</span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-16 pb-12">
                <div className="absolute left-5 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Whole Life Insurance</h4>
                <p className="text-gray-600 mb-4">
                  Provides permanent coverage that lasts your entire lifetime, as long as premiums are paid.
                  Includes a cash value component that grows at a guaranteed rate.
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Policy Start</span>
                    <span>Life Expectancy</span>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-5 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Indexed Universal Life</h4>
                <p className="text-gray-600 mb-4">
                  Provides permanent coverage with flexible premiums and death benefits.
                  Cash value growth is tied to market indexes with downside protection.
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Policy Start</span>
                    <span>Life Expectancy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'investment' && (
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-8">
              <TrendingUp className="text-blue-600 w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Potential</h3>
                <p className="text-gray-600">
                  Some life insurance policies offer more than just death benefits.
                  They can also serve as financial assets with different growth characteristics.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Term Life</h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">No Investment Value</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Term life is pure insurance with no cash value or investment component.
                  It offers the highest death benefit per premium dollar but builds no equity.
                </p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="block text-xs text-gray-500">Growth Potential</span>
                    <span className="font-medium text-gray-800">None</span>
                  </div>
                  <div className="w-24 h-6 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Whole Life</h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">Guaranteed Growth</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Builds cash value at a guaranteed rate, typically 2-4% annually.
                  This cash value can be borrowed against or withdrawn in certain circumstances.
                </p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="block text-xs text-gray-500">Growth Potential</span>
                    <span className="font-medium text-gray-800">Moderate</span>
                  </div>
                  <div className="w-24 h-6 bg-gray-100 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Indexed Universal Life</h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">Market-Linked Growth</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cash value growth tied to market indexes (like S&P 500) with downside protection.
                  Potential for higher returns while limiting risk of market downturns.
                </p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="block text-xs text-gray-500">Growth Potential</span>
                    <span className="font-medium text-gray-800">High</span>
                  </div>
                  <div className="w-24 h-6 bg-gray-100 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
              <InfoIcon className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-medium">Investment Disclaimer:</span> Life insurance should primarily be purchased for its death benefit protection. While some policies offer cash value growth, they should be considered as part of a broader financial strategy and not solely as investments. Returns are often lower than dedicated investment vehicles due to insurance costs.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;