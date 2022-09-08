import React from 'react';

export default function nestedLayout = (parent, child) => {
  return (page) => parent(child(page));
};
