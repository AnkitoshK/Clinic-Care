import React from 'react';
import './PrivacyPolicy.Module.css'; // Add your CSS for the container

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <form className="privacy-policy-form">
        <div className="form-group">
          <label className="form-label">1. Information Collection</label>
          <p className="form-text">
            We collect various types of information to provide and improve our services. This includes personal information you provide when registering, such as name, email address, phone number, and any other information required to provide our services.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">2. Use of Information</label>
          <p className="form-text">
            We use the information we collect to deliver our services, communicate with you, process transactions, and improve the overall experience. We may also use your information to send you important updates or marketing communications.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">3. Data Security</label>
          <p className="form-text">
            We take the security of your personal information seriously. We implement industry-standard security measures to protect your data, including encryption and secure access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">4. Sharing of Information</label>
          <p className="form-text">
            We may share your information with trusted third parties for purposes such as processing payments, providing customer support, or complying with legal requirements. These third parties are obligated to protect your information and use it only for the purposes for which it was shared.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">5. Cookies and Tracking Technologies</label>
          <p className="form-text">
            We use cookies and other tracking technologies to personalize content, analyze traffic, and enhance the user experience. By using our website, you consent to the use of cookies as outlined in our Cookie Policy.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">6. Changes to the Privacy Policy</label>
          <p className="form-text">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date of revision. We encourage you to review this page periodically to stay informed about how we are protecting your personal information.
          </p>
        </div>

        <div className="form-footer">
          <p>© 2025 Findever Technology. All rights reserved.</p>
        </div>
      </form>
    </div>
  );
}

export default PrivacyPolicy;
