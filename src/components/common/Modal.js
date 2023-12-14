import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FeatureModal({img,title,desc,hide}) {
    
    let image_path = require(`../../assets/images/${img}`) ;
    
        let modalStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
  return (
    <div className="modal show fade" style={modalStyle} >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button type="button" className="btn-close" onClick={hide}></button>
      </div>
      <div className="modal-body">
        <img src={image_path} />
        <p>{desc}</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default FeatureModal;
