import { FC } from "react"

import { Input , Label} from "./style"

type Props = {
    label: string;
    onChange?: (val: string) => void;
    name: string;
    value: string | undefined;
    disabled?: boolean | undefined;
    maxLength?: number | undefined;
}

const InputComponents: FC<Props> = ({ onChange, label, name, value, disabled, maxLength }) => {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input onChange={(val) => onChange ? onChange(val.target.value) : undefined} name={name} id={name} value={value} disabled={disabled} maxLength={maxLength} />
        </>
    )
}

export default InputComponents