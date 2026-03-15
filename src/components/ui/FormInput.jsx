import React, { forwardRef } from 'react';
import './FormInput.css';

export const FormInput = forwardRef(({ 
  label, 
  id, 
  error, 
  type = 'text', 
  className = '', 
  ...props 
}, ref) => {
  const isTextarea = type === 'textarea';
  const inputClass = `form-control ${error ? 'is-invalid' : ''} ${className}`;

  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      {isTextarea ? (
        <textarea
          ref={ref}
          id={id}
          className={inputClass}
          {...props}
        />
      ) : type === 'select' ? (
        <div className="select-wrapper">
          <select ref={ref} id={id} className={inputClass} {...props}>
            {props.children}
          </select>
        </div>
      ) : (
        <input
          ref={ref}
          type={type}
          id={id}
          className={inputClass}
          {...props}
        />
      )}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
});

FormInput.displayName = 'FormInput';
