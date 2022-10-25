import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { handleSubmit } = useForm();

    const submit = () => {
        if (search === "") {
            navigate(`/search/${"all"}`);
        }else{
            navigate(`/search/${search}`);
        }
    };

    return (
        <div className="px-auto d-flex" >
            <Form  onSubmit={handleSubmit(submit)}>
                <InputGroup>
                    <FormControl
                        placeholder="Search products"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        type="submit"
                    >
                        Search
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
};

export default SearchBar;
