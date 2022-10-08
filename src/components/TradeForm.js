import React from 'react'
import { Form } from 'react-bootstrap';
import { FormControl } from '@mui/material';

const TradeForm = () => {
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

export default TradeForm