// ActionButton.tsx — working version
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}
/**
 * We are destructuring the props object this component gets passed in. We
 * are also using the rest syntax to collect all other props ( e.g. onClick, className, type) into a variable called rest.
 */
export function ActionButton({ label, onClick, ...rest }: Props) {
  // rest syntax
  /** We are taking the rest object we created in the parameters and unpacking all of its properties
   * (e.g. onClick, className, type) and passing them to the button element.
   */
  return (
    <button onClick={onClick} {...rest}>
      {label}
    </button>
  ) // spread syntax
}
