import React, { useState } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Input as UIInput } from '@/components/ui/input';
import Label from '@/components/Label/Label';
import OpenEyeIcon from '@/components/svg/open-eye-icon';
import ClosedEyeIcon from '@/components/svg/closed-eye-icon';
import ConditionalWrapper from '@/lib/conditionalWrapper';

const inputVariants = cva(
  'border border-solid border-slate-200 shadow-[0_2px_4px_0px_rgba(27,33,47,0.06)] placeholder:text-slate-400 focus-visible:ring-offset-0  focus-visible:border-[#425EF6] focus-visible:ring-[rgba(66, 94, 246, 0.32)] text-base',
  {
    variants: {
      iconPosition: {
        right: '',
        left: 'pl-10',
      },
      size: {
        lg: 'h-14 rounded-xl',
        md: 'h-10 rounded-lg',
        sm: 'h-8 rounded-md',
      },
    },
    defaultVariants: {
      iconPosition: 'right',
      size: 'md',
    },
  },
);

const IconWrapper = (props: any) => {
  const { children } = props;
  return <span className="relative w-full">{children}</span>;
};

const InputWrapper = React.forwardRef((props: any, ref) => {
  const {
    type,
    size,
    className,
    icon: Icon = null,
    iconPosition = 'right',
    isIconClickable = false,
    onClickIcon = () => {},
    ...rest
  } = props;
  const showIcon = !!Icon;

  return (
    <ConditionalWrapper
      condition={showIcon}
      type={'wrapperAsElement'}
      wrapper={<IconWrapper />}
    >
      <>
        {showIcon && (
          <span
            onClick={onClickIcon}
            className={`absolute top-1/2 -translate-y-1/2 ${isIconClickable && 'cursor-pointer'} ${iconPosition === 'right' ? 'right-4' : 'left-4'}`}
          >
            <Icon />
          </span>
        )}
        <UIInput
          ref={ref}
          {...rest}
          type={type}
          className={cn(inputVariants({ iconPosition, size, className }))}
        />
      </>
    </ConditionalWrapper>
  );
});
InputWrapper.displayName = 'InputWrapper';

const PasswordInput = React.forwardRef((props: any, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <InputWrapper
      ref={ref}
      {...props}
      isIconClickable={true}
      onClickIcon={toggleShowPassword}
      type={showPassword ? 'text' : 'password'}
      icon={showPassword ? OpenEyeIcon : ClosedEyeIcon}
    />
  );
});
PasswordInput.displayName = 'PasswordInput';

const Input = React.forwardRef((props: any, ref) => {
  const { label, type } = props;

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <Label className="text-sm font-medium text-slate-500">{label}</Label>
      )}
      {type === 'password' ? (
        <PasswordInput ref={ref} {...props} />
      ) : (
        <InputWrapper ref={ref} {...props} />
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
