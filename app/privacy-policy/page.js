export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen md:py-12 py-8 md:px-6 px-4">
      <div className="max-w-[1280px] mx-auto text-white">
        <h1 className="mb-[30px] xl:text-[92px] lg:text-[70px] md:text-[60px] text-[50px] font-[400]">
          Privacy Policy
        </h1>

        {/* Information We Collect */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Information We Collect
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white md:text-[18px] text-[16px] font-[300]">
            <li>
              Personal Information: Name, email address, phone number, and
              payment details when provided during registration or checkout.
            </li>
            <li>
              Non-Personal Information: Browser type, device information, IP
              address, and usage statistics collected via cookies and analytical
              tools.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            How We Use Your Information
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            We use the information collected to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white md:text-[18px] text-[16px] font-[300] mb-2">
            <li>Provide and improve our services.</li>
            <li>Process payments and fulfill orders.</li>
            <li>
              Send updates, promotions, or notifications related to our
              services.
            </li>
            <li>Ensure website security and functionality.</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Sharing Your Information
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            We do not sell or rent your personal information. However, we may
            share your data with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white md:text-[18px] text-[16px] font-[300] mb-2">
            <li>
              Service Providers: Payment processors, hosting platforms, and
              marketing agencies assisting in our operations.
            </li>
            <li>
              Legal Obligations: When required by law or to protect our legal
              rights.
            </li>
          </ul>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            We use cookies to enhance your browsing experience and analyze
            website traffic. You can manage cookie preferences through your
            browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Data Security
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            We implement industry-standard security measures to protect your
            personal information. However, no system is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Your Rights
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white md:text-[18px] text-[16px] font-[300] mb-2">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request data portability.</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-[44px]">
          <h2 className="lg:text-[32px] md:text-[24px] sm:text-[22px] text-[20px] font-[400] mb-[6px]">
            Third-Party Links
          </h2>
          <p className="text-white md:text-[18px] text-[16px] font-[300] mb-2">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites.
          </p>
        </section>
      </div>
    </main>
  );
}
