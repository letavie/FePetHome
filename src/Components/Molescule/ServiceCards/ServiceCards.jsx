import ContentCutIcon from "@mui/icons-material/ContentCut";
import "./ServiceCard.css";
import Text from "../../Atom/Text/Text";
function ServiceCard({ title, detail, className, onClick }) {
  return (
    <div className={`service-card-container ${className}`}>
      <div className="service-card-detail">
        <div className="service-card-icon">
          <img
            src="https://t4.ftcdn.net/jpg/04/22/57/65/360_F_422576509_8MxGhSGZ4otQPtV6FyqO2FPrgNRTlEXj.jpg"
            className="ser-img"
          />
        </div>
        <div className="service-card-title">
          <Text content={title} className={"service-card-title-text"} />
        </div>
        <div className="service-card-information">
          <Text content={detail} />
        </div>

        <div className="service-card-button" onClick={onClick}>
          <Text className="button-detail" content={"xem thêm"} />
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
