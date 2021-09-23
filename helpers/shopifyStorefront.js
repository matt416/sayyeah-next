import Client from 'shopify-buy';

const shopifyCheckout = {
  client : null,

  initialize_client (){
    this.client = Client.buildClient({
      domain: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
      storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
    });
  },

  async create_checkout_and_get_redirect_url (data){

    const client = this.client;

    const customAttributes = [
      { key: "First name", value: data.first_name },
      { key: "Last name", value: data.last_name },
      { key: "Email address", value: data.email_address },
      { key: "Phone number", value: data.phone_number },
      { key: "Website URL", value: data.website_url },
      { key: "Agree to terms and conditions", value: data.agree_terms_and_conditions ? 'Yes' : 'No' }, // Make boolean human readable
    ]

    console.log(customAttributes)

    const product = await client.product.fetchByHandle(data.product_sku)

    const variant_id = product.variants[0].id;

    const lineItems = [
      {
        variantId: variant_id,
        quantity: 1,
        customAttributes: [{key: "Website URL", value: data.website_url}]
      }
    ];

    let checkout = await client.checkout.create({ customAttributes, lineItems })

    return checkout.webUrl;

  }
}

export default function StorefrontCheckout() {
  const checkout = Object.create(shopifyCheckout);
  checkout.initialize_client();
  console.log(checkout)
  return checkout;
}