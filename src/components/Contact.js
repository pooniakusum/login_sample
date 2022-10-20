import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    Container,
    Form,
    FormGroup,
    Input,
    Button,
    ButtonGroup,
} from "reactstrap";
import base_url from "../api/bootapi";

const Contact = ({ token }) => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    const [contact, setContact] = useState([]);

    const handleForm = (e) => {
        console.log(contact);
        postDataToServer(contact);
        document.getElementById("contactForm").reset();
        e.preventDefault();
    };

    const postDataToServer = (data) => {
        axios
            .post(`${base_url}/contact`, data, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(
                (response) => {
                    console.log(response);
                    console.log("success");
                    toast.success("Submitted Successfully...!!", {
                        position: "bottom-center",
                    });
                },
                (error) => {
                    console.log("error");
                    console.log(error);
                    toast.error("Something went wrong..!!", {
                        position: "bottom-center",
                    });
                }
            );
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Contact Us</h1>
            <Form id="contactForm" onSubmit={handleForm}>
                <FormGroup>
                    <label>
                        <h5>Name</h5>
                    </label>
                    <Input
                        type="text"
                        placeholder="Enter Here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setContact({ ...contact, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>
                        <h5>Contact Number</h5>
                    </label>
                    <Input
                        type="number"
                        placeholder="Enter Here"
                        name="phone"
                        id="phone"
                        onChange={(e) => {
                            setContact({ ...contact, phone: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>
                        <h5>Message</h5>
                    </label>
                    <Input
                        type="textarea"
                        placeholder="Enter Here"
                        name="message"
                        id="message"
                        onChange={(e) => {
                            setContact({ ...contact, message: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">
                        Submit
                    </Button>{" "}
                    <Button type="reset" color="warning">
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default Contact;
