import { useState, useEffect } from "react";
import useForm from "./hooks/useform";
import useValidation from "./hooks/useValidation";

const App = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "No",
    guestName: "",
  };

  const { formData, errors, setErrors, handleChange } = useForm(initialState);
  const validate = useValidation(formData);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    setShowSummary(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 ">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Event Registration</h1>
        {showSummary ? (
          <div className="animate-fadeIn">
            <h2 className="text-2xl mb-4">Registration Summary</h2>
            <p className="mb-2">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="mb-2">
              <strong>Age:</strong> {formData.age}
            </p>
            <p className="mb-2">
              <strong>Attending with Guest:</strong>{" "}
              {formData.attendingWithGuest}
            </p>
            {formData.attendingWithGuest === "Yes" && (
              <p className="mb-4">
                <strong>Guest Name:</strong> {formData.guestName}
              </p>
            )}
            <button
              onClick={handleBack}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Back
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="animate-fadeIn">
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                // placeholder="Number Greater than 0"
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">
                Are you attending with a guest?
              </label>
              <select
                name="attendingWithGuest"
                value={formData.attendingWithGuest}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {formData.attendingWithGuest === "Yes" && (
              <div className="mb-4">
                <label className="block text-gray-300">Guest Name</label>
                <input
                  type="text"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-800 text-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                />
                {errors.guestName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.guestName}
                  </p>
                )}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
