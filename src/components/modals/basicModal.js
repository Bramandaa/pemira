"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function BasicModal({
  children,
  padding,
  width,
  name,
  modal,
  setModal,
  setForm,
  resetForm,
  setIcon,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 2,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: padding ? padding : 6,
  };
  const handleClose = () => {
    setModal && setModal(null);
    setForm && setForm(null);
    resetForm && resetForm();
    setIcon && setIcon();
  };

  return (
    <>
      <Modal
        open={modal == name}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={`w-[90vw] ${width ? `md:w-[${width}vw]` : "md:w-[40vw]"}`}
          sx={style}
        >
          {children}
        </Box>
      </Modal>
    </>
  );
}
