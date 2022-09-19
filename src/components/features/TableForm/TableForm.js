import clsx from 'clsx';
import {useState} from 'react';
import { useForm } from "react-hook-form";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './TableForm.module.scss';

const TableForm = ({
    action,
    ...props}
) => {

    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount)
    const [bill, setBill] = useState(props.bill || 0);

    const handleSubmit = () => {
        action({ status, peopleAmount, maxPeopleAmount, bill })
    }

    if(peopleAmount > maxPeopleAmount) {
        setPeopleAmount(maxPeopleAmount)
    }

    if(maxPeopleAmount > 10) {
        setMaxPeopleAmount(10);
    };

    if(peopleAmount < 0) {
        setPeopleAmount(0);
    }

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return (
        <>
            <h1 className={"mb-4"}>Table {props.id}</h1>
            <Form onSubmit={validate(handleSubmit)}>
                <Form.Label className="d-inline fw-bold pe-3 mb-4">Status:</Form.Label>
                <Form.Select 
                    {...register("status", { required: true })}
                    className="d-inline w-25 mb-4" 
                    aria-label="Select status" 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    >              
                        <option value="Free">Free</option>
                        <option value="Busy">Busy</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Cleaning">Cleaning</option>
                </Form.Select>
                {errors.status && <span>Choose right status</span>}

                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">People:</Form.Label>
                    <Form.Control 
                        {...register("peopleAmount", { required: true })}
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={peopleAmount}
                        onChange={e => setPeopleAmount(e.target.value)}
                        />
                        {errors.peopleAmount && <span className="d-block form-text text-danger mt-2">This field is required</span>}
                    <h5 className="d-inline px-2">/</h5>
                    <Form.Control 
                        {...register("maxPeopleAmount", { required: true })}
                        className="d-inline w-25 mb-4" 
                        size="lg" type="text" 
                        value={maxPeopleAmount}
                        onChange={e => setMaxPeopleAmount(e.target.value)}
                        />
                        {errors.maxPeopleAmount && <span className="d-block form-text text-danger mt-2">This field is required</span>}
                </div>
                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">Bill:</Form.Label>
                    <h5 className="d-inline px-2">$</h5>
                    <Form.Control 
                        {...register("bill", { required: true })}
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={bill}
                        onChange={e => setBill(e.target.value)}
                        />
                        {errors.bill && <span className="d-block form-text text-danger mt-2">This field is required</span>}
                </div>
                <Button type="button" variant="primary" size="lg" type="submit">Update</Button>
            </Form>
        </>
    )
}

export default TableForm;