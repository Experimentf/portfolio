import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Modal,
    Paper,
    Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import Spanner from "../Spanner/Spanner";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Resume.css";
import { Download } from "@mui/icons-material";
import Btn from "../Other/Btn";

const Resume = ({ title = "Resume" }) => {
    const [open, setOpen] = useState(false);
    const [pages, setPages] = useState(null);

    const onDocumentLoad = ({ numPages }) => {
        setPages(numPages);
    };

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
            <Btn onClick={handleOpen} title={title} />
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="body"
                PaperComponent={Paper}
                sx={{
                    "& .MuiPaper-root": {
                        background: "transparent",
                        boxShadow: "none",
                        maxWidth: "100%",
                        overflow: "hidden",
                    },
                    "& .MuiDialog-container": {},
                }}
            >
                <DialogContent
                    sx={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 0,
                    }}
                >
                    <Document
                        className="resume"
                        file={{ url: "/Resume/Resume.pdf" }}
                        onLoadSuccess={onDocumentLoad}
                        loading={<CircularProgress />}
                    >
                        {Array.from(new Array(pages)).map((e, idx) => (
                            <Page
                                key={idx}
                                pageNumber={idx + 1}
                                className="page"
                            />
                        ))}
                    </Document>
                    {pages && (
                        <Btn
                            title={"Download"}
                            startIcon={<Download />}
                            href="/Resume/Resume.pdf"
                            download={"Divyansh_Falodiya_Resume.pdf"}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Resume;
