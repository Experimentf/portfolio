import {
    CircularProgress,
    Dialog,
    DialogContent,
    Paper,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Resume.css";
import { Download } from "@mui/icons-material";
import Btn from "../Other/Btn";

// Resume Component
const Resume = ({ title = "Resume" }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);
    const [pages, setPages] = useState(null);

    // When document loads
    const onDocumentLoad = ({ numPages }) => {
        setPages(numPages);
    };

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
            {isSmall ? (
                <Btn
                    title={"Resume"}
                    startIcon={<Download />}
                    href="/Resume/Resume.pdf"
                    download={"Divyansh_Falodiya_Resume.pdf"}
                />
            ) : (
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
            )}
        </>
    );
};

export default Resume;
