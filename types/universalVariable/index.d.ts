export interface uvBasketItem {
  product: {
    id: string;
    url: string;
    name: string;
    description: string;
    manufacturer: string;
    category: string;
    subcategory: string;
    currency: string;
    unit_price: number;
    unit_sale_price: number;
    sku_code: string;
    stock: number;
    voucher: string;
    color: string;
    size: string
  };
  quantity: number;
  subtotal: number;
  total_discount: number;
}

export interface uvListingItem {
  id: string;
  url: string;
  name: string;
  description: string;
  manufacturer: string;
  category: string;
  subcategory: string;
  currency: string;
  unit_price: number;
  unit_sale_price: number;
  sku_code: string;
  stock: number;
  voucher: string;
  color: string;
  size: string
}

export interface universalVariable {
  basket: {
    id: string;
    currency: string;
    subtotal: number;
    subtotal_include_tax: number;
    vouchers: Array<String>;
    voucher_discount: number;
    promotions: Array<string>;
    promotion_discount: number;
    tax: number;
    shipping_cost: number;
    shipping_method: string;
    total: number;
    line_items: Array<uvBasketItem>;
  };
  events: string;
  listing: {
    items: Array<uvListingItem>;
  };
  page: {
    breadcrumb: Array<string>;
    type: string;
  };
  product: {
    id: number;
    url: string;
    name: string;
    description: string;
    manufacturer: string;
    category: string;
    subcategory: string;
    currency: string;
    unit_price: number;
    unit_sale_price: number;
    sku_code: string;
    stock: number;
    voucher: string;
    color: string;
    size: string;
  };
  transaction: {
    order_id: string;
    currency: string;
    payment_type: string;
    subtotal: number;
    subtotal_include_tax: string;
    vouchers: Array<string>;
    voucher_discount: number;
    promotions: Array<string>;
    promotion_discount: number;
    tax: number;
    shipping_cost: number;
    shipping_method: string;
    total: number;
    delivery: {
      name: string;
      address: string;
      city: string;
      state: string;
      postcode: string;
      country: string
    };
    billing: {
      name: string;
      address: string;
      city: string;
      state: string;
      postcode: string;
      country: string
    };
    line_items: Array<uvListingItem>
  };
  user: {
    name: string;
    username: string;
    user_id: number;
    email: string;
    language: string;
    returning: string;
    facebook_id: number;
    twitter_id: string;
    has_transacted: boolean
  }
  version: string;
}
