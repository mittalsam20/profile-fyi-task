'use client';

import Link from 'next/link';
import { useState } from 'react';

import Input from '@/components/dumb/input';
import { Button } from '@/components/ui/button';
import CartIcon from '@/components/svg/cart-icon';
import SearchIcon from '@/components/svg/search-icon';
import { signIn, signOut, useSession } from 'next-auth/react';
import ProfileFyiIcon from '@/components/svg/profile-fyi-icon';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');
  const session = useSession();
  const isUserLoggedIn = !!session.data;

  const onClickLoginLogout = async () => {
    if (isUserLoggedIn) {
      signOut({ callbackUrl: '/' });
      return;
    }
    signIn();
  };

  const handleSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <div className="mb-5 flex h-16 items-center justify-around bg-blue-500 p-2">
      <Link href="/">
        <ProfileFyiIcon />
      </Link>

      <div className="lg:w-[650px]">
        <Input
          icon={SearchIcon}
          value={searchText}
          onChange={handleSearchBar}
          placeholder={'Search'}
        />
      </div>

      <div className="flex gap-10">
        <Link
          href="/cart"
          className="flex items-center gap-2 text-lg text-white"
        >
          <CartIcon /> {'Cart'}
        </Link>
        <Button variant={'outline'} onClick={onClickLoginLogout}>
          {isUserLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
