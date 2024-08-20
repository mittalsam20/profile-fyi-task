'use client';
import Input from '@/components/dumb/input';
import { Button } from '@/components/ui/button';

const CouponModal = () => {
  const onClickApply = () => {};

  return (
    <div className="flex gap-3">
      <Input />
      <Button onClick={onClickApply}>{'Apply'}</Button>
    </div>
  );
};

export default CouponModal;
