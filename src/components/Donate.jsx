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
    Your donation helps us bring Talidhay’s programs to more communities and
    create meaningful moments that make a difference.
        </p>

        <p className="pt-5 text-base leading-relaxed max-w-5xl mx-auto">
    To donate, simply scan the GCash QR code. Please include a note that your
    payment is a donation to Talidhay. For in-kind donations or other support,
    feel free to reach out through our official channels.
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
