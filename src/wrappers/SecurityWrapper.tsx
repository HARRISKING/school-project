import React, { useEffect } from 'react';
import { connect, Redirect, useLocation } from 'umi';

import { ConnectState } from '@/models/connect';

export interface SecurityWrapperProps {
  token: string;
}

const SecurityWrapper: React.FC<SecurityWrapperProps> = ({
  token,
  children,
}) => {
  useEffect(() => {
    // dispatch && dispatch({ type: 'user/fetchUser' });
  }, []);

  const isLogin = !!token;
  const { pathname } = useLocation();

  if (!isLogin && pathname !== '/') {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};

export default connect(({ user }: ConnectState) => ({
  token: user.token,
}))(SecurityWrapper);
