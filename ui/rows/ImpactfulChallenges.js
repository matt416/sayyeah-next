import View from "ui/components/View"
import Action from "ui/components/Action"

export default function ImpactfulChallenges({ data }) {
  return <View theme="cola">
    <View.Content className="grid grid-cols-1 sm:grid-cols-2 gap-12">

      <h2 className="text-32 font-bold text-yeah-yellow col-span-full">
        { data.title }
      </h2>

      { data.items.map(item => (
        <div>
          <p className="text-24 font-bold pb-2">{ item.blurb }</p>
          { item.actions.map(action => <Action href={ action.href }>{ action.label }</Action> )}
        </div>
      ))}

    </View.Content>
  </View>
}