import Checkout from "ui/components/Checkout"
import Header from "ui/components/Header"
export default function Form(){
  return <div className=" bg-gradient-to-b from-blue-50 min-h-full p-6">

    <Header includeNav={ false } mode="light" />
    <main>
      <Checkout />
    </main>
  </div>
}