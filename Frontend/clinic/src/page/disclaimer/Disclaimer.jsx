import React from 'react';
import './Disclaimer.Module.css'; // Add your CSS for the container

function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h1 className="disclaimer-title">Disclaimer</h1>
      <form className="disclaimer-form">
        <div className="form-group">
          <label className="form-label">1. Accuracy of Information</label>
          <p className="form-text">
            We do not warrant or guarantee the accuracy, completeness, timeliness, or reliability of the information provided on this website. The content provided is for general informational purposes and should not be relied upon without further verification.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">2. Liability</label>
          <p className="form-text">
            In no event shall we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">3. External Links</label>
          <p className="form-text">
            Our website may contain links to external websites. We are not responsible for the content or availability of these external websites. The inclusion of any external links does not necessarily imply a recommendation or endorsement of the views expressed within them.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">4. Changes to the Disclaimer</label>
          <p className="form-text">
            We reserve the right to modify or update this disclaimer at any time without prior notice. Any changes will be posted on this page with the updated date of revision.
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">5. User Responsibility</label>
          <p className="form-text">
            By using this website, you agree to assume full responsibility for your use of the information provided. You are responsible for ensuring that any products, services, or information available through this website meet your specific requirements.
          </p>
        </div>

        <div className="form-footer">
          <p>© 2025 Findever Technology. All rights reserved.</p>
        </div>
      </form>
    </div>
  );
}

export default Disclaimer;
