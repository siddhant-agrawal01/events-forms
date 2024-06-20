const useValidation = (formData) => {
  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.age = "Age must be a number greater than 0";
    }

    if (formData.attendingWithGuest === "Yes" && !formData.guestName) {
      errors.guestName = "Guest name is required";
    }

    return errors;
  };
  return validate;
};

export default useValidation;
