'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import '@/app/contact-us/contactUs.css'; 
import '@/components/forms/contactUsForm.css';

export default function ContactUsPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="min-h-screen bg-black text-white" >
        <section
          className="pt-24 pb-32 px-4 flex flex-col items-center"
          style={{
            backgroundImage: "url('/contactUsImg/contact-bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <h1
            className="text-6xl font-light leading-snug text-center mb-20 max-w-3xl heading-clamp-2 mobile-heading"
          >
            Stories that scream <br />success are now just a call <br/>away!
          </h1>

          <div className="relative w-full max-w-[1400px] mx-auto min-h-[800px]">
            <div className="form-bg" />

            <div className="container-flex">
              <div className="success-area">
                <h2 className="heading-clamp-2">
                  Get a Free Marketing Consultation For<br />Your Business
                </h2>

                <div>
                  <div className="contact-info-vertical phone-info">
                    <Image src="/contactUsImg/phone-call.webp" alt="Phone" width={26} height={26} style={{ objectFit: "contain" }} />
                    <span>+91 7624818717</span>
                  </div>

                  <div className="contact-info-vertical">
                    <Image src="/contactUsImg/email.webp" alt="Email" width={22} height={22} style={{ objectFit: "contain" }} />
                    <span>info@geekonomy.in</span>
                  </div>

                  <div className="contact-info-vertical">
                    <Image src="/contactUsImg/location.webp" alt="Location" width={22} height={22} style={{ objectFit: "contain" }} />
                    <span className="address-text">
                      No. 1357, Ground Floor, 9th Cross,<br />
                      ITI Layout, JP Nagar 1st Phase,<br />
                      Bengaluru, Karnataka - 560 078.
                    </span>
                  </div>
                </div>

                <div className="social-icons-row">
                  <Image src="/contactUsImg/x.webp" alt="X" width={25} height={25} />
                  <Image src="/contactUsImg/instagram.webp" alt="Instagram" width={25} height={25} />
                  <Image src="/contactUsImg/facebook.png" alt="Facebook" width={25} height={25} />
                </div>
              </div>

              <div className="form-area">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
     return (
      <div className="min-h-screen bg-black text-white">
        <section
          className="pt-24 pb-32 px-4 flex flex-col items-center"
          style={{
            backgroundImage: "url('/contactUsImg/contact-bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl font-light leading-snug text-center mb-20 max-w-3xl">
            Stories that scream <br /> success are now just a call <br /> away!
          </h1>

          <div className="relative w-full max-w-[1400px] mx-auto min-h-[800px]">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/contactUsImg/contactus_form_bg.webp')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row h-full container-panels" style={{ gap: "40px" }}>
              <div
                className="md:w-1/2 p-10 flex flex-col left-panel"
                style={{ transform: "translate(140px, 120px)", minWidth: "350px" }}
              >
                <h2 className="text-2xl leading-relaxed consultation-heading" style={{ marginBottom: "60px" }}>
                  Get a Free Marketing Consultation <br /> For Your Business
                </h2>

                <div className="flex flex-col items-start">
                  <div className="flex items-center info1" style={{ marginBottom: "60px", gap: "10px" }}>
                    <Image src="/contactUsImg/phone-call.webp" alt="Phone" width={26} height={26} />
                    <span>+91 7624818717</span>
                  </div>
                  <div className="flex items-center info2" style={{ marginBottom: "60px", gap: "16px" }}>
                    <Image src="/contactUsImg/email.webp" alt="Email" width={22} height={22} />
                    <span>info@geekonomy.in</span>
                  </div>
                  <div className="flex items-start info3" style={{ marginBottom: "60px", gap: "16px" }}>
                    <Image src="/contactUsImg/location.webp" alt="Location" width={22} height={22} />
                    <span>
                      No. 1357, Ground Floor, 9th Cross,<br />
                      ITI Layout, JP Nagar 1st Phase,<br />
                      Bengaluru, Karnataka - 560 078.
                    </span>
                  </div>
                </div>

                <div className="flex" style={{ marginTop: "1px", gap: "24px" }}>
                  <Image src="/contactUsImg/x.webp" alt="X" width={25} height={25} />
                  <Image src="/contactUsImg/instagram.webp" alt="Instagram" width={25} height={25} />
                  <Image src="/contactUsImg/facebook.png" alt="Facebook" width={25} height={25} />
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex items-center right-panel" style={{ paddingTop: "120px" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
