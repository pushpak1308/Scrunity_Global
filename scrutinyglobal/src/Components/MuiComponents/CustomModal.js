import React from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import modalImage from '../../modalImage.svg'
import '../Screens/Login.css'
import CustomContainedButton from "./CustomContainedButton";

const CustomModal = ({
    show,
    handleClose,
    heading,
    content,
    otpProps,
    buttonText,
    buttonAction,
    handleModalButtonClick
}) => {

    const navigate = useNavigate();

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: '90%',
        maxWidth: '500px',
        bgcolor: "background.paper",
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
        p: 4,
        borderRadius: "10px",
    };

    const handleButton = () => {
        if (buttonAction) {
            navigate('/login');
        }
        else {
            handleModalButtonClick();
        }
    };

    return (
        <Modal open={show} >
            <Box sx={style}>
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "700", fontSize: "3vh", textAlign: 'center' }}
                    style={{ fontFamily: "Vollkorn ,serif" }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    sx={{ mt: 2, mb: 4, textAlign: 'center' }}
                >
                    {content}
                </Typography>


                <Box display="flex" justifyContent="center" sx={{ textAlign: 'center', mt: 6 }}>
                    {otpProps && (
                        <OtpInput
                            value={otpProps.otp}
                            onChange={otpProps.onChangeOTP}
                            renderSeparator={<span style={{ margin: '0 10px' }}> </span>}
                            renderInput={(props) => <input {...props} />}
                            numInputs={4}
                            inputStyle={{
                                width: '4rem',
                                height: '3rem',
                                fontSize: '2rem',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                    )}
                    {buttonAction && (
                        <img src={modalImage} alt="success" style={{ width: '50%', height: 'auto' }} />

                    )}
                </Box>


                <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                    <CustomContainedButton
                        type="button"
                        onClickFunction={handleButton}
                        buttonText={buttonText}
                        width={true}
                    />
                </Box>

                {otpProps && (
                    <>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ my: 4, textAlign: 'center' }}
                        >
                            Are you facing any problem in receiving the code?{' '}
                            <span style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "#0cdaff",
                                cursor: "pointer",
                            }}>Resend Code</span>
                        </Typography>

                        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={otpProps.handleToggleMethod}
                                sx={{
                                    width: "80%",
                                    borderRadius: '10px',
                                    border: '3px solid #0be9f2',
                                }}
                            >
                                {otpProps.verifyMethod === 'email' ? 'Verify using Mobile Number' : 'Verify using Email'}
                            </Button>
                        </Box>
                    </>
                )}

            </Box>
        </Modal>
    );
};

export default CustomModal
