import React from "react";

const Donate = () => {
  return (
    <section id="donate" className="py-5 pt-40 pb-20 bg-white">
      <div className="text-center mb-8 px-4 sm:px-0">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "#8F2901" }}
        >
          <span>Every Contribution Counts</span>
        </h2>

        <p className="text-base leading-relaxed max-w-5xl mx-auto">
          Your donation helps us reach more communities, support more children,
          and bring our projects to life. With every peso, you help us weave
          kindness, opportunity, and lasting change—one act of generosity at a
          time.
        </p>

        <p className="pt-5 text-base leading-relaxed max-w-5xl mx-auto">
          You may send your monetary donations by scanning the GCash QR code
          below. The account belongs to our Treasurer, so please make sure to
          include a note indicating that the payment is a donation to Talidhay.
          For in-kind donations or other forms of support, feel free to
          communicate with us through our official email or any of our social
          media channels listed below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <img
            src="/images/09b5b6cb-d8dd-4de3-a54c-2931f92cc935.jpg"
            alt="Talidhay GCash Donation QR Code"
            className="w-full h-auto object-contain rounded-3xl border border-white/20 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Donate;
