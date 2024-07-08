import './Popup.css'

interface PopupProps {
  text: string
  closePopup: () => void
  action: () => void
  content: string
}
export const Popup = ({ text, action, closePopup, content }: PopupProps) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{text}</h1>
        <div>
          <button onClick={action} className="m-5 border-4 p-2">
            {content}
          </button>
          <button onClick={closePopup} className="m-5 border-4 p-2">
            No
          </button>
        </div>
      </div>
    </div>
  )
}
