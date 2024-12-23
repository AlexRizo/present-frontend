import { CardNumberElement, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { VITE_STRIPE_PB_KEY } from "@/env/config"
import { Label } from "./ui/label"

const stripePromise = loadStripe(VITE_STRIPE_PB_KEY)

const cardStyle = {
  style: {
    base: {
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "gray"
      }
    },
    invalid: {
      color: "red",
      iconColor: "red"
    }
  }
}

export const StripeProvider = () => {
  
  return (
    <form>
      <Elements stripe={ stripePromise }>
        <div>
          <Label>Tarjeta</Label>
          <div className="border border-gray-300 w-[250px] p-1">
            <CardNumberElement options={ cardStyle } />
          </div>
        </div>
      </Elements>
    </form>
  )
}
