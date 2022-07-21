import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Dialog,
    Modal,
    Paper,
} from "@mui/material";
import React, { useState } from "react";
import Spanner from "../Spanner/Spanner";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Resume.css";

const Resume = ({ title = "Resume" }) => {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);
    const [pages, setPages] = useState(null);

    const onDocumentLoad = ({ numPages }) => {
        setPages(numPages);
    };

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
            <Button
                onClick={handleOpen}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{ textTransform: "none", fontFamily: "Anton", mt: 5 }}
                variant="contained"
            >
                <Spanner text={title} hover={hover} />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="body"
                PaperComponent={Paper}
                sx={{
                    "& .MuiPaper-root": {
                        background: "transparent",
                        m: 5,
                        maxWidth: "100%",
                        overflow: "hidden",
                    },
                    "& .MuiDialog-container": {},
                }}
            >
                <Document
                    className="resume"
                    file={{ url: "/Resume/Resume.pdf" }}
                    onLoadSuccess={onDocumentLoad}
                    loading={<CircularProgress />}
                >
                    {Array.from(new Array(pages)).map((e, idx) => (
                        <Page key={idx} pageNumber={idx + 1} className="page" />
                    ))}
                </Document>
            </Dialog>
        </>
    );
};

export default Resume;
