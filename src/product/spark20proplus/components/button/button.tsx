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
  const { spark20proplusConfig } = window as any
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
        <span className='text on'>{spark20proplusConfig.button_text.on}</span>
      ) : (
        <span className='text off'>{spark20proplusConfig.button_text.off}</span>
      )}
      <div className='button_block'></div>
    </div>
  )
}
