import { FC, InputHTMLAttributes, memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = "text",
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={classNames(cls.InputWrapper, { [cls.active]: isFocused }, [
        className,
      ])}
    >
      {placeholder && (
        <span className={cls.placeholder}>
          {placeholder}
        </span>
      )}
      <input
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={cls.input}
        value={value}
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
