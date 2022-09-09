import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          본인이 작성한 댓글이 아닙니다😅
        </Typography>
        <Button onClick={handleClose}>닫기</Button>
      </Box>
    </Modal>
  );
}
