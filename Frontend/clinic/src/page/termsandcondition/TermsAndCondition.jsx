import React from 'react';
import './TermsAndCondition.Module.css'; // Add your CSS for the container

function TermsAndCondition() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <form className="terms-form">
        <div className="form-group">
          <label className="form-label">1. Acceptance of Terms</label>
          <p className="form-text">
            By accessing and using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">2. Changes to Terms</label>
          <p className="form-text">
            We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and the updated date will be mentioned.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">3. User Responsibilities</label>
          <p className="form-text">
            You are responsible for your actions and for the content you post. You agree not to use our services for any unlawful or prohibited purposes.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">4. Privacy Policy</label>
          <p className="form-text">
            By using our services, you also agree to our Privacy Policy, which explains how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">5. Limitation of Liability</label>
          <p className="form-text">
            We are not liable for any damages, losses, or expenses arising from the use of our services. You use our services at your own risk.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">6. Governing Law</label>
          <p className="form-text">
            These Terms and Conditions are governed by the laws of the jurisdiction in which our services are provided.
          </p>
        </div>

        <div className="form-footer">
          <p>© 2025 Findever Technology. All rights reserved.</p>
        </div>
      </form>
    </div>
  );
}

export default TermsAndCondition;
