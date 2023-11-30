import "./index.scss"

interface ButtonProps {
  isOpen: boolean
  setIsOpen: any
  customClickEvent?: any
}

export const Button = ({
  isOpen,
  setIsOpen,
  customClickEvent,
}: ButtonProps) => {
  const handleButtonClick = () => {
    if(customClickEvent) {
      customClickEvent()
    }else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div
      className={`button_component ${isOpen ? "open" : ""}`}
      onClick={() => handleButtonClick()}
    >
      {isOpen ? (
        <span className='text on'>ON</span>
      ) : (
        <span className='text off'>OFF</span>
      )}
      <div className='button_block'></div>
    </div>
  )
}
