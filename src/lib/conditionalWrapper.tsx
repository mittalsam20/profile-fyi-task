import React from 'react';

const ConditionalWrapper = (props: any) => {
  const {
    condition,
    wrapper,
    children,
    type = 'wrapperAsFunction',
    ...otherProps
  } = props;
  switch (type) {
    case 'wrapperAsFunction': {
      return condition
        ? wrapper({ children, ...otherProps })
        : React.cloneElement(children, { ...otherProps });
    }
    case 'wrapperAsElement': {
      return condition
        ? React.cloneElement(wrapper, { children, ...otherProps })
        : React.cloneElement(children, { ...otherProps });
    }
  }
};

export default ConditionalWrapper;
