import React, { useRef } from 'react';

function MyComponent() {
  const ref = useRef();  // Membuat referensi menggunakan useRef
  return <div ref={ref}>Hello</div>;
}

export default MyComponent;