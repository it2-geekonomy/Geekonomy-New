import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  style,
  ...rest
}) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input {...rest} style={style} className="input" />
      {error && touched && <div className="error-text">{error}</div>}
    </div>
  );
};

export default Input;
