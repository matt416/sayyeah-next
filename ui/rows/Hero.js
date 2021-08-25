import View from "ui/components/View"
import { isEmpty } from "helpers/isEmpty"

export default function Hero({ data }) {

  if (isEmpty(data)) { return null }

  return <View className="min-h-[60vh]" bgColor="black" textColor="white">
    <View.Content className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[60rem] content-center" aria-label="Masthead">
      <div className="flex flex-col items-start space-y-6">
      <h1 className="text-40 text-yeah-yellow font-bold">{ data.title }</h1>
      <p className="text-24">{ data.catchline }</p>
      <ul className="space-y-2">
        { data?.actions?.map(action =>
          <li><a href={ action.href } aria-label={ action.ariaLabel }>{ action.label }</a></li>
        )}
      </ul>
      </div>
    </View.Content>
  </View>
}