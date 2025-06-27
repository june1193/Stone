import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 추가

function File() {
    const [fileName, setFileName] = useState("test");
    const [readYm, setReadYm] = useState("202406");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // 추가

    const handleGenerate = async () => {
        try {
            const res = await axios.get("http://localhost:8081/api/file/generate", {
                params: { fileName, readYm },
            });
            setMessage(res.data);
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

            {/* 홈으로 가기 버튼 */}
            <button onClick={() => navigate("/")} style={{ marginLeft: "1em" }}>
                홈으로
            </button>

            <div style={{ marginTop: "1em" }}>{message}</div>
        </div>
    );
}

export default File;
