// app/product/[id]/page.js
'use client';

import ProtectedRoute from '../../hoc/ProtectedRoute';

export default function ProductDetails() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Product Details</h1>
      </div>
    </ProtectedRoute>
  );
}
