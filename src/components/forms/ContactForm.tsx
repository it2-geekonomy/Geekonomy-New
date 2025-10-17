'use client';
import '@/app/contact-us/contactUs.css';
import '@/components/forms/contactUsForm.css';
import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormData, Errors } from "@/types/contactTypes";
import { Contactinput } from "../ui";
import { ContactPopup } from "../ui";
import { ContactTextarea } from "../ui";
import { validate, getUnderlineStyle } from "@/lib/contactFormUtils";
import { SUBJECTS, subjectLabelMap } from "@/constants/contactConstants";
import emailjs from '@emailjs/browser';

// Load the Google reCAPTCHA script
const loadReCaptcha = () => {
  if (!document.getElementById('recaptcha-script')) {
    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
};

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaChecked, setCaptchaChecked] = useState(false);
  const recaptchaTokenRef = useRef<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[number]>('general');
  const [errors, setErrors] = useState<Errors>({});
  const [popup, setPopup] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<"error" | "success">("error");
  const [popupKey, setPopupKey] = useState<number>(0);

  useEffect(() => {
    loadReCaptcha();
    // Set up reCAPTCHA callback (client-side only)
    if (typeof window !== 'undefined') {
      (window as Window & { onRecaptchaSuccess?: (token: string) => void }).onRecaptchaSuccess = (token: string) => {
        recaptchaTokenRef.current = token;
      };
    }
  }, []);

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
      else if (errs.message) showPopup("Please enter a message", "error");
      return;
    }

    if (!isCaptchaChecked) {
      showPopup("Please verify you're not a robot", "error");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      firstName: formData.fname,
      lastName: formData.lname,
      email: formData.email,
      phoneNumber: formData.pnum,
      selectSubject: selectedSubject,
      message: formData.message,
    };
    try {
      await emailjs.send(
        "service_b9jpwod",
        "template_zweeaku",
        templateParams,
        "fqPzstZbWOYcNqmvB"
      );
      showPopup("Message sent successfully!", "success");
      setFormData({ fname: "", lname: "", email: "", pnum: "", message: "" });
      setTouched({ fname: false, lname: false, email: false, pnum: false, message: false });
      setErrors({});
      setCaptchaChecked(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      showPopup("Failed to send message.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {popup && (
        <ContactPopup
          message={popup}
          type={popupType}
          onClose={() => setPopup(null)}
          popupKey={popupKey}/>
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
            touched={touched.fname}
          />
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
            touched={touched.email}
          />
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
                onClick={() => setSelectedSubject(subj)}
              >
                <div className={`radio-circle ${selectedSubject === subj ? "selected" : ""}`}>
                  {selectedSubject === subj && <div className="checkmark">✓</div>}
                </div>
                <input
                  type="radio"
                  name="subject"
                  value={subj}
                  checked={selectedSubject === subj}
                  onChange={() => setSelectedSubject(subj)}
                  className="hidden"
                />
                <span className="subject-text">{subjectLabelMap[subj]}</span>
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
          touched={touched.message}/>

        <div className="recaptcha-wrapper">
  <div className="g-recaptcha">
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      onChange={(value) => setCaptchaChecked(!!value)}
    />
  </div>
</div>
        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
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
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
