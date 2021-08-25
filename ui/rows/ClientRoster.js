import View from "ui/components/View"
import Action from "ui/components/Action"

export default function ClientRoster({ data }){
  return <View divide={ true } bgColor="yellow" textColor="black">
    <View.Content className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      { data.title && <h2 className="text-28 font-bold col-span-full">{ data.title }</h2> }

      { data.clients?.map(client =>
        <div className="bg-black bg-opacity-5 rounded min-h-[6rem] flex items-center justify-center">{ client.name }</div>
      )}

      <div className="col-span-full">
        <Action>Additional clients and industries served</Action>
      </div>

    </View.Content>
  </View>
}
