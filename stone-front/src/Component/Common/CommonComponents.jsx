
export const getNumber = (value) => {
    let operator = "";
    if (value[0] === "-") {
        operator = "-";
    }
    let resultValue = `${operator}${value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")}`;

    let dotIndex = resultValue.indexOf(".");
    if (dotIndex === -1) {
        resultValue = resultValue = `${operator}${Number(value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))}`;
    }
    return resultValue;
};

export const setCurrency = (value, unit) => {
    if (unit == undefined) unit = "";
    if (value == undefined) return "";
    value = value.toString().replace(/,/gi, "");
    let regx = new RegExp(/(-?\d+)(\d{3})/);
    let bExists = value.toString().indexOf(".", 0);
    let strArr = value.toString().split(".");

    while (regx.test(strArr[0])) {
        strArr[0] = strArr[0].replace(regx, "$1,$2");
    }

    if (bExists > -1) value = `${strArr[0]}.${strArr[1]}`;
    else value = strArr[0];

    return value + unit;
};

const LabelSelect = (props) => {
    let param = props.param;
    let option = props?.labelOption;
    return (
        <>
            <label className={`captions ${option?.className ?? ""}`}>{param.caption}</label>
            <Select {...props} />
        </>
    );
};

const Select = (props) => {
    let param = props.param || props;
    //select options 관련 속성
    let option = {
        defaultOption: param.defaultOption ?? true,
        flagUseYn: param.flagUseYn ?? true,
    };
    let value = param.value === null ? {} : param.value;
    return (
        <select
            defaultValue={param.defaultValue}
            value={value}
            required={props.required}
            data-required-name={param.requiredName}
            name={param.name}
            style={props.style}
            className={props.className}
            onChange={props.onChange}
            disabled={props.disabled}
            ref={props.refInfo}
            onKeyDown={props.onKeyDown}
        >
            {selectOption(param.code, option)}
        </select>
    );
};

const LabelInput = (props) => { //<label>태그와 <input>태그를 묶은 컴포넌트
    let param = props.param;
    let option = props?.labelOption;
    return (
        <>
            <label className={`captions ${option?.className ?? ""}`} style={{ ...option?.style }}>
                {param.caption}
            </label>
            <Input {...props} />
        </>
    );
};

const Input = (props) => {
    let param = props.param || props;
    let type = param.type || "text";
    let max = type === "date" ? "9999-12-31" : param.max;
    let onChange = props.onChange;
    let isNumber = param.className?.indexOf("number") > -1;
    if (isNumber) {
        onChange = (e) => {
            e.target.value = getNumber(e.target.value);
            props.onChange(e);
        };
    }
    const onKeyDown = (e) => {
        if (e.keyCode !== 13) return;
        e.preventDefault();
    };

    return (
        <input
            defaultValue={param.defaultValue}
            value={isNumber ? setCurrency(param.value) : param.value}
            style={props.style}
            disabled={props.disabled}
            required={props.required}
            data-required-name={param.requiredName}
            type={type}
            name={param.name}
            className={props.className}
            placeholder={param.placeholder}
            min={param.min}
            max={max}
            pattern={param.pattern}
            maxLength={param.maxLength}
            readOnly={props.readOnly}
            ref={props.refInfo}
            checked={props.checked}
            onChange={onChange}
            onClick={props.onClick}
            onFocus={props.onFocus}
            onKeyPress={props.onKeyPress}
            onKeyUp={props.onKeyUp}
            format={param.format}
            step={param.step}
            accept={param.accept}
            data-result-type={param.resultType}
            multiple={param.multiple}
            defaultChecked={param.defaultChecked}
            onKeyDown={!props.onKeyDown ? onKeyDown : props.onKeyDown}
            autoComplete={"off"}
            hidden={param.hidden}
        />
    );
};

const getRefArray = (ref) => {
    let refChildren = ref.current.querySelectorAll("input, select");
    let refArray = [...refChildren];
    return refArray;
};

const searchParam = (paramArr) => {
    let params = {};
    paramArr
        .filter((x) => !isEmptyVar(x.name))
        .forEach(({ name, value, type, checked, list, className, dataset }) => {
            if (type === "checkbox") {
                if (className == "multiCheck") {
                    if (checked) {
                        if (isEmptyVar(params[name])) {
                            params[name] = `${dataset.value}`;
                        } else {
                            params[name] += `,${dataset.value}`;
                        }
                    }
                } else {
                    params[name] = checked;
                }
            } else if (!isEmptyVar(list)) {
                params[name] = isEmptyVar(value) ? "" : list.querySelector(`option[value='${value}']`).dataset.value;
            } else {
                params[name] = value;
            }
        });
    return params;
};

const isEmptyObj = (obj) => {
    if (isEmptyVar(obj)) return true;
    if ((obj.constructor === Object || obj.constructor === Array) && Object.keys(obj).length === 0) {
        return true;
    }

    return false;
};

const setCommonCodeState = async (param, setCommonCode) => {
    let codeList;
    switch (param) {
        case "MENU_CODE":
            codeList = await getMenuCodeList();
            break;
        case "MKT_OWN_CODE":
            codeList = await getMktOwnCodeList();
            break;
        case "PRDT_CODE":
            codeList = await getPrdtCodeList();
            break;
        case "CLNT_CODE":
            codeList = await getClntCodeList();
            break;
        default:
            codeList = await getCommonCodeList(param);
            break;
    }
    setCommonCode(codeList);
};

export {
    LabelSelect,
    Select,
    LabelInput,
    Input,
    getRefArray,
    searchParam,
    isEmptyObj,
    setCommonCodeState,
};
