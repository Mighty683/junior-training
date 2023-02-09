export function AppInput(props) {
  return <div className="input-wrapper">
    <label className="label" htmlFor="">{props.label}</label>
    <input className="input" type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
  </div>
}