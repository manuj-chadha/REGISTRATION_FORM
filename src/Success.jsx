import { useLocation } from "react-router-dom";
import "./Success.css"; // Only if you're using plain CSS

function Success() {
  const { state: formData } = useLocation();

  return (
    <div className="success-container">
      <h1 className="success-title">🎉 Registration Successful!</h1>
      <div className="success-card">
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phoneCode} {formData.phoneNumber}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>PAN:</strong> {formData.pan}</p>
        <p><strong>Aadhar:</strong> {formData.aadhar}</p>
      </div>
    </div>
  );
}

export default Success;
