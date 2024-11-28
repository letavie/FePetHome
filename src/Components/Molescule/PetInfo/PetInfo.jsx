import { useEffect, useRef, useState } from "react";
import styles from "./Petinfo.module.scss";
import MyAxios from "setup/configAxios";
import PetCard from "../PetCards/PetCards";
import { Modal, ModalBody, ModalHeader } from "Components/Atom/Modal/Modal";
import { toast } from "react-toastify";
const Petinfo = () => {
  const [petlist, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addshow, setAddShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    sex: "Đực",
    breed: "",
    age: "",
    weight: "",
  });
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    MyAxios.get(`http://localhost:5000/api/v1/pet?userId=${userId}`)
      .then((response) => {
        setPetList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log("pet", petlist);

  const handleAddShow = () => {
    setAddShow(true);
  };
  const handleAddClose = () => {
    setAddShow(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const data = new FormData();
    data.append("userId", userId);
    data.append("name", formData.name);
    data.append("species", formData.species);
    data.append("sex", formData.sex);
    data.append("breed", formData.breed);
    data.append("age", formData.age);
    data.append("weight", formData.weight);
    if (file) {
      data.append("file", file);
    }

    try {
      const response = await MyAxios.post("http://localhost:5000/api/v1/pet", data);
      toast.success(` Đã thêm thú cưng vào danh sách `, {});
      console.log(response.data);
      setAddShow(false);
      setFormData({
        name: "",
        species: "",
        sex: "",
        breed: "",
        age: "",
        weight: "",
      });
      setFile(null);
      const updatedPetList = await MyAxios.get(`http://localhost:5000/api/v1/pet?userId=${userId}`);
      setPetList(updatedPetList.data);
    } catch (error) {
      console.error("There was an error uploading the data!", error);
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <h3 className={styles["text"]}> Danh sách thú cưng của tôi</h3>
        <button className={styles["add-btn"]} onClick={handleAddShow}>
          Thêm thú cưng
        </button>
      </div>
      <div className={styles["pet-list"]}>
        <div className={styles["pet-card"]}>
          {petlist.map((pet) => (
            <PetCard
              img={pet.image.url}
              name={pet.name}
              status={pet.serviceStatus}
              species={pet.species}
              sex={pet.sex}
              age={pet.age}
              breed={pet.breed}
              weight={pet.weight}
            />
          ))}
        </div>
      </div>
      <div>
        <Modal show={addshow} onHide={handleAddClose} size={"sm"}>
          <ModalHeader content={"Thêm thú cưng"} />
          <div className={styles["add-modal-frame"]}>
            <div className={styles["add-modal-container"]}>
              <ModalBody>
                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="name">
                      Tên <span className={styles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="species">Loại</label>
                    <input
                      type="text"
                      id="species"
                      name="species"
                      value={formData.species}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="breed">
                      Giống loài <span className={styles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      value={formData.breed}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="age">Giới tính</label>
                    <select name="sex" id="sex" value={formData.sex} onChange={handleInputChange}>
                      <option value="Đực">Đực</option>
                      <option value="Cái">Cái</option>
                    </select>
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="age">Tuổi</label>
                    <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="weight">
                      Cân nặng <span className={styles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="file">Ảnh</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="image/png, image/jpeg"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <div className={styles["file"]}>
                      <button type="button" onClick={handleFileUpload} className={styles["btn-file"]}>
                        Chọn file ảnh
                      </button>
                      {file && <span className={styles["file-text"]}>{file.name}</span>}
                    </div>
                  </div>
                  <div className={styles["submit"]}>
                    <button type="submit" className={styles["submit-btn"]}>
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </ModalBody>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Petinfo;
