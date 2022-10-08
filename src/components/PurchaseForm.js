import React from 'react'
import { FormControl } from '@mui/material';
import { Form } from 'react-bootstrap';

const PurchaseForm = () => {
    return (
        <Form>
            <FormControl>
                <label>
                    First Name:
                    <input type="text" label="fName" className='inputStyle' required />
                </label>
                <label className="innerLabel">
                    Last Name:
                    <input type="text" label="lName" required />
                </label>
            </FormControl>
        </Form>
    )
}

export default PurchaseForm