import { SetStateAction } from "react";
import "./Modal.css"
// const Modal = () => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div>
//       <button onClick={toggleModal}>Open Modal</button>

    //   {showModal && (
    //     <div className="modal-overlay">
    //       <div className="modal">
    //         <button className="close-button" onClick={toggleModal}>
    //           X
    //         </button>
    //         {/* Your modal content here */}
    //         <h2>poop</h2>
    //         <p>pee</p>
    //       </div>
    //     </div>
    //   )}
//     </div>
//   );
// };

// export default Modal;
interface modalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

function Modal({showModal, setShowModal}: modalProps) {

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (    
        showModal && 
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              X
            </button>
            {/* Your modal content here */}
            <h2 style={{color:"black"}}>poop</h2>
            <p>pee</p>
          </div>
        </div>
    );
}

export default Modal;