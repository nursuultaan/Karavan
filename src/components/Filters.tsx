import { Button, CascaderProps } from 'antd';
import { Cascader } from 'antd';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
    disableCheckbox?: boolean;
}

const options: Option[] = [
    { label: 'Alabama', value: 'alabama' },
    { label: 'Alaska', value: 'alaska' },
    { label: 'Arizona', value: 'arizona' },
    { label: 'Arkansas', value: 'arkansas' },
    { label: 'California', value: 'california' },
    { label: 'Colorado', value: 'colorado' },
    { label: 'Connecticut', value: 'connecticut' },
    { label: 'Delaware', value: 'delaware' },
    { label: 'Florida', value: 'florida' },
    { label: 'Georgia', value: 'georgia' },
    { label: 'Hawaii', value: 'hawaii' },
    { label: 'Idaho', value: 'idaho' },
    { label: 'Illinois', value: 'illinois' },
    { label: 'Indiana', value: 'indiana' },
    { label: 'Iowa', value: 'iowa' },
    { label: 'Kansas', value: 'kansas' },
    { label: 'Kentucky', value: 'kentucky' },
    { label: 'Louisiana', value: 'louisiana' },
    { label: 'Maine', value: 'maine' },
    { label: 'Maryland', value: 'maryland' },
    { label: 'Massachusetts', value: 'massachusetts' },
    { label: 'Michigan', value: 'michigan' },
    { label: 'Minnesota', value: 'minnesota' },
    { label: 'Mississippi', value: 'mississippi' },
    { label: 'Missouri', value: 'missouri' },
    { label: 'Montana', value: 'montana' },
    { label: 'Nebraska', value: 'nebraska' },
    { label: 'Nevada', value: 'nevada' },
    { label: 'New Hampshire', value: 'newhampshire' },
    { label: 'New Jersey', value: 'newjersey' },
    { label: 'New Mexico', value: 'newmexico' },
    { label: 'New York', value: 'newyork' },
    { label: 'North Carolina', value: 'northcarolina' },
    { label: 'North Dakota', value: 'northdakota' },
    { label: 'Ohio', value: 'ohio' },
    { label: 'Oklahoma', value: 'oklahoma' },
    { label: 'Oregon', value: 'oregon' },
    { label: 'Pennsylvania', value: 'pennsylvania' },
    { label: 'Rhode Island', value: 'rhodeisland' },
    { label: 'South Carolina', value: 'southcarolina' },
    { label: 'South Dakota', value: 'southdakota' },
    { label: 'Tennessee', value: 'tennessee' },
    { label: 'Texas', value: 'texas' },
    { label: 'Utah', value: 'utah' },
    { label: 'Vermont', value: 'vermont' },
    { label: 'Virginia', value: 'virginia' },
    { label: 'Washington', value: 'washington' },
    { label: 'West Virginia', value: 'westvirginia' },
    { label: 'Wisconsin', value: 'wisconsin' },
    { label: 'Wyoming', value: 'wyoming' },
];


const CascaderOnChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
    console.log(value);
};

const inputChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
};

const Filters = () => {
    return (
        <div className={"flex flex-col gap-2 sm:p-5 p-2 sm:w-[300px]"}>
            <Cascader
                placeholder={"Location"}
                style={{ width: '100%' }}
                options={options}
                onChange={CascaderOnChange}
                multiple
                className={"text-lg"}
                maxTagCount="responsive"
                dropdownClassName={"p-2 sm:w-[300px]"}
                dropdownRender={(menu) => <div style={{ width: '100%' }}>{menu}</div>}
            />
            <div className={"flex gap-3 w-full mb-4 mt-2"}>
                <InputNumber size="large" min={1} max={100000} style={{ width: '100%' }} placeholder={"Price From"} onChange={inputChange} />
                <InputNumber size="large" min={1} max={100000} style={{ width: '100%' }} placeholder={"Price To"} onChange={inputChange} />
            </div>
            <Button className={"bg-amazonYellow text-white text-lg p-3"}>Show</Button>
            <Button>Reset All Filters</Button>
        </div>
    );
};

export default Filters;
