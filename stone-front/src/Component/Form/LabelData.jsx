import { getNumber } from "../../lib/dataFunc";
import { setCurrency } from "../../lib/dataFormat";

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

export {
    LabelSelect,
    Select,
    LabelInput,
    Input
};
