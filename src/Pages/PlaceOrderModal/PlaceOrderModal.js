import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PlaceOrderModal({ open, handleClose, product }) {
    const { user } = useAuth();
    const [orderInfo, setOrderInfo] = React.useState({});
    const handelOnBlur = e => {
        const productId = product._id
        const email = user.email;
        const field = e.target.name;
        const value = e.target.value;
        const time = new Date();
        const status = 'Pending'
        const newOrderInfo = { ...orderInfo, productId, email: email, time, status };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
    }

    const handleOnSubmit = e => {

        fetch('https://fierce-river-92206.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleClose();
                    alert('Order Placed Successfully');

                }
            });
        e.preventDefault();
    }
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            defaultValue={user.email}
                            variant="outlined" disabled
                            color="warning"
                            sx={{ width: 1, my: 1 }} />
                        <TextField
                            onBlur={handelOnBlur}
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            defaultValue={user.displayName}
                            variant="outlined" required
                            color="warning"
                            sx={{ width: 1, my: 1 }}
                        />
                        <TextField
                            onBlur={handelOnBlur}
                            name="address"
                            id="outlined-basic"
                            label="Address"
                            variant="outlined" required
                            color="warning"
                            sx={{ width: 1, my: 1 }}
                        />
                        <TextField
                            onBlur={handelOnBlur}
                            name="phone"
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            sx={{ width: 1, my: 1 }}
                            color="warning"
                            required />
                        <TextField
                            onBlur={handelOnBlur}
                            name="pin"
                            id="outlined-basic"
                            label="PIN"
                            variant="outlined"
                            sx={{ width: 1, my: 1 }}
                            color="warning"
                            required />
                        <Button type="submit" variant="contained" color="warning" sx={{ display: 'block', textAlign: 'center' }}>Order</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
