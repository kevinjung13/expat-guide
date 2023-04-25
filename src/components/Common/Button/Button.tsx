export interface ButtonProps {
  label: string;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: string;
}

export default function Button(props: ButtonProps) {

  const { onClick, isDisabled, isLoading, label } = props

  let className = `rounded-full bg-red-500`

  return (
    <>
      <button
        disabled={isDisabled}
        className={className}
        onClick={onClick}>
        {isLoading}
        {label}
      </button>
    </>
  )
}