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
  const { spark20proConfig } = window as any
  const handleButtonClick = () => {
    if (customClickEvent) {
      customClickEvent()
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div
      className={`button_component ${isOpen ? "open" : ""}`}
      onClick={() => handleButtonClick()}
    >
      {isOpen ? (
        <span className='text on'>{spark20proConfig.button_text.on}</span>
      ) : (
        <span className='text off'>{spark20proConfig.button_text.off}</span>
      )}
      <div className='button_block'></div>
    </div>
  )
}
