import { Label as UILabel } from '@/components/ui/label';

const Label = (props: any) => {
  const { htmlFor, className, children } = props;
  return (
    <UILabel htmlFor={htmlFor} className={className} {...props}>
      {children}
    </UILabel>
  );
};

export default Label;
