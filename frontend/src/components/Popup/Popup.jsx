import React, {useState} from "react";
import "./Popup.css";
import productService from "../../services/ProductService";
import Loading from "../Loading/Loading";
import ToastMess from "../ToastMess/ToastMess";

function Popup(props) {
    const [shown, setShown] = useState(props.show)
    const [loading, setLoading] = useState(false)
    

    const handleClose = () => {
        setShown(false)
    }

    const handleDelete = async () => {
        setLoading(true)
        const res = await productService.deleteProduct(props.id)
        props.setTxtToast(res?.message)
        props.setToastMess(true)
        setShown(false) // delete successful -> hide popup
        props.setIsDelete(!props.isDelete) // change state to reload data
        setLoading(false)
    }
  return (
    <div className="pop-up" style={shown ? {display: "flex"} : {display: "none"}}>
        {loading && <Loading />}
      <div className="p-pop-up">
        <div class="popup-main">
          <div class="popup-title" style={{fontWeight: "bold"}}>Delete product information</div>
          <div class="popup-content">
            <i class="fas fa-exclamation-triangle" style={{color: "var(--error-color)"}}></i>
            <p id="textPopup">Are you sure want to delete this product information?</p>
          </div>
        </div>
        <div class="popup-footer">
          <button
            class="btn btn-cancel"
            id="btnCancelPopup"
            style={{marginRight: "16px"}}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button class="btn btn-delete" id="btnDelete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
