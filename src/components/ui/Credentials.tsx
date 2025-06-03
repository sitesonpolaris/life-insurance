import React from 'react';
import { FileCheck, Shield, AlertCircle } from 'lucide-react';

interface Credential {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  type: 'license' | 'insurance' | 'certification';
}

const Credentials: React.FC = () => {
  const credentials: Credential[] = [
    {
      title: 'NC State License',
      description: 'Licensed Life Insurance Agent in North Carolina',
      icon: <Shield className="w-6 h-6 text-green-600" />,
      url:'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//Jesse%20Shepeard%20-%2019842329%20-%20NC%20Life%20Insurance%20License.pdf',
      type: 'license'
    },
    {
      title: 'E&O Insurance',
      description: 'Professional Liability Coverage',
      icon: <FileCheck className="w-6 h-6 text-blue-600" />,
      url: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//E&O%20Certificate.pdf',
      type: 'insurance'
    },
    {
      title: 'AML Certification',
      description: 'Anti-Money Laundering Compliance',
      icon: <AlertCircle className="w-6 h-6 text-purple-600" />,
      url: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//Surance%20Bay%20Antimoneylaundering.pdf',
      type: 'certification'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Professional Credentials
        </h3>
        <div className="space-y-4">
          {credentials.map((credential) => (
            <a
              key={credential.title}
              href={credential.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {credential.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{credential.title}</h4>
                  <p className="text-sm text-gray-600">{credential.description}</p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-white border border-gray-200">
                    View Certificate
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credentials;