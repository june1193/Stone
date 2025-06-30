import { useState, useRef } from "react";
import { useForm } from "react-hook-form"; //form 관련 상태와 유효성 검사를 간단하게 관리하는 훅
import { debounce } from "lodash"; //특정 함수가 연속으로 호출될 때, 마지막 호출만 실행되도록 지연시킴
import { getRefArray, searchParam, LabelInput } from "../../Component/Common/CommonComponents.jsx";
import TestCustomerGrid from "../../Component/Grid/CustomerGrid.jsx";

const TestCustomerManage = () => {
    const { handleSubmit } = useForm();
    const searchRef = useRef();
    const [gridParam, setGridParam] = useState({});

    const onSearch = () => {
        const paramArr = getRefArray(searchRef);
        const paramData = { ...searchParam(paramArr) };
        setGridParam(() => paramData);
    };

    return (
        <div>
            <h2>고객 요금 테스트</h2>
            <form onSubmit={handleSubmit(debounce(onSearch, 100, true))}>
                <div ref={searchRef}>
                    <LabelInput param={{ name: "custNm" }} />
                    <button type="submit">조회</button>
                </div>
            </form>
            <TestCustomerGrid
                selfGrid={{
                    gridRef: null,
                    gridParam,
                    setGridParam,
                }}
            />
        </div>
    );
};

export default TestCustomerManage;
