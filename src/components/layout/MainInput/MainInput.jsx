import styles from "./MainInput.module.scss";

const MainInput = ({
  className,
  isInvalid,
  isTextArea,
  type,
  ...attributes
}) => {
  const TagName = isTextArea ? "textarea" : "input";
  return (
    <TagName
      type={type || "text"}
      className={`
        ${styles.mainInput} 
        ${isTextArea ? styles.mainInput_textArea : ""} 
        ${isInvalid ? styles.mainInput_invalid : ""}         
        ${className ? className : ""}
        `}
      {...attributes}
    />
  );
};

export default MainInput;
