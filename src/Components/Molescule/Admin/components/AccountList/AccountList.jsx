import React, { useState, useEffect } from 'react';
import MyAxios from "../../../../../setup/configAxios";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AccountList = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await MyAxios.get('http://localhost:5000/api/v1/user');
        const users = response.data; // Accessing the data array from the response
        const formattedUsers = users.map(user => ({
          id: user._id,
          email: user.email,
          fullName: user.name,
          role: user.role,
          isDisabled: user.isDisabled,
        }));
        setRows(formattedUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleStatusChange = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleConfirmStatusChange = async () => {
    try {
      const updatedUser = { ...selectedRow, isDisabled: !selectedRow.isDisabled };
      await MyAxios.get(`http://localhost:5000/api/v1/user/disable?id=${selectedRow.id}`, { isDisabled: updatedUser.isDisabled });
      setRows(rows.map((row) =>
        (row.id === selectedRow.id ? updatedUser : row)
      ));
    } catch (error) {
      console.error('Error updating user status:', error);
    }
    handleClose();
  };

  const handleSelectionModelChange = (selection) => {
    console.log('Selected rows:', selection);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'fullName', headerName: 'Họ và tên', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'isDisabled',
      headerName: 'Trạng thái',
      width: 150,
      renderCell: (params) => (params.value ? 'Disabled' : 'Active')
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={params.row.isDisabled ? <CheckCircleIcon /> : <BlockIcon />}
          label={params.row.isDisabled ? "Enable" : "Disable"}
          onClick={() => handleStatusChange(params.row)}
        />,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Quản lý tài khoản</h1>
        <div className="p-4 rounded-md shadow-md">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={handleSelectionModelChange}
              sx={{ backgroundColor: 'inherit' }}
            />
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedRow?.isDisabled ? 'Enable Account' : 'Disable Account'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có muốn {selectedRow?.isDisabled ? 'enable' : 'disable'} tài khoản này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmStatusChange} color="primary">
            {selectedRow?.isDisabled ? 'Enable' : 'Disable'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AccountList;
