import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    apiError?: any;
    InputProps?: any;
    passwordCriteria?: any;
    onKeyUp?: () => void;
}

const CustomInput = styled(TextField)({
    marginTop: 0,
    borderRadius: 8,
});

export function InputField({
    name,
    control,
    label,
    apiError,
    InputProps,
    passwordCriteria,
    onKeyUp,
    ...inputProps
}: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <CustomInput
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                label={label}
                inputProps={inputProps}
                InputProps={InputProps}
            />
            <Error error={true}>{error?.message || apiError}</Error>
            {/* {name === 'password' && <PWDRequisite passwordCriteria={passwordCriteria} />} */}
        </>
    );
}
