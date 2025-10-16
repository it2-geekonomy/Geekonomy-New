import React, { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return (
    <section className="contact-layout-wrapper">
      {children}
    </section>
  );
};

export default ContactLayout;

