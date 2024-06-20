const useValidation = (formData) => {
    const validate = () => {
      let errors = {};
  
      // Name validation
      if (!formData.name) {
        errors.name = "Name is required";
      }
  
      // Email validation with proper domain check
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!emailPattern.test(formData.email)) {
        errors.email = "Email is invalid";
      }
  
      // Age validation
      if (!formData.age) {
        errors.age = "Age is required";
      } else if (isNaN(formData.age) || formData.age <= 0) {
        errors.age = "Age must be a number greater than 0";
      }
  
      // Guest name validation if attending with a guest
      if (formData.attendingWithGuest === "Yes" && !formData.guestName) {
        errors.guestName = "Guest name is required";
      }
  
      return errors;
    };
  
    return validate;
  };
  
  export default useValidation;
  