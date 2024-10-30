import React from 'react';
import { CreditCard, Heart } from 'lucide-react';

export default function DonationSection() {
  return (
    <section className="py-16 bg-white" id="donate">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8">Support Our Community</h2>
          <p className="text-gray-600 mb-12">
            Your donations help us organize cultural events and support community initiatives.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Bank Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Bank Name</p>
                  <p className="text-gray-600">Bank of Ireland</p>
                </div>
                <div>
                  <p className="font-medium">Account Name</p>
                  <p className="text-gray-600">Telugu Ireland Yuvatha</p>
                </div>
                <div>
                  <p className="font-medium">IBAN</p>
                  <p className="text-gray-600">IE29BOFI90535286259535</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">BIC</p>
                  <p className="text-gray-600">BOFIIE2D</p>
                </div>
                <div>
                  <p className="font-medium">Account Number</p>
                  <p className="text-gray-600">86259535</p>
                </div>
                <div>
                  <p className="font-medium">Sort Code</p>
                  <p className="text-gray-600">90-53-52</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500">
              For any questions about donations, please contact us at{' '}
              <a href="mailto:communications@teluguirelandyuvatha.com" className="text-green-600 hover:underline">
                communications@teluguirelandyuvatha.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}