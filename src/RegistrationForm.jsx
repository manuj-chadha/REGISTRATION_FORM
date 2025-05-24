import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerationForm.css"

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone must be 10 digits";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) newErrors.pan = "Invalid PAN format";
    if (!/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = "Aadhar must be 12 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("success", { state: formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="toggle-password">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="error" style={{ gridColumn: "span 2" }}>{errors.password}</p>}

          <div className="phone-wrapper" style={{ gridColumn: "span 2" }}>
            <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="phone-code">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="phone-number" />
          </div>
          {errors.phoneNumber && <p className="error" style={{ gridColumn: "span 2" }}>{errors.phoneNumber}</p>}

          <div>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {errors.country && <p className="error">{errors.country}</p>}
          </div>

          <div>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            {errors.city && <p className="error">{errors.city}</p>}
          </div>

          <div>
            <input type="text" name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} />
            {errors.pan && <p className="error">{errors.pan}</p>}
          </div>

          <div>
            <input type="text" name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} />
            {errors.aadhar && <p className="error">{errors.aadhar}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
