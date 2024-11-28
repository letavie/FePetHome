import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

export default function MoreiconHisoty({
  handleEdit,
  handleDelete,
  handleUnDelete,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon style={{ color: "black" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleDelete(); // Gọi hàm handleDelete khi nhấn vào Delete
            handleCloseMenu(); // Đóng menu sau khi gọi handleDelete
          }}
        >
          <ClearIcon className="mr-6" style={{ color: "red" }} />
          Hủy
        </MenuItem>
      </Menu>
    </div>
  );
}
