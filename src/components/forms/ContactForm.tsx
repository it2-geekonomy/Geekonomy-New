'use client';

import '@/app/contact-us/contactUs.css'; 
import '@/components/forms/contactUsForm.css';
import { useState, useEffect } from "react";
import { FormData, Errors } from "@/types/contactTypes";
import { Contactinput } from "../ui";
import { ContactPopup } from "../ui";
import { ContactTextarea } from "../ui";
import { validate, getUnderlineStyle } from "@/lib/contactFormUtils";
import { SUBJECTS, subjectLabelMap } from "@/constants/contactConstants";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    pnum: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    fname: false,
    lname: false,
    email: false,
    pnum: false,
    message: false,
  });
  const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[number]>(
    "general"
  );
  const [errors, setErrors] = useState<Errors>({});
  const [popup, setPopup] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<"error" | "success">("error");
  const [popupKey, setPopupKey] = useState<number>(0);
  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);
  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  const handleBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };
  const showPopup = (msg: string, type: "error" | "success" = "error") => {
    setPopupType(type);
    setPopupKey((prev) => prev + 1);
    setPopup(msg);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    setErrors(errs);
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) =>
      setTouched((prev) => ({ ...prev, [key]: true }))
    );
    if (Object.keys(errs).length > 0) {
      if (errs.fname) showPopup("Please enter your first name", "error");
      else if (errs.lname) showPopup("Please enter your last name", "error");
      else if (errs.email) showPopup("Please enter your email", "error");
      else if (errs.pnum) showPopup("Please enter your phone number", "error");
      return;
    }
    showPopup(
      "Message sent successfully! We will get back to you soon",
      "success"
    );
    setFormData({
      fname: "",
      lname: "",
      email: "",
      pnum: "",
      message: "",
    });
    setTouched({
      fname: false,
      lname: false,
      email: false,
      pnum: false,
      message: false,
    });
    setErrors({});
  };
  return (
    <>
      {popup && (
        <ContactPopup
          message={popup}
          type={popupType}
          onClose={() => setPopup(null)}
          popupKey={popupKey}
        />
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="fields-row">
          <Contactinput
            label="First Name"
            value={formData.fname}
            placeholder="First Name"
            onChange={handleChange("fname")}
            onBlur={handleBlur("fname")}
            style={getUnderlineStyle("fname", formData, errors)}
            error={errors.fname}
            touched={touched.fname}/>
          <Contactinput
            label="Last Name"
            value={formData.lname}
            placeholder="Last Name"
            onChange={handleChange("lname")}
            onBlur={handleBlur("lname")}
            style={getUnderlineStyle("lname", formData, errors)}
            error={errors.lname}
            touched={touched.lname}/>
        </div>
        <div className="fields-row">
          <Contactinput
            label="Email"
            type="email"
            value={formData.email}
            placeholder="example@gmail.com"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            style={getUnderlineStyle("email", formData, errors)}
            error={errors.email}
            touched={touched.email}/>
          <Contactinput
            label="Phone Number"
            value={formData.pnum}
            placeholder="+91 1234567890"
            onChange={handleChange("pnum")}
            onBlur={handleBlur("pnum")}
            style={getUnderlineStyle("pnum", formData, errors)}
            error={errors.pnum}
            touched={touched.pnum}/>
        </div>
        <div className="subject-group">
          <label className="subject-label">Select Subject?</label>
          <div className="subject-options">
            {SUBJECTS.map((subj) => (
              <label
                key={subj}
                className="subject-option"
                onClick={() => setSelectedSubject(subj)}>
                <div className={`radio-circle ${selectedSubject === subj ? "selected" : ""}`}>
                  {selectedSubject === subj && <div className="checkmark">✓</div>}
                </div>
                <input
                  type="radio"
                  name="subject"
                  value={subj}
                  checked={selectedSubject === subj}
                  onChange={() => setSelectedSubject(subj)}
                  className="hidden"/>
                <span className="subject-text">
                  {subjectLabelMap[subj]}
                </span>
              </label>
            ))}
          </div>
        </div>
        <ContactTextarea
          label="Message"
          placeholder="Write your message.."
          rows={1}
          value={formData.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          style={getUnderlineStyle("message", formData, errors)}
          error={errors.message}
          touched={touched.message}
        />
        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </div>
      </form>
      <style jsx>{`
        .popup-timer-line {
          height: 3px;
          width: 100%;
          margin-top: 12px;
          transform-origin: left;
          animation: shrinkLine 3s linear forwards;
          background-color: ${popupType === "error" ? "#dc2626" : "#84cc16"};
        }
      `}</style></>
  );
}