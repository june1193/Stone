import React, { useState } from "react";
import axios from "axios";

function File() {
    const [fileName, setFileName] = useState("test");
    const [readYm, setReadYm] = useState("202406");
    const [message, setMessage] = useState("");

    const handleGenerate = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/file/generate", {
                params: { fileName, readYm },
            });
            setMessage(res.data); // 성공 시: 파일 경로 메시지
        } catch (err) {
            setMessage("에러: " + err.message);
        }
    };

    return (
        <div>
            <h2>파일 생성 테스트 페이지</h2>
            <div>
                <label>파일명: </label>
                <input value={fileName} onChange={(e) => setFileName(e.target.value)} />
            </div>
            <div>
                <label>조회 연월: </label>
                <input value={readYm} onChange={(e) => setReadYm(e.target.value)} />
            </div>
            <button onClick={handleGenerate}>파일 생성</button>
            <div style={{ marginTop: "1em" }}>{message}</div>
        </div>
    );
}

export default File;
