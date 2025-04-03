'use client';
import React, { useState, useRef } from "react";
import InputField from "./InputLetsConnect";
import Button from "./ButtonSubmit";
import { isValidPhoneNumber } from "libphonenumber-js";

const LetsContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    propertytpe: "",
    email: "",
    phone: "",
    propertysize: "",
    stageconst: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.propertytpe.trim()) newErrors.propertytpe = "Property type is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.propertysize.trim()) newErrors.propertysize = "Property Size is required";
    if (!formData.stageconst.trim()) newErrors.stageconst = "Stage of construction is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        propertytpe: "",
        email: "",
        phone: "",
        propertysize: "",
        stageconst: "",
      });
      setErrors({});
    }
  };

 
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="bg-black text-white px-6 py-12 sm:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:bg-[#161616] md:rounded-[22px] md:p-14">
        <div>
          <h2 className="font-inter font-medium text-[44px] leading-[57.2px] tracking-[-2px]">
             Let’s have a chat.
          </h2>

          <p
            className="font-inter font-medium text-[21px] leading-[29px]
             align-middle text-[#757575] tracking-[-2px] mt-4 md:text-justify"
          >
           Any doubts? We are here to help.
          </p>

        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField name="fullName" placeholder="Full name" required value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

          <InputField name="phone" type="tel" placeholder="Mobile" required value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <InputField name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <InputField name="propertytpe" placeholder="Property type" required value={formData.propertytpe} onChange={handleChange} />
          {errors.propertytpe && <p className="text-red-500 text-sm">{errors.propertytpe}</p>}

          <InputField name="propertysize" placeholder="Property size" required value={formData.propertysize} onChange={handleChange} />
          {errors.propertysize && <p className="text-red-500 text-sm">{errors.propertysize}</p>}

          <InputField name="stageconst" placeholder="Stage of construction" required value={formData.stageconst} onChange={handleChange} />
          {errors.stageconst && <p className="text-red-500 text-sm">{errors.stageconst}</p>}

          <div className="col-span-1 sm:col-span-2 flex justify-start">
            <Button title="Book your appointment" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LetsContactForm;