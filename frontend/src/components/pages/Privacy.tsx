

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-400">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 6, 2025</p>

      <p className="mb-6">
        Welcome to <strong>Mangaverse</strong>! Your privacy is important to us. This Privacy Policy outlines how we handle any data when you use our website and services, especially in relation to our integration with the <strong>MangaDex API</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        Mangaverse itself does <strong>not collect any personally identifiable information (PII)</strong> from users. We do not require login, account creation, or collect emails.
      </p>
      <p className="mb-4">
        However, we may automatically collect basic non-personal data to improve the website experience:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Pages visited and time spent</li>
      </ul>
      <p className="mb-6">This data is collected <strong>anonymously</strong> and is used purely for website performance and improvement.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Third-Party APIs and Services</h2>
      <p className="mb-6">
        Mangaverse relies on the <a href="https://api.mangadex.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">MangaDex API</a> to fetch manga information, images, and chapter data. All content is sourced directly from MangaDex.
      </p>
      <p className="mb-6">
        We do not store or cache any manga images or metadata on our servers. All images and manga chapter content are served directly from MangaDex’s CDN and infrastructure.
      </p>
      <p className="mb-6">
        <strong>Please note:</strong> Use of the MangaDex API is subject to their <a href="https://mangadex.org/policies/privacy" target="_blank" rel="noreferrer" className="text-blue-600 underline">Privacy Policy</a> and Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cookies & Tracking</h2>
      <p className="mb-6">
        Currently, Mangaverse <strong>does not use cookies</strong> for tracking or marketing.
      </p>
      <p className="mb-6">
        We may use privacy-focused analytics tools like <em>Plausible</em> or <em>Fathom</em> to collect anonymized usage metrics. These tools do <strong>not</strong> use cookies or track personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Sharing</h2>
      <p className="mb-6">
        We do <strong>not sell, rent, or share</strong> any user data with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Storage</h2>
      <p className="mb-6">
        Mangaverse does not store any user information or manga data. Everything is dynamically fetched in real-time from the MangaDex API.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Children's Privacy</h2>
      <p className="mb-6">
        Mangaverse is not intended for children under the age of 13. We do not knowingly collect any data from children. MangaDex may host content with various age ratings; please use discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. The most recent version will always be posted here. Continued use of Mangaverse after updates means you accept the new policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle data, feel free to reach out:
      </p>
      <ul className="list-disc ml-6 mt-3">
        <li>GitHub / Feedback Form: Coming soon</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
