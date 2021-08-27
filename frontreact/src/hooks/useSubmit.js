export const useSubmit = ({values, onSubmit}) => event => {
  event.preventDefault()
  const data = values.reduce((acc, {value, name}) =>
    ({...acc, [name]: value}) , {})
  onSubmit(data)
}
