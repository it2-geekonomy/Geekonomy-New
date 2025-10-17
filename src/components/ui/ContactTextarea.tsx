import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  touched?: boolean;
  style?: React.CSSProperties;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  touched,
  style,
  ...rest
}) => {
  return (
    <div className="message-group">
      <label className="input-label">{label}</label>
      <textarea {...rest} style={style} className="textarea" />
      {error && touched && <div className="error-text">{error}</div>}
    </div>
  );
};

export default Textarea;
