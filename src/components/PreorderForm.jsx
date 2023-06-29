import React, { useState, useEffect } from "react";
import SizeTool from "../size-bike.jpeg"

const PreorderForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [bikeType, setBikeType] = useState("");
  const [frameSize, setFrameSize] = useState("");
  const [topTube, setTopTube] = useState("");
  const [seatTube, setSeatTube] = useState("");
  const [downTube, setDownTube] = useState("");
  const [headTube, setHeadTube] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [sizeHelpVisible, setSizeHelpVisible] = useState(false);

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Regular expression for phone number validation
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Perform validation checks
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    if (isEmailValid && isPhoneValid) {
      if (step === 1) {
        if (name === "" || email === "" || phone === "" || country === "") {
          setEmailError("Please fill in all required fields.");
          setPhoneError("");
          return;
        }
        setEmailError("");
        setPhoneError("");
        setStep(2);
      }
    } else {
      setEmailError("Invalid email format.");
      setPhoneError("Invalid phone number format.");
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    if (step === 2) {
      console.log("Order submitted");
      onClose();
    }
  };

  const toggleSizeHelp = () => {
    setSizeHelpVisible(!sizeHelpVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".preorder-form");
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };

    const modal = document.querySelector(".preorder-form"); // Get the modal element
    modal.addEventListener("click", handleClickOutside); // Attach event listener to the modal element

    return () => modal.removeEventListener("click", handleClickOutside); // Remove the event listener
  }, [onClose]);

  return (
    <div className="preorder-form fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center px-4">
      <div className="preorder-form bg-white rounded-lg p-4 md:p-8 w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold text-center font-custom">
              Step 1: Your Details
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-medium font-custom text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Joe Bikes"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium font-custom text-left"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@example.com"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-2 font-medium font-custom text-left"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+49 1234 5678"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block mb-2 font-medium font-custom text-left"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Germany"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-8 rounded-full font-custom"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-full font-custom"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-center font-custom">
              Step 2: Your Bike's Details
            </h2>
            <div className="mb-4">
              <label
                htmlFor="bikeType"
                className="block mb-2 font-medium font-custom text-left"
              >
                Bike Type
              </label>
              <input
                type="text"
                id="bikeType"
                value={bikeType}
                onChange={(e) => setBikeType(e.target.value)}
                placeholder="Surly Ogre"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="frameSize"
                className="block mb-2 font-medium font-custom text-left"
              >
                Frame Size
              </label>
              <input
                type="text"
                id="frameSize"
                value={frameSize}
                placeholder="Small"
                onChange={(e) => setFrameSize(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="topTube"
                  className="block mb-2 font-medium font-custom text-left"
                >
                  Top Tube (cm)
                  <span
              className={`question-mark ${sizeHelpVisible ? "active" : ""}`}
              onClick={setSizeHelpVisible}            >
              ?
            </span>
            {sizeHelpVisible && (
        <div className="modal fixed inset-0 flex justify-center items-center">
          <div className="modal-content bg-white rounded-lg p-4 md:p-8">
            <h2 className="text-xl font-bold text-center font-custom">Size Help</h2>
            <div className="mb-4">
              <img
                src={SizeTool}
                alt="Bike Size"
                className="modal-image"
              />
              <p className="modal-text">
                Please provide as much information as you can.
              </p>
            </div>
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-full font-custom"
              onClick={toggleSizeHelp}
            >
              Okay
            </button>
          </div>
        </div>
      )}
                </label>
                <input
                  type="number"
                  id="topTube"
                  value={topTube}
                  onChange={(e) => setTopTube(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="seatTube"
                  className="block mb-2 font-medium font-custom text-left"
                >
                  Seat Tube (cm)
                </label>
                <input
                  type="number"
                  id="seatTube"
                  value={seatTube}
                  onChange={(e) => setSeatTube(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="downTube"
                  className="block mb-2 font-medium font-custom text-left"
                >
                  Down Tube (cm)
                </label>
                <input
                  type="number"
                  id="downTube"
                  value={downTube}
                  onChange={(e) => setDownTube(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="headTube"
                  className="block mb-2 font-medium font-custom text-left"
                >
                  Head Tube (cm)
                </label>
                <input
                  type="number"
                  id="headTube"
                  value={headTube}
                  onChange={(e) => setHeadTube(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-8 rounded-full font-custom "
                onClick={handleBack}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-full font-custom"
                onClick={handleSubmit}
              >
                Order Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PreorderForm;
