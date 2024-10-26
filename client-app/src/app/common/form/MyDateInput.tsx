import React from 'react';
import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateInput: React.FC<{ name: string; [key: string]: any }> = (props) => {
    const [field, meta, helpers] = useField(props.name); // Destructure to get field, meta, and helpers

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={field.value ? new Date(field.value) : null} // Handle date selection
                onChange={(date: Date | null) => {
                    helpers.setValue(date); // Set the selected date
                }}
                // Optional: Add any other props needed, like minDate, maxDate, etc.
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label> // Display error message if any
            ) : null}
        </Form.Field>
    );
};

export default MyDateInput;

