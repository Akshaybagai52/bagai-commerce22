import "./FormInput.styles.scss";
export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shring" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
