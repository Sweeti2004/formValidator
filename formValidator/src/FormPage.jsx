import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z]{2,}$/.test(formData.firstName)) newErrors.firstName = "Enter valid first name";
    if (!/^[A-Za-z]{2,}$/.test(formData.lastName)) newErrors.lastName = "Enter valid last name";
    if (!/^[a-zA-Z0-9_]{4,}$/.test(formData.username)) newErrors.username = "Min 4 chars, only letters, numbers & underscore (_)";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter valid email";
    if (!/^.{6,}$/.test(formData.password)) newErrors.password = "Password must be at least 6 characters";
    if (!/^\+\d{1,4}$/.test(formData.phoneCode)) newErrors.phoneCode = "Invalid country code";
    if (!/^\d{6,10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
    if (!formData.country) newErrors.country = "Select country";
    if (!formData.city) newErrors.city = "Select city";
    if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(formData.pan)) newErrors.pan = "Invalid PAN format";
    if (!/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = "Invalid Aadhar number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/submitted", { state: formData });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input" />
            {touchedFields.firstName && errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input" />
            {touchedFields.lastName && errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="input" />
            {touchedFields.username && errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
            {touchedFields.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="col-span-2">
            <label>Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="input w-full" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-sm text-blue-600">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {touchedFields.password && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label>Country Code</label>
            <input type="text" name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="input" placeholder="+91" />
            {touchedFields.phoneCode && errors.phoneCode && <p className="text-red-500 text-sm">{errors.phoneCode}</p>}
          </div>

          <div>
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="input" />
            {touchedFields.phoneNumber && errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange} className="input">
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {touchedFields.country && errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>

          <div>
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange} className="input">
              <option value="">Select</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            {touchedFields.city && errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div>
            <label>PAN No.</label>
            <input type="text" name="pan" value={formData.pan} onChange={handleChange} className="input" />
            {touchedFields.pan && errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
          </div>

          <div>
            <label>Aadhar No.</label>
            <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} className="input" />
            {touchedFields.aadhar && errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar}</p>}
          </div>
        </div>

        <button type="submit" disabled={!isFormValid} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
